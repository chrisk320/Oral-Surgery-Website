import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, service, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: process.env.RESEND_TO!,
    replyTo: email,
    subject: `New inquiry from ${name}${service ? ` — ${service}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
        <div style="background: #1B3A5C; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <p style="color: #2A9D8F; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 4px;">OC Implant Oral Surgery</p>
          <h1 style="color: white; font-size: 20px; margin: 0;">New Patient Inquiry</h1>
        </div>
        <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #2A9D8F;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="tel:${phone}" style="color: #2A9D8F;">${phone}</a></td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${service}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px;">
            <p style="font-size: 13px; color: #64748b; margin: 0 0 8px;">Message</p>
            <p style="font-size: 14px; line-height: 1.6; background: #f8fafc; padding: 16px; border-radius: 6px; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
