# UAE Delivery Express - Static Website

A modern, responsive static website for a UAE-based delivery business built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site Generation**: Optimized for AWS S3 + CloudFront deployment
- **Modern UI/UX**: Clean, professional design with smooth animations
- **WhatsApp Integration**: Click-to-chat functionality with UAE phone number
- **Contact Form**: Integrated with FormSubmit for email handling
- **Order Tracking**: Mock tracking system with timeline visualization
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 📱 Pages

- **Home**: Hero section with CTA, features, services preview
- **About**: Company story, mission, values, and team
- **Services**: Detailed service offerings with pricing
- **Contact**: Contact form, business info, and FAQ section
- **Track Order**: Package tracking with real-time status
- **FAQ**: Comprehensive frequently asked questions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Deployment**: AWS S3 + CloudFront (Static Export)

## 🏗️ Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Export Static Files**
   ```bash
   npm run export
   ```

## 🌐 AWS Deployment Guide

### Step 1: Build and Export
```bash
npm run build
npm run export
```

### Step 2: Create S3 Bucket
1. Create S3 bucket with unique name (e.g., `uae-delivery-website-2024`)
2. Enable static website hosting
3. Set index document: `index.html`
4. Set error document: `404.html`

### Step 3: Upload Files
Upload all files from the `out/` directory to your S3 bucket.

### Step 4: Configure CloudFront
1. Create CloudFront distribution
2. Set origin to your S3 bucket
3. Configure custom error pages:
   - 404 → `/404.html` (200 response)
   - 403 → `/404.html` (200 response)
4. Enable compression
5. Set cache behaviors for static assets

### Step 5: Domain Configuration (Optional)
1. Add custom domain in CloudFront
2. Configure SSL certificate via AWS Certificate Manager
3. Update DNS records to point to CloudFront distribution

## 📧 Contact Form Setup

The contact form uses FormSubmit.co for handling form submissions:

1. Replace `info@uaedeliveryexpress.com` in `/src/app/contact/page.tsx`
2. Configure FormSubmit settings:
   - Add `_captcha: false` to disable captcha
   - Add `_template: table` for better email formatting
   - Add `_subject` for custom email subjects

## 📱 WhatsApp Integration

Update the phone number in `/src/components/ui/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '+971501234567' // Replace with actual UAE number
```

## 🎨 Customization

### Colors
Update brand colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    500: '#10b981',
    600: '#059669',
  }
}
```

### Content
- Update company information in layout components
- Modify service offerings in `/src/app/services/page.tsx`
- Update contact details throughout the site
- Replace placeholder content with actual business information

## 🔧 Performance Optimizations

- **Image Optimization**: Use Next.js Image component with `unoptimized: true` for static export
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS purging removes unused styles
- **Lazy Loading**: Implemented for non-critical components

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data for local business
- Sitemap generation (add to build process)
- Robots.txt configuration

## 🚨 Common Issues & Solutions

### CORS Issues
- Ensure S3 bucket CORS policy allows your domain
- Configure CloudFront to forward necessary headers

### Cache Invalidation
- Create CloudFront invalidation for `/*` after deployment
- Use versioned assets for better caching

### Form Submissions
- Test FormSubmit integration in production
- Consider adding client-side validation
- Implement success/error handling

## 📈 Post-Launch Checklist

- [ ] Test all forms and functionality
- [ ] Verify WhatsApp integration
- [ ] Check mobile responsiveness
- [ ] Test page load speeds
- [ ] Validate SEO meta tags
- [ ] Set up Google Analytics
- [ ] Configure Google Search Console
- [ ] Test contact form submissions
- [ ] Verify tracking page functionality

## 🤝 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved.