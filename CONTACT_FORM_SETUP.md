# Contact Form Setup Guide - CodenixHub

## How to Get Form Data Directly to Your Email/WhatsApp

Your contact form is now set up to send data directly to your email without opening the user's WhatsApp. Here's how to complete the setup:

## Step 1: Get Web3Forms Access Key (FREE)

1. Go to [web3forms.com](https://web3forms.com)
2. Click "Get Started Free"
3. Enter your email: `codenixhubtechnologies@gmail.com`
4. You'll get an **Access Key** (looks like: `abcd1234-5678-90ef-ghij-klmnopqrstuv`)

## Step 2: Update Your Code

1. Open `js/contact-form.js`
2. Find line 65: `formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

Example:
```javascript
formData.append('access_key', 'abcd1234-5678-90ef-ghij-klmnopqrstuv');
```

## Step 3: Test the Form

1. Fill out your contact form on the website
2. Click "Send Message"
3. You should receive an email at `codenixhubtechnologies@gmail.com`

## What Happens When Someone Submits the Form:

1. ✅ User fills the form and clicks "Send Message"
2. ✅ Form data is sent directly to Web3Forms
3. ✅ You receive a formatted email with all details
4. ✅ A WhatsApp notification opens for you (optional)
5. ✅ User sees success message
6. ✅ **User's WhatsApp is NOT opened**

## Email Format You'll Receive:

```
Subject: New Project Inquiry from John Doe - CodenixHub

Name: John Doe
Email: john@example.com
Phone: +91 9876543210
Company: ABC Tech
Service: Web Development
Budget: $5,000 - $10,000
Timeline: 2-3 Months
Newsletter: Yes
Submission Date: December 1, 2024 at 2:30 PM

Message:
I need a modern e-commerce website with payment gateway integration...
```

## Alternative Options (if Web3Forms doesn't work):

### Option 1: Formspree (Free)
1. Go to [formspree.io](https://formspree.io)
2. Create account with `codenixhubtechnologies@gmail.com`
3. Get form endpoint
4. Update the code

### Option 2: EmailJS (Free)
1. Go to [emailjs.com](https://emailjs.com)
2. Create account
3. Set up email service
4. Update the code

### Option 3: Netlify Forms (if hosting on Netlify)
- Automatically works if you host on Netlify
- No setup required

## WhatsApp Notification Feature:

After form submission, a WhatsApp tab will open with a pre-filled message for you to send to yourself. This is optional and can be disabled by commenting out the `sendOwnerNotification()` function call.

## Troubleshooting:

1. **Form not working?** Check browser console for errors
2. **Not receiving emails?** Check spam folder
3. **Access key invalid?** Make sure you copied it correctly from Web3Forms

## Support:

If you need help setting this up, contact me and I'll help you configure it properly.

---

**Current Status:** ⚠️ Needs Web3Forms access key to be fully functional
**Next Step:** Get access key from web3forms.com and update the code