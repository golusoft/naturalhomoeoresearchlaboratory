import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const distributorSchema = z.object({
  companyName: z.string().min(2),
  contactPerson: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  alternatePhone: z.string().optional(),
  state: z.string().min(1),
  district: z.string().min(2),
  city: z.string().min(2),
  address: z.string().min(10),
  pincode: z.string().regex(/^\d{6}$/),
  gstNumber: z.string().min(15),
  drugLicense: z.string().min(5),
  businessType: z.string().min(1),
  investmentCapacity: z.string().min(1),
  message: z.string().optional(),
});

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
    const body = await request.json();
    const validation = distributorSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const data = validation.data;
    const transporter = createTransporter();

    const fields = [
      ["Company Name", data.companyName],
      ["Contact Person", data.contactPerson],
      ["Email", data.email],
      ["Phone", data.phone],
      ["State", data.state],
      ["District", data.district],
      ["City", data.city],
      ["Address", data.address],
      ["Pincode", data.pincode],
      ["GST Number", data.gstNumber],
      ["Drug License", data.drugLicense],
      ["Business Type", data.businessType],
      ["Investment Capacity", data.investmentCapacity],
      ["Message", data.message || "N/A"],
    ];

    const tableRows = fields
      .map(([label, value]) => `<tr><td style="padding:8px;font-weight:bold;color:#555;width:160px;">${label}:</td><td style="padding:8px;color:#333;">${value}</td></tr>`)
      .join("");

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[Distributor Application] ${data.companyName} - ${data.state}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0a7261, #14b896); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Distributor Application</h2>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">${tableRows}</table>
          </div>
        </div>
      `,
    });

    // Auto-reply
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: "Distributor Application Received - Natural Homeo Research Laboratory",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0a7261, #14b896); padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">Application Received</h2>
          </div>
          <div style="background: #fff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <p>Dear <strong>${data.contactPerson}</strong>,</p>
            <p>Thank you for applying for distributorship with Natural Homeo Research Laboratory.</p>
            <p>We have received your application and our sales team will review it. You will hear from us within <strong>1-2 business days</strong>.</p>
            <p>Application Details:<br />
            Company: <strong>${data.companyName}</strong><br />
            State: <strong>${data.state}</strong></p>
            <p>Best regards,<br /><strong>NHRL Sales Team</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Distributor application error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
