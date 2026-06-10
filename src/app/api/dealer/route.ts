import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const dealerSchema = z.object({
  shopName: z.string().min(2),
  ownerName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  state: z.string().min(1),
  district: z.string().min(2),
  city: z.string().min(2),
  address: z.string().min(10),
  pincode: z.string().regex(/^\d{6}$/),
  gstNumber: z.string().optional(),
  drugLicense: z.string().min(5),
  businessType: z.string().min(1),
  message: z.string().optional(),
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
    const validation = dealerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    const data = validation.data;
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[Dealer Registration] ${data.shopName} - ${data.city}, ${data.state}`,
      html: `<p><b>Shop:</b> ${data.shopName}<br><b>Owner:</b> ${data.ownerName}<br><b>Phone:</b> ${data.phone}<br><b>Email:</b> ${data.email}<br><b>Location:</b> ${data.city}, ${data.district}, ${data.state} - ${data.pincode}<br><b>Drug License:</b> ${data.drugLicense}<br><b>Business Type:</b> ${data.businessType}</p>`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: "Dealer Registration Received - NHRL",
      html: `<p>Dear ${data.ownerName},<br><br>Thank you for registering as a dealer with NHRL. We will contact you within 24 hours.<br><br>Best regards,<br>NHRL Sales Team</p>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
