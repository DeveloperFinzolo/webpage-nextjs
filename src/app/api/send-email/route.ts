import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // receive email
      subject: "New Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Journey:</b> ${data.journey}</p>
        <p><b>Heard About:</b> ${data.hearAbout}</p>
        <p><b>Interests:</b> ${data.interests.join(", ")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}