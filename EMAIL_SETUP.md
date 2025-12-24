# Email Notification Setup Guide

## Current Implementation
The booking form currently uses a `mailto:` link that opens your default email client with pre-filled information when someone submits a demo request.

## To Set Up Automatic Email Notifications

### Option 1: EmailJS (Recommended - Free tier available)

1. **Sign up for EmailJS:**
   - Go to https://www.emailjs.com/
   - Create a free account
   - You get 200 emails/month free

2. **Set up Email Service:**
   - Go to Email Services in dashboard
   - Add Gmail service
   - Connect your abelashinework@gmail.com account

3. **Create Email Template:**
   - Go to Email Templates
   - Create new template
   - Use this template:
   ```
   Subject: New Demo Request from {{from_name}}
   
   New Demo Request Received:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Title: {{title}}
   Organization: {{organization}}
   Country: {{country}}
   Company Type: {{company_type}}
   Message: {{message}}
   
   Please contact them to schedule a demo session.
   ```

4. **Get Your Credentials:**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > API Keys

5. **Update DemoModal.jsx:**
   - Uncomment the EmailJS code
   - Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY
   - Uncomment: `import emailjs from '@emailjs/browser'`

### Option 2: Backend API (More Control)

Create a simple backend endpoint that sends emails using:
- Node.js with Nodemailer
- Python with SMTP
- Or any backend service

Then update the `sendEmailNotification` function to call your API endpoint.

### Option 3: Keep Current mailto: Solution

The current implementation works immediately - it opens the user's email client with all the information pre-filled. You just need to send the email manually.

