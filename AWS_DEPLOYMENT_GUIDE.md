# AWS Deployment Guide - UAE Delivery Express Website

This guide provides step-by-step instructions for deploying the static website to AWS S3 + CloudFront.

## 📋 Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured (optional)
- Built and exported Next.js application

## 🏗️ Step 1: Build and Export the Application

```bash
# Navigate to project directory
cd uae-delivery-website

# Install dependencies
npm install

# Build the application
npm run build

# Export static files
npm run export
```

This creates an `out/` directory with all static files.

## 🪣 Step 2: Create and Configure S3 Bucket

### 2.1 Create S3 Bucket
1. Go to AWS S3 Console
2. Click "Create bucket"
3. Choose a unique bucket name: `delivery-website`
4. Select region: `us-east-1` (recommended for CloudFront)
5. **Uncheck** "Block all public access"
6. Acknowledge the warning about public access
7. Click "Create bucket"

### 2.2 Enable Static Website Hosting
1. Select your bucket
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Enable static website hosting
6. Set index document: `index.html`
7. Set error document: `404.html`
8. Save changes

### 2.3 Configure Bucket Policy
1. Go to "Permissions" tab
2. Click "Bucket policy"
3. Add the following policy (replace `YOUR-BUCKET-NAME`):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

## 📤 Step 3: Upload Website Files

### Option A: AWS Console
1. Go to "Objects" tab in your bucket
2. Click "Upload"
3. Drag and drop all files from the `out/` directory
4. Click "Upload"

### Option B: AWS CLI
```bash
# Sync the out directory to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Set proper content types
aws s3 cp out/ s3://your-bucket-name --recursive --metadata-directive REPLACE --cache-control max-age=31536000
```

## 🌐 Step 4: Create CloudFront Distribution

### 4.1 Create Distribution
1. Go to CloudFront Console
2. Click "Create distribution"
3. Configure the following settings:

**Origin Settings:**
- Origin domain: Select your S3 bucket
- Origin path: Leave empty
- Origin access: Public

**Default Cache Behavior:**
- Viewer protocol policy: Redirect HTTP to HTTPS
- Allowed HTTP methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- Cache policy: Managed-CachingOptimized
- Origin request policy: Managed-CORS-S3Origin
- Compress objects automatically: Yes

**Settings:**
- Price class: Use all edge locations (best performance)
- Default root object: `index.html`

### 4.2 Configure Custom Error Pages
1. After distribution is created, go to "Error pages" tab
2. Add the following error pages:

**Error Page 1:**
- HTTP Error Code: 404
- Error Caching Minimum TTL: 300
- Customize Error Response: Yes
- Response Page Path: `/404.html`
- HTTP Response Code: 200

**Error Page 2:**
- HTTP Error Code: 403
- Error Caching Minimum TTL: 300
- Customize Error Response: Yes
- Response Page Path: `/404.html`
- HTTP Response Code: 200

## 🔒 Step 5: SSL Certificate (Optional but Recommended)

### 5.1 Request Certificate
1. Go to AWS Certificate Manager (ACM)
2. Ensure you're in `us-east-1` region
3. Click "Request certificate"
4. Choose "Request a public certificate"
5. Add your domain name (e.g., `www.uaedeliveryexpress.com`)
6. Choose DNS validation
7. Request certificate

### 5.2 Validate Certificate
1. Add the CNAME record to your DNS provider
2. Wait for validation (can take up to 30 minutes)

### 5.3 Add Certificate to CloudFront
1. Go back to your CloudFront distribution
2. Click "Edit"
3. In "Settings" section:
   - Alternate domain names: Add your domain
   - SSL certificate: Select your custom certificate
4. Save changes

## 🌍 Step 6: DNS Configuration

### 6.1 Get CloudFront Domain
1. In CloudFront console, copy your distribution domain name
2. Example: `d1234567890123.cloudfront.net`

### 6.2 Update DNS Records
Add the following records to your DNS provider:

**For root domain:**
```
Type: A
Name: @
Value: [CloudFront distribution domain]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [CloudFront distribution domain]
```

## 🚀 Step 7: Deployment Script (Optional)

Create a deployment script `deploy.sh`:

```bash
#!/bin/bash

# Build and export
npm run build
npm run export

# Upload to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## 🔧 Step 8: Performance Optimizations

### 8.1 S3 Configuration
```bash
# Set cache headers for static assets
aws s3 cp out/ s3://your-bucket-name --recursive \
  --exclude "*.html" \
  --cache-control "max-age=31536000" \
  --metadata-directive REPLACE

# Set cache headers for HTML files
aws s3 cp out/ s3://your-bucket-name --recursive \
  --exclude "*" --include "*.html" \
  --cache-control "max-age=0, no-cache, no-store, must-revalidate" \
  --metadata-directive REPLACE
```

### 8.2 CloudFront Cache Behaviors
Create additional cache behaviors for different file types:

**CSS/JS Files:**
- Path pattern: `*.css`, `*.js`
- Cache policy: Managed-CachingOptimized
- TTL: 1 year

**Images:**
- Path pattern: `*.jpg`, `*.png`, `*.svg`, `*.ico`
- Cache policy: Managed-CachingOptimized
- TTL: 1 year

## 📊 Step 9: Monitoring and Analytics

### 9.1 CloudWatch Monitoring
1. Enable CloudFront metrics in CloudWatch
2. Set up alarms for error rates and latency

### 9.2 Google Analytics
Add Google Analytics to your website:
1. Create GA4 property
2. Add tracking code to `layout.tsx`

## 🚨 Common Issues and Solutions

### Issue 1: 403 Forbidden Errors
**Solution:** Check S3 bucket policy and ensure public read access is enabled.

### Issue 2: CSS/JS Not Loading
**Solution:** Verify CORS configuration and content-type headers.

### Issue 3: Form Submissions Not Working
**Solution:** 
- Test FormSubmit integration
- Check CORS headers
- Verify email configuration

### Issue 4: Slow Loading Times
**Solution:**
- Enable CloudFront compression
- Optimize images
- Set proper cache headers

## 💰 Cost Optimization

### S3 Costs
- Use S3 Standard-IA for infrequently accessed files
- Enable S3 lifecycle policies

### CloudFront Costs
- Choose appropriate price class
- Monitor data transfer costs
- Use CloudFront caching effectively

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build and export
      run: |
        npm run build
        npm run export
        
    - name: Deploy to S3
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      run: |
        aws s3 sync out/ s3://your-bucket-name --delete
        aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

## ✅ Post-Deployment Checklist

- [ ] Website loads correctly at CloudFront URL
- [ ] All pages are accessible
- [ ] Forms submit successfully
- [ ] WhatsApp button works
- [ ] Mobile responsiveness verified
- [ ] SSL certificate is active
- [ ] Custom domain resolves correctly
- [ ] Google Analytics tracking works
- [ ] Page load speeds are acceptable
- [ ] SEO meta tags are present

## 📞 Support

For deployment issues or questions, refer to:
- AWS Documentation
- Next.js Static Export Guide
- CloudFront Documentation

## 💡 Tips for Success

1. **Test Locally First**: Always test the exported static files locally
2. **Use Staging Environment**: Deploy to a staging bucket first
3. **Monitor Costs**: Set up billing alerts
4. **Regular Backups**: Keep backups of your S3 bucket
5. **Security**: Regularly review IAM permissions and bucket policies