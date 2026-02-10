# Kumkum Vastr - Deployment Guide

## Complete Setup & Deployment Instructions

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier available)
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free tier available)

## Local Development Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd kumkum-vastr
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kumkum-vastr?retryWrites=true&w=majority

# JWT Secrets (generate using: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
JWT_SECRET=your_generated_secret_key_here_minimum_32_chars
JWT_REFRESH_SECRET=your_generated_refresh_secret_key_here_minimum_32_chars

# Email Configuration (Gmail with App Password)
# To get Gmail App Password:
# 1. Go to Google Account Settings
# 2. Security → 2-Step Verification (enable if not enabled)
# 3. App passwords → Generate new app password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Admin Email (for monthly reports)
ADMIN_EMAIL=admin@kumkumvastr.com
```

### 4. Generate JWT Secrets

Run these commands to generate secure secrets:

```bash
# Generate JWT_SECRET
node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"

# Generate JWT_REFRESH_SECRET
node -e "console.log('JWT_REFRESH_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
```

### 5. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with password
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and update `MONGODB_URI` in `.env.local`

### 6. Configure Gmail for Email Service

1. Enable 2-Step Verification in your Google Account
2. Go to Security → App passwords
3. Generate a new app password for "Mail"
4. Copy the 16-character password
5. Update `EMAIL_USER` and `EMAIL_PASS` in `.env.local`

### 7. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## Vercel Deployment (Free Tier)

### Step 1: Prepare Your Repository

1. Ensure all your code is committed to Git:
```bash
git add .
git commit -m "Initial commit - Kumkum Vastr e-commerce platform"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect Next.js configuration

### Step 3: Configure Environment Variables in Vercel

In your Vercel project settings, add all environment variables:

1. Go to Project Settings → Environment Variables
2. Add each variable from your `.env.local`:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `JWT_REFRESH_SECRET`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `ADMIN_EMAIL`
   - `NEXT_PUBLIC_APP_URL` (set to your Vercel domain, e.g., `https://kumkum-vastr.vercel.app`)

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 2-5 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

### Step 5: Update Application URL

1. After deployment, update `NEXT_PUBLIC_APP_URL` in Vercel environment variables
2. Set it to your actual Vercel URL: `https://your-project-name.vercel.app`
3. Redeploy the application

### Step 6: Set Up Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS settings as instructed by Vercel
4. Update `NEXT_PUBLIC_APP_URL` to your custom domain

## Post-Deployment Setup

### Create Admin Account

After deployment, you need to create an admin account. You have two options:

#### Option 1: Directly in MongoDB

1. Go to MongoDB Atlas → Browse Collections
2. Find the `users` collection
3. Create a new document with admin role:

```json
{
  "name": "Admin",
  "email": "admin@kumkumvastr.com",
  "password": "$2a$10$YourHashedPasswordHere",
  "role": "admin",
  "isVerified": true,
  "createdAt": ISODate("2024-01-01T00:00:00Z"),
  "updatedAt": ISODate("2024-01-01T00:00:00Z")
}
```

To hash a password, use:
```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('YourPassword123', 10, (err, hash) => console.log(hash));"
```

#### Option 2: Using API

1. Register normally through the application
2. Find your user in MongoDB
3. Update the `role` field from `"user"` to `"admin"`
4. Set `isVerified` to `true`

### Add Initial Categories and Collections

You can add categories and collections through:
1. Admin dashboard (after creating admin account)
2. Direct MongoDB insertion
3. API calls with admin authentication

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Module not found errors:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript errors:**
   - Check all import statements
   - Ensure all types are properly defined
   - Run `npm run build` locally first

3. **Environment variable errors:**
   - Verify all variables are set in Vercel
   - Check variable names match exactly
   - Ensure no trailing spaces

### Runtime Errors

1. **MongoDB connection fails:**
   - Verify connection string format
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has proper permissions

2. **Email sending fails:**
   - Verify Gmail app password is correct
   - Check 2-Step Verification is enabled
   - Try generating a new app password

3. **Authentication issues:**
   - Verify JWT secrets are set and consistent
   - Check cookie settings in production
   - Ensure HTTPS is enabled (automatic on Vercel)

## Performance Optimization

### Image Optimization

1. Use Next.js Image component for all images
2. Store images in MongoDB GridFS or external CDN
3. Implement lazy loading for product images

### Caching Strategy

1. Enable ISR (Incremental Static Regeneration) for product pages
2. Cache API responses where appropriate
3. Use React Query or SWR for client-side caching

### Database Optimization

1. Add indexes to frequently queried fields
2. Use projection to limit returned fields
3. Implement pagination for large datasets

## Monitoring

### Vercel Analytics

1. Enable Vercel Analytics in project settings
2. Monitor performance metrics
3. Track Core Web Vitals

### Error Tracking

Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Vercel logs for runtime errors

## Scaling Considerations

### Free Tier Limits

Vercel Free Tier includes:
- 100 GB bandwidth per month
- 6,000 build minutes per month
- 100 GB-hrs serverless function execution
- Unlimited deployments

### When to Upgrade

Consider upgrading when:
- Traffic exceeds free tier limits
- Need team collaboration features
- Require advanced analytics
- Need priority support

## Backup Strategy

### Database Backups

1. MongoDB Atlas provides automated backups
2. Export important collections regularly
3. Use the export API endpoints for data backup

### Code Backups

1. Maintain Git repository with regular commits
2. Use branch protection on main branch
3. Tag releases for easy rollback

## Security Checklist

- [ ] All environment variables are set correctly
- [ ] JWT secrets are strong and unique
- [ ] MongoDB IP whitelist is configured
- [ ] HTTPS is enabled (automatic on Vercel)
- [ ] Email verification is working
- [ ] Rate limiting is implemented (if needed)
- [ ] Admin routes are protected
- [ ] Input validation is in place
- [ ] CORS is properly configured

## Support

For issues or questions:
- Check documentation in README.md
- Review API documentation
- Check Vercel deployment logs
- Contact support team

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Generate JWT secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Hash password
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('password', 10, (e, h) => console.log(h));"
```

## Environment Variables Checklist

- [ ] MONGODB_URI
- [ ] JWT_SECRET (min 32 characters)
- [ ] JWT_REFRESH_SECRET (min 32 characters)
- [ ] EMAIL_USER
- [ ] EMAIL_PASS (Gmail app password)
- [ ] NEXT_PUBLIC_APP_URL
- [ ] ADMIN_EMAIL

---

**🎉 Congratulations! Your Kumkum Vastr e-commerce platform is now deployed!**
