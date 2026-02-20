import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    // Create transporter using SMTP credentials from env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email sent to you (the business)
    await transporter.sendMail({
      from: `"Andes Workwear Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // your receiving email
      replyTo: email,
      subject: `New Contact Form: ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1d2430; padding: 24px; text-align: center;">
            <h1 style="color: #B89A54; margin: 0; font-size: 24px;">New Contact Request</h1>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2E2E2E; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #6E6E6E;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2E2E2E;">Company:</td>
                <td style="padding: 8px 0; color: #6E6E6E;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2E2E2E;">Email:</td>
                <td style="padding: 8px 0; color: #6E6E6E;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2E2E2E;">Phone:</td>
                <td style="padding: 8px 0; color: #6E6E6E;">${phone || 'Not provided'}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5E7EB;">
              <p style="font-weight: bold; color: #2E2E2E; margin-bottom: 8px;">Message:</p>
              <p style="color: #6E6E6E; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #2E2E2E; padding: 16px; text-align: center;">
            <p style="color: #F2F2F2; margin: 0; font-size: 12px;">Sent from andesworkwear.com contact form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
