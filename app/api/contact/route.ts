import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Trim and validate
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // API Configuration
    const API_KEY = "2b0298f5-6d94-42f7-a43e-b5ce14b903aa";
    const API_URL = process.env.CONTACT_API_URL || "https://api.example.com/contact";

    // Call external API with the provided key
    try {
      const apiResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
          "Authorization": `Bearer ${API_KEY}`,
          "api-key": API_KEY,
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      let apiData;
      const contentType = apiResponse.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        apiData = await apiResponse.json();
      } else {
        const textData = await apiResponse.text();
        apiData = { response: textData, raw: true };
      }

      // Return the API response directly
      return NextResponse.json(
        {
          success: apiResponse.ok,
          message: apiData.message || apiData.response || apiData.data || JSON.stringify(apiData),
          data: apiData,
        },
        { status: apiResponse.ok ? 200 : apiResponse.status }
      );
    } catch (apiError) {
      console.error("API Error:", apiError);
      // Return API error response
      return NextResponse.json(
        {
          success: false,
          error: apiError instanceof Error ? apiError.message : "API request failed",
          message: apiError instanceof Error ? apiError.message : "Failed to connect to API",
        },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    // Note: You'll need to set these environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER || process.env.GMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.GMAIL_USER,
      to: "elitedigitalxp@gmail.com",
      subject: `New Contact Form Submission from ${trimmedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${trimmedName}</p>
            <p><strong>Email:</strong> ${trimmedEmail}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${trimmedMessage.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from the EDX website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${trimmedName}
Email: ${trimmedEmail}

Message:
${trimmedMessage}

---
This email was sent from the EDX website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    // Handle specific nodemailer errors
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          {
            success: false,
            error: "Email service configuration error. Please contact us directly.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}

