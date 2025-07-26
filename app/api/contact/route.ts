import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json()

    // Log environment variables for debugging
    console.log('Email config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO
    })

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'pld112.truehost.cloud',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'noreply@ajibuwaeasyglobal.com',
        pass: process.env.EMAIL_PASS || 'ku#5oq)Uc[tX{9mE',
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Professional email template
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Contact</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background-color: #f1f5f9;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .header p {
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            padding: 40px 30px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
          }
          .info-item {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
            transition: all 0.3s ease;
          }
          .info-item:hover {
            background-color: #f1f5f9;
            transform: translateY(-2px);
          }
          .info-label {
            font-weight: 600;
            color: #475569;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .info-value {
            color: #1e293b;
            font-size: 15px;
            font-weight: 500;
          }
          .message-section {
            background-color: #f8fafc;
            padding: 25px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
          .message-text {
            color: #475569;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #1e293b;
            color: white;
            padding: 25px;
            text-align: center;
            font-size: 13px;
          }
          .footer a {
            color: #3b82f6;
            text-decoration: none;
          }
          .timestamp {
            color: #94a3b8;
            font-size: 12px;
            margin-top: 12px;
          }
          .brand {
            font-weight: 600;
            color: #3b82f6;
          }
          @media (max-width: 600px) {
            .info-grid {
              grid-template-columns: 1fr;
            }
            .header, .content, .footer {
              padding: 25px 20px;
            }
            .header h1 {
              font-size: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Contact</h1>
            <p>You have received a new message from your portfolio website</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Name</div>
                  <div class="info-value">${firstName} ${lastName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone</div>
                  <div class="info-value">${phone}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Subject</div>
                  <div class="info-value">${subject}</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">Message</div>
              <div class="message-section">
                <div class="message-text">${message}</div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>This message was sent from your portfolio contact form</p>
            <p>© 2024 <span class="brand">NasTechie</span> - Full Stack Developer</p>
            <div class="timestamp">
              Sent on ${new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@ajibuwaeasyglobal.com',
      to: process.env.EMAIL_TO || 'naseernoor4864@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: emailTemplate,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
} 