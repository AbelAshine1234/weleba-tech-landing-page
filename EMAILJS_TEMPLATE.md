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
</head>
<body style="margin: 0; padding: 0; background-color: #EDE9E5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #EDE9E5;">
    <tr>
      <td align="center" style="padding: 24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 600px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 20px 24px; background-color: #FFFFFF; border-bottom: 1px solid rgba(36,36,34,0.08);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="width: 56px; padding-right: 12px;">
                    <img src="{{logo_url}}" width="44" height="44" alt="Weleba Tech" style="display: block; border: 0; outline: none; text-decoration: none;" />
                  </td>
                  <td valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
                    <div style="font-size: 18px; font-weight: 600; color: #242422; line-height: 1.2;">Weleba Tech</div>
                    <div style="font-size: 13px; color: rgba(36,36,34,0.70); line-height: 1.4;">Demo request notification</div>
                  </td>
                  <td valign="middle" align="right" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
                    <div style="font-size: 12px; color: rgba(36,36,34,0.70);">New Demo Request</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 22px 24px 8px 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
              <div style="font-size: 22px; font-weight: 600; color: #242422; line-height: 1.25;">New Demo Request</div>
              <div style="margin-top: 8px; font-size: 15px; color: rgba(36,36,34,0.70); line-height: 1.6;">
                You’ve received a new demo request from your website. Review the details below and reply to schedule the demo.
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 8px 24px 22px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border: 1px solid rgba(36,36,34,0.10); border-radius: 12px;">
                <tr>
                  <td style="padding: 16px 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Requester</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 16px; font-weight: 600; color: #242422;">{{from_name}}</td>
                </tr>

                <tr>
                  <td style="padding: 0 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Email</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 15px; color: #242422;">
                    <a href="mailto:{{from_email}}" style="color: #9478FC; text-decoration: none;">{{from_email}}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 0 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Title / Role</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 15px; color: #242422;">{{title}}</td>
                </tr>

                <tr>
                  <td style="padding: 0 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Organization</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 15px; color: #242422;">{{organization}}</td>
                </tr>

                <tr>
                  <td style="padding: 0 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Country / Region</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 15px; color: #242422;">{{country}}</td>
                </tr>

                <tr>
                  <td style="padding: 0 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Company Type</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 15px; color: #242422;">{{company_type}}</td>
                </tr>

                <tr>
                  <td style="padding: 0 16px 2px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(36,36,34,0.65);">Message</td>
                </tr>
                <tr>
                  <td style="padding: 0 16px 16px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 15px; color: #242422; white-space: pre-wrap;">{{message}}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 0 24px 18px 24px;">
              <a href="{{website_url}}" style="display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: 600; color: #FFFFFF; background-color: #242422; text-decoration: none; padding: 12px 16px; border-radius: 10px;">Open Website</a>
            </td>
          </tr>

          <tr>
            <td style="padding: 16px 24px; background-color: #EDE9E5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 12px; color: rgba(36,36,34,0.70); line-height: 1.6;">
              This email was automatically sent from the Weleba Tech website.<br />
              Reply to this email to contact {{from_name}}.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
| `{{logo_url}}` | Absolute URL to logo image | "https://welebatech.et/assets/logo.png" |
| `{{website_url}}` | Website base URL | "https://welebatech.et" |

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

