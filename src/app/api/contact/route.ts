import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(3),
  message: z.string().min(20),
});

// Rate limiting store (in-memory, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = validation.data;

    // Create transporter
    const transporter = createTransporter();

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[Contact Form] ${subject} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0a7261, #14b896); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td><td style="padding: 8px 0; color: #333;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px 0; color: #333;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td><td style="padding: 8px 0; color: #333;">${subject}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td><td style="padding: 8px 0; color: #333;">${message}</td></tr>
            </table>
            <hr style="border: 1px solid #e0e0e0; margin: 16px 0;" />
            <p style="color: #999; font-size: 12px;">Submitted from: naturalhomeoresearch.com | IP: ${ip}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for contacting Natural Homeo Research Laboratory",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0a7261, #14b896); padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">Natural Homeo Research Laboratory</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0 0;">Trusted Homeopathic Manufacturing</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for contacting Natural Homeo Research Laboratory. We have received your message and will get back to you within <strong>4 business hours</strong>.</p>
            <p><strong>Your Message Summary:</strong></p>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 12px 0;">
              <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 8px 0 0 0;">${message}</p>
            </div>
            <p>For urgent inquiries, please contact us directly:</p>
            <ul>
              <li>Phone: ${process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
              <li>Email: ${process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
            </ul>
            <p>Best regards,<br /><strong>Natural Homeo Research Laboratory</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
