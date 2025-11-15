# Email Setup Guide

This guide explains how to configure the contact form to send emails to `elitedigitalxp@gmail.com`.

## Prerequisites

1. A Gmail account (or any email service with SMTP support)
2. 2-Step Verification enabled on your Google account

## Gmail Setup Steps

### Step 1: Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as the app
3. Select "Other (Custom name)" as the device
4. Enter "EDX Contact Form" as the name
5. Click "Generate"
6. Copy the 16-character password (you'll need this)

### Step 3: Create Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Gmail SMTP Configuration
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password

# Alternative variable names (both work)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

**Important:**
- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the App Password you generated
- Never commit `.env.local` to version control (it's already in `.gitignore`)

### Step 4: Restart Development Server

After creating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## Testing

1. Go to the Contact page
2. Fill out the form with:
   - Name
   - Email
   - Message (at least 10 characters)
3. Click "Send Message"
4. Check `elitedigitalxp@gmail.com` for the email

## Troubleshooting

### Error: "Invalid login"
- Verify your App Password is correct (16 characters, no spaces)
- Make sure 2-Step Verification is enabled
- Try generating a new App Password

### Error: "Failed to send message"
- Check your internet connection
- Verify environment variables are set correctly
- Check server logs for detailed error messages

### Email not received
- Check spam/junk folder
- Verify the recipient email (`elitedigitalxp@gmail.com`) is correct
- Check that SMTP_USER matches the Gmail account you're using

## Alternative Email Services

If you prefer not to use Gmail, you can modify the transporter in `app/api/contact/route.ts` to use other SMTP services like:

- SendGrid
- Mailgun
- AWS SES
- Custom SMTP server

Update the transporter configuration accordingly.

