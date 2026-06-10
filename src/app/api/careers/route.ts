import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const careerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  position: z.string().min(2),
  experience: z.string().min(1),
  qualification: z.string().min(2),
  location: z.string().min(1),
  coverLetter: z.string().optional(),
});

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = careerSchema.safeParse(body);
    if (!validation.success) return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    const data = validation.data;
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[Career Application] ${data.position} - ${data.fullName}`,
      html: `<p><b>Name:</b> ${data.fullName}<br><b>Email:</b> ${data.email}<br><b>Phone:</b> ${data.phone}<br><b>Position:</b> ${data.position}<br><b>Experience:</b> ${data.experience}<br><b>Qualification:</b> ${data.qualification}<br><b>Location:</b> ${data.location}<br><b>Cover Letter:</b> ${data.coverLetter || "N/A"}</p>`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: "Career Application Received - NHRL",
      html: `<p>Dear ${data.fullName},<br><br>Thank you for applying for the ${data.position} position at NHRL. We will review your application and contact you within 3-5 business days.<br><br>Best regards,<br>NHRL HR Team</p>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
