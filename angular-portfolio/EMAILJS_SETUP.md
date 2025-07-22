# EmailJS Setup Guide for Direct Email Sending

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Free plan includes 200 emails/month

### Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (Recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**
4. Follow the connection steps

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: Portfolio Contact from {{from_name}}

From: {{from_name}}
Phone: {{from_phone}}
Email: {{reply_to}}

Message:
{{message}}

---
Sent from your portfolio website
```

### Step 4: Get Your Credentials
1. **Service ID**: Found in Email Services section
2. **Template ID**: Found in Email Templates section  
3. **Public Key**: Found in Account > API Keys

### Step 5: Update Your Code
Replace these values in `contact.component.ts`:

```typescript
private emailjsConfig = {
  serviceId: 'service_xxxxxxx', // Your service ID
  templateId: 'template_xxxxxxx', // Your template ID
  publicKey: 'xxxxxxxxxxxxxxx' // Your public key
};
```

## 🎯 Benefits of EmailJS

✅ **No Backend Required** - Works purely from frontend
✅ **Free Tier Available** - 200 emails/month
✅ **Multiple Email Providers** - Gmail, Outlook, Yahoo, etc.
✅ **Template Management** - Customize email format
✅ **Spam Protection** - Built-in security
✅ **Delivery Tracking** - Monitor email status

## 🔒 Security Features

- **Domain Restrictions** - Limit usage to your domain
- **Rate Limiting** - Prevent spam
- **Template Validation** - Secure template processing
- **Access Control** - Manage API permissions

## 📊 Usage Analytics

EmailJS provides:
- Email delivery statistics
- Error tracking
- Usage monitoring
- Template performance

## 🛠️ Alternative Template Variables

You can use these variables in your email template:

```
{{from_name}}     - Contact's name
{{from_phone}}    - Contact's phone  
{{message}}       - Contact's message
{{to_email}}      - Your email (j1999amar@gmail.com)
{{reply_to}}      - Reply-to address
```

## 🚨 Troubleshooting

**Common Issues:**

1. **Emails not sending**
   - Check service configuration
   - Verify template ID
   - Check browser console for errors

2. **Emails going to spam**
   - Verify domain settings
   - Use proper email templates
   - Check sender reputation

3. **Rate limiting**
   - Implement client-side validation
   - Add delay between submissions
   - Monitor usage dashboard

## 📱 Testing

1. **Development Testing**
   ```bash
   ng serve
   # Test form on localhost:4200
   ```

2. **Production Testing**
   - Deploy to your domain
   - Add domain to EmailJS restrictions
   - Test from live website

## 💰 Pricing

- **Free**: 200 emails/month
- **Personal**: $15/month (50,000 emails)
- **Business**: $70/month (150,000 emails)

## 🔗 Useful Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Gmail Integration Guide](https://www.emailjs.com/docs/user_guide/gmail_integration/)
- [Template Variables](https://www.emailjs.com/docs/sdk/send/)

---

**Next Steps:**
1. Set up your EmailJS account
2. Replace the config values in your code
3. Test the form
4. Your portfolio will send emails directly! 🎉
