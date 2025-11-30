# EmailJS Setup - Direct Email Delivery

## Quick Setup (5 minutes) to get emails directly in your inbox:

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Click "Sign Up" and create account with `codenixhubtechnologies@gmail.com`
3. Verify your email

### Step 2: Add Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account (`codenixhubtechnologies@gmail.com`)
5. Note the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** `contact_form`

**Subject:** `New Project Inquiry from {{from_name}} - CodenixHub`

**Content:**
```
NEW PROJECT INQUIRY - CODENIXHUB
================================

CLIENT DETAILS:
• Name: {{from_name}}
• Email: {{from_email}}
• Phone: {{phone}}
• Company: {{company}}

PROJECT INFORMATION:
• Service: {{service}}
• Budget: {{budget}}
• Timeline: {{timeline}}
• Newsletter: {{newsletter}}

PROJECT DETAILS:
{{message}}

SUBMISSION DATE: {{submission_date}}

---
Sent via CodenixHub Website Contact Form

Reply to: {{from_email}}
```

4. Save and note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get User ID
1. Go to "Account" → "General"
2. Copy your **User ID** (e.g., `user_def456`)

### Step 5: Update Your Code
1. Open `js/contact-form-direct.js`
2. Replace these values:
   - Line 5: `YOUR_EMAILJS_USER_ID` → your User ID
   - Line 54: `YOUR_SERVICE_ID` → your Service ID  
   - Line 54: `YOUR_TEMPLATE_ID` → your Template ID

### Step 6: Update contact.html
Replace the script line in contact.html:
```html
<!-- Change this line -->
<script src="js/contact-form-simple.js"></script>

<!-- To this -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script src="js/contact-form-direct.js"></script>
```

## Example Configuration:
```javascript
// In contact-form-direct.js
emailjs.init("user_abc123def456");  // Your User ID

emailjs.send('service_gmail123', 'template_contact456', templateParams)
```

## What You'll Get:
- ✅ **Instant emails** in your Gmail inbox
- ✅ **Formatted messages** with all form details
- ✅ **Reply directly** to customer's email
- ✅ **WhatsApp backup** if email fails
- ✅ **Professional appearance**

## Free Limits:
- 200 emails/month (free plan)
- Upgrade to paid plan for more

## Test It:
1. Complete the setup above
2. Fill out your contact form
3. Check your Gmail inbox
4. You should receive a formatted email!

---

**Need help?** Let me know if you get stuck on any step!