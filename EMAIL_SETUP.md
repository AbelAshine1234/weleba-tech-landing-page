# Email Notification Setup Guide

## Current Implementation
✅ **EmailJS is now configured!** The booking form uses EmailJS to automatically send booking emails to `abelashinework@gmail.com`.

## EmailJS Configuration Status

### ✅ Already Configured:
- **Service ID:** `service_agl5k2s` (configured in `DemoModal.jsx`)
- **Recipient Email:** All booking emails are forwarded to `abelashinework@gmail.com`
- **EmailJS Package:** Installed and imported

### ⚠️ Still Need to Complete:

1. **Get Your EmailJS Credentials:**
   - Go to https://www.emailjs.com/ and log in
   - **Template ID:** Found in Email Templates section (copy the Template ID)
   - **Public Key:** Found in Account > API Keys (copy your Public Key)

2. **Create Email Template in EmailJS Dashboard:**
   - Go to Email Templates in your EmailJS dashboard
   - Click "Create New Template"
   - **Important:** Set "To Email" field to: `abelashinework@gmail.com`
   - **📄 See `EMAILJS_TEMPLATE.md` for the complete email template (HTML and plain text versions)**
   - Quick template structure:
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
   - Save the template and copy the Template ID

3. **Update DemoModal.jsx:**
   - Open `src/components/DemoModal.jsx`
   - Replace `YOUR_TEMPLATE_ID` with your actual Template ID (line 23)
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key (line 25)
   - Save the file

### Email Service Setup:
- Make sure your EmailJS service (`service_agl5k2s`) is connected to Gmail
- The service should be configured to send emails from your connected Gmail account
- All emails will be automatically forwarded to `abelashinework@gmail.com` as configured

## Troubleshooting

### Error 400: Bad Request

If you see a **400 error** in the browser console, it means EmailJS rejected the request. Common causes:

1. **Missing or Invalid Template ID**
   - Make sure you've replaced `YOUR_TEMPLATE_ID` with your actual template ID
   - Template ID should look like: `template_xxxxxxx`
   - Find it in: EmailJS Dashboard > Email Templates > Your Template > Template ID

2. **Missing or Invalid Public Key**
   - Make sure you've replaced `YOUR_PUBLIC_KEY` with your actual public key
   - Public Key should look like: `xxxxxxxxxxxxx` (long string)
   - Find it in: EmailJS Dashboard > Account > API Keys > Public Key

3. **Template Parameters Mismatch**
   - The template variables in your EmailJS template must match the ones in `templateParams`
   - Required variables: `{{from_name}}`, `{{from_email}}`, `{{title}}`, `{{organization}}`, `{{country}}`, `{{company_type}}`, `{{message}}`
   - Make sure your template uses these exact variable names (case-sensitive)

4. **Service ID Not Found**
   - Verify that `service_agl5k2s` exists in your EmailJS account
   - Check: EmailJS Dashboard > Email Services
   - If the service ID is different, update it in `DemoModal.jsx` line 21

5. **Template Not Linked to Service**
   - Make sure your template is linked to the correct service (`service_agl5k2s`)
   - In the template settings, select the correct service from the dropdown

### How to Get Your Credentials:

**Step 1: Get Template ID**
1. Log in to https://www.emailjs.com/
2. Go to **Email Templates**
3. Click on your template (or create a new one)
4. Copy the **Template ID** (starts with `template_`)

**Step 2: Get Public Key**
1. In EmailJS dashboard, go to **Account** (top right)
2. Click on **API Keys**
3. Copy your **Public Key** (long alphanumeric string)

**Step 3: Update the Code**
1. Open `src/components/DemoModal.jsx`
2. Find line 23: Replace `'YOUR_TEMPLATE_ID'` with your template ID
3. Find line 25: Replace `'YOUR_PUBLIC_KEY'` with your public key
4. Save the file

### Testing:

After updating the credentials:
1. Open browser console (F12)
2. Submit the demo form
3. Check for success message: "Email sent successfully to abelashinework@gmail.com"
4. If you still see errors, check the detailed error logs in the console

### Option 2: Backend API (More Control)

Create a simple backend endpoint that sends emails using:
- Node.js with Nodemailer
- Python with SMTP
- Or any backend service

Then update the `sendEmailNotification` function to call your API endpoint.

### Option 3: Keep Current mailto: Solution

The current implementation works immediately - it opens the user's email client with all the information pre-filled. You just need to send the email manually.

