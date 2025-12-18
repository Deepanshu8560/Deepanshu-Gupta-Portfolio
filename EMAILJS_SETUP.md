# EmailJS Setup Guide

## Overview
Your contact form is now integrated with EmailJS to send real emails when users submit the form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (or log in if you have one)
3. Free tier includes: **200 emails/month**

## Step 2: Set Up Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Easy setup, works great
   - **Outlook**: Alternative option
   - **Other**: Custom SMTP
4. Follow the prompts to connect your email
5. **Copy the Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Template Variables** (these are already configured in the code):
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_name}}` - Your name (Deepanshu Gupta)

5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root:
   ```
   d:\New folder\Portfolio\.env
   ```

2. Add your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
   ```

3. **Replace** the `xxxxxxx` with your actual IDs from EmailJS

4. **Save the file**

## Step 6: Restart Development Server

After adding the environment variables:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it:
npm run dev
```

**Important**: Vite requires a restart to load new environment variables!

## Step 7: Test the Contact Form

1. Go to your portfolio: `http://localhost:3000`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click **Send Message**
5. Check your email inbox for the message!

## Troubleshooting

### "EmailJS credentials not configured" Error
- Make sure `.env` file exists in project root
- Check that variable names start with `VITE_`
- Restart the dev server after adding variables

### Emails Not Sending
- Verify all three credentials are correct
- Check EmailJS dashboard for error logs
- Ensure you haven't exceeded the 200 emails/month limit
- Check spam folder for test emails

### Form Shows Error Status
- Open browser console (F12) to see detailed error
- Verify template variables match the code
- Check that email service is connected in EmailJS dashboard

## Security Notes

✅ **Environment variables are secure**:
- `.env` file is in `.gitignore` (won't be committed to Git)
- Variables are only accessible in your build
- Public key is safe to use in frontend code

❌ **Never commit**:
- Your `.env` file
- Service ID, Template ID, or Public Key directly in code

## Email Template Customization

You can customize the email template in EmailJS dashboard:

**Add Auto-Reply**:
1. Create a second template for auto-reply
2. Send confirmation email back to the user
3. Update code to send two emails (one to you, one to sender)

**Add More Fields**:
1. Add fields to the form (e.g., phone, company)
2. Update template to include new variables
3. Pass new data in the `emailjs.send()` call

## Cost & Limits

**Free Tier**:
- 200 emails/month
- 2 email services
- EmailJS branding in emails

**Paid Plans** (if needed):
- $7/month: 1,000 emails
- $15/month: 5,000 emails
- Remove EmailJS branding

## Alternative: Using Your Own SMTP

If you prefer not to use EmailJS, you can:
1. Set up a backend API (Node.js/Express)
2. Use Nodemailer with your SMTP credentials
3. Deploy backend to Vercel/Railway/Render

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Check dashboard for delivery status

---

## Quick Reference

**Environment Variables**:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Template Variables**:
- `{{from_name}}` - Sender name
- `{{from_email}}` - Sender email
- `{{message}}` - Message content
- `{{to_name}}` - Your name

**Files Modified**:
- ✅ `src/components/Contact/Contact.tsx` - EmailJS integration
- ✅ `.env` - Your credentials (add your keys here)
- ✅ `.env.example` - Template for reference
- ✅ `.gitignore` - Protects .env file

---

**Status**: ✅ EmailJS Integration Complete
**Next Step**: Add your credentials to `.env` and test!
