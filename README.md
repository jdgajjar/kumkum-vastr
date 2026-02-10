# Kumkum Vastr - Premium E-Commerce Platform

A modern, elegant e-commerce platform for Indian ethnic wear, built with Next.js 14, TypeScript, and MongoDB.

## Features

### Customer Features
- 🛍️ Browse products by categories and collections
- 🔍 Dynamic product pages with detailed information
- 🛒 Shopping cart with real-time updates
- 💳 Cash on Delivery payment option
- 👤 User account management
- 📍 Multiple delivery address management
- 🔐 Secure authentication with email verification
- 🔑 Password reset functionality

### Admin Features
- 📊 Comprehensive admin dashboard
- 📦 Product management (CRUD operations)
- 🏷️ Category and collection management
- 👥 User management
- 📈 Order tracking and management
- 📑 Export data to Excel (users, orders)
- 📧 Automated monthly email reports
- 🔒 Role-based access control

### Security Features
- JWT-based authentication with refresh tokens
- Email verification for new accounts
- Secure password hashing with bcrypt
- Protected API routes
- Role-based permissions

### Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- MongoDB with Mongoose ODM
- Responsive design with Tailwind CSS
- Indian-inspired UI/UX design
- Optimized for Vercel deployment
- Server-side rendering (SSR)
- API route handlers

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT Secrets
JWT_SECRET=your_jwt_secret_key_at_least_32_characters
JWT_REFRESH_SECRET=your_refresh_secret_key_at_least_32_characters

# Email Configuration (for sending verification emails)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Admin Email (for monthly reports)
ADMIN_EMAIL=admin@kumkumvastr.com
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see above)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy!

### Vercel Configuration
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Project Structure

```
kumkum-vastr/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── products/          # Product pages
│   │   ├── auth/              # Authentication pages
│   │   └── ...
│   ├── components/            # React components
│   ├── lib/                   # Utility functions
│   │   ├── db/               # Database connection
│   │   ├── models/           # MongoDB models
│   │   ├── auth/             # Authentication utilities
│   │   └── email/            # Email service
│   ├── middleware/            # Next.js middleware
│   └── store/                 # State management (Zustand)
├── public/                    # Static assets
└── ...
```

## Default Admin Account

After first deployment, create an admin account through the API or database:
- Email: admin@kumkumvastr.com
- Role: admin

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Styling:** Tailwind CSS
- **Authentication:** JWT with refresh tokens
- **Email:** Nodemailer
- **Excel Export:** ExcelJS
- **State Management:** Zustand
- **Validation:** Zod
- **Icons:** Lucide React

## Features in Detail

### Role-Based Access Control
- **Admin:** Full access to dashboard, product management, user management
- **User:** Access to shopping, account management, order history

### Email Verification
- Users receive verification email upon registration
- Account must be verified before login
- Resend verification option available

### Password Reset
- Secure password reset via email
- Time-limited reset tokens
- Password strength validation

### Excel Export
- Export user data
- Export all orders
- Export orders by date range
- Filter by year and month

### Monthly Reports
- Automated email reports sent to admin
- Sales statistics
- User growth metrics
- Order summaries

## License

Private - All rights reserved

## Support

For support, email support@kumkumvastr.com

---

Built with ❤️ for Kumkum Vastr
