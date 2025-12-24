# EmailJS Template Configuration

## Step-by-Step Setup

### 1. Create New Template in EmailJS Dashboard

1. Go to https://www.emailjs.com/
2. Log in to your account
3. Navigate to **Email Templates**
4. Click **"Create New Template"**

### 2. Template Settings

**Template Name:** `Demo Request Notification`

**Service:** Select `service_agl5k2s` (or your Gmail service)

**To Email:** `abelashinework@gmail.com`

**From Name:** `{{from_name}}` (or you can use a static name like "Weleba Tech Website")

**From Email:** `{{from_email}}` (the person who submitted the form)

**Reply To:** `{{from_email}}` (so you can reply directly to the requester)

**Subject:** `New Demo Request from {{from_name}}`

### 3. Email Body Template

Copy and paste this template into the **Content** field:

---

## Plain Text Version (Simple)

```
New Demo Request Received

Name: {{from_name}}
Email: {{from_email}}
Title/Role: {{title}}
Organization: {{organization}}
Country/Region: {{country}}
Company Type: {{company_type}}
Message: {{message}}

---
This email was sent from the Weleba Tech Solutions contact form.
Please contact them to schedule a demo session.
```

---

## HTML Version (Recommended - Better Formatting)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #4F46E5;
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background-color: #f9fafb;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .field {
      margin-bottom: 15px;
      padding: 12px;
      background-color: white;
      border-left: 3px solid #4F46E5;
      border-radius: 4px;
    }
    .field-label {
      font-weight: bold;
      color: #4F46E5;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .field-value {
      color: #1f2937;
      font-size: 16px;
    }
    .message-box {
      background-color: white;
      padding: 15px;
      border-left: 3px solid #10b981;
      border-radius: 4px;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #6b7280;
      font-size: 12px;
      border-top: 1px solid #e5e7eb;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">New Demo Request</h1>
    <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Weleba Tech Solutions</p>
  </div>
  
  <div class="content">
    <p style="margin-top: 0; font-size: 16px; color: #4b5563;">
      You have received a new demo request from your website. Please review the details below and contact them to schedule a demo session.
    </p>
    
    <div class="field">
      <div class="field-label">Full Name</div>
      <div class="field-value">{{from_name}}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Email Address</div>
      <div class="field-value">
        <a href="mailto:{{from_email}}" style="color: #4F46E5; text-decoration: none;">{{from_email}}</a>
      </div>
    </div>
    
    <div class="field">
      <div class="field-label">Title / Role</div>
      <div class="field-value">{{title}}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Organization</div>
      <div class="field-value">{{organization}}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Country / Region</div>
      <div class="field-value">{{country}}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Company Type</div>
      <div class="field-value">{{company_type}}</div>
    </div>
    
    {{#message}}
    <div class="message-box">
      <div class="field-label">Message</div>
      <div class="field-value" style="white-space: pre-wrap;">{{message}}</div>
    </div>
    {{/message}}
  </div>
  
  <div class="footer">
    <p style="margin: 0;">
      This email was automatically sent from the Weleba Tech Solutions contact form.<br>
      Reply directly to this email to contact {{from_name}}.
    </p>
  </div>
</body>
</html>
```

---

## Template Variables Reference

Make sure these variables are available in your template (they are automatically sent from the form):

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Full name of the requester | "John Doe" |
| `{{from_email}}` | Email of the requester | "john@example.com" |
| `{{title}}` | Job title or role | "CEO" |
| `{{organization}}` | Company name | "Acme Corp" |
| `{{country}}` | Country/Region code | "US", "ET", "GB" |
| `{{company_type}}` | Type of company | "Law Firm", "In-house Legal Department" |
| `{{message}}` | Optional message from requester | "I'm interested in..." |
| `{{subject}}` | Email subject line | "New Demo Request from John Doe" |
| `{{to_email}}` | Recipient email (already set to abelashinework@gmail.com) | "abelashinework@gmail.com" |

---

## Important Notes

1. **Variable Names are Case-Sensitive**: Use exactly `{{from_name}}`, `{{from_email}}`, etc. (lowercase with underscores)

2. **To Email Field**: Set this to `abelashinework@gmail.com` in the template settings (not in the body)

3. **Reply To**: Set Reply To as `{{from_email}}` so you can reply directly to the person who submitted the form

4. **Testing**: After creating the template, test it by submitting the form on your website

5. **Template ID**: After saving, copy the Template ID (starts with `template_`) and update it in `DemoModal.jsx`

---

## Quick Setup Checklist

- [ ] Created new template in EmailJS dashboard
- [ ] Set Service to `service_agl5k2s`
- [ ] Set "To Email" to `abelashinework@gmail.com`
- [ ] Set "Reply To" to `{{from_email}}`
- [ ] Set Subject to `New Demo Request from {{from_name}}`
- [ ] Pasted HTML template (or plain text) into Content field
- [ ] Saved template and copied Template ID
- [ ] Updated `DemoModal.jsx` with Template ID and Public Key

---

## Need Help?

If you encounter any issues:
1. Check that all variable names match exactly (case-sensitive)
2. Verify your service is connected to Gmail
3. Make sure the "To Email" field is set correctly
4. Check the browser console for detailed error messages

