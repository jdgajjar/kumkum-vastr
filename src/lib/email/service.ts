import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn('⚠️  Email configuration not set. Email features will not work.');
}

// Create reusable transporter
const transporter = EMAIL_USER && EMAIL_PASS
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })
  : null;

/**
 * Send verification email
 */
export async function sendVerificationEmail(
  email: string,
  name: string,
  token: string
): Promise<void> {
  if (!transporter) {
    console.warn('Email transporter not configured');
    return;
  }

  const verificationUrl = `${APP_URL}/auth/verify?token=${token}`;

  const mailOptions = {
    from: `Kumkum Vastr <${EMAIL_USER}>`,
    to: email,
    subject: 'Verify Your Email - Kumkum Vastr',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FF9933 0%, #FFD700 50%, #138808 100%); 
                    padding: 30px; text-align: center; color: white; }
          .content { background: #f9f9f9; padding: 30px; }
          .button { display: inline-block; padding: 12px 30px; background: #FF9933; 
                    color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🪔 Kumkum Vastr</h1>
            <p>Welcome to Premium Indian Ethnic Wear</p>
          </div>
          <div class="content">
            <h2>Hello ${name}!</h2>
            <p>Thank you for registering with Kumkum Vastr. Please verify your email address to complete your registration.</p>
            <p>Click the button below to verify your email:</p>
            <center>
              <a href="${verificationUrl}" class="button">Verify Email</a>
            </center>
            <p>Or copy and paste this link in your browser:</p>
            <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't create an account with us, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Kumkum Vastr. All rights reserved.</p>
            <p>Premium Indian Ethnic Wear</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(
  email: string,
  name: string,
  token: string
): Promise<void> {
  if (!transporter) {
    console.warn('Email transporter not configured');
    return;
  }

  const resetUrl = `${APP_URL}/auth/reset-password?token=${token}`;

  const mailOptions = {
    from: `Kumkum Vastr <${EMAIL_USER}>`,
    to: email,
    subject: 'Reset Your Password - Kumkum Vastr',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FF9933 0%, #FFD700 50%, #138808 100%); 
                    padding: 30px; text-align: center; color: white; }
          .content { background: #f9f9f9; padding: 30px; }
          .button { display: inline-block; padding: 12px 30px; background: #FF9933; 
                    color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🪔 Kumkum Vastr</h1>
            <p>Password Reset Request</p>
          </div>
          <div class="content">
            <h2>Hello ${name}!</h2>
            <p>We received a request to reset your password. Click the button below to set a new password:</p>
            <center>
              <a href="${resetUrl}" class="button">Reset Password</a>
            </center>
            <p>Or copy and paste this link in your browser:</p>
            <p style="word-break: break-all; color: #666;">${resetUrl}</p>
            <div class="warning">
              <strong>⚠️ Security Notice:</strong> This link will expire in 1 hour.
            </div>
            <p>If you didn't request a password reset, please ignore this email and your password will remain unchanged.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Kumkum Vastr. All rights reserved.</p>
            <p>Premium Indian Ethnic Wear</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

/**
 * Send monthly admin report
 */
export async function sendMonthlyReport(
  adminEmail: string,
  reportData: {
    month: string;
    year: number;
    totalOrders: number;
    totalRevenue: number;
    newUsers: number;
    topProducts: Array<{ name: string; quantity: number }>;
  }
): Promise<void> {
  if (!transporter) {
    console.warn('Email transporter not configured');
    return;
  }

  const mailOptions = {
    from: `Kumkum Vastr <${EMAIL_USER}>`,
    to: adminEmail,
    subject: `Monthly Report - ${reportData.month} ${reportData.year} - Kumkum Vastr`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FF9933 0%, #FFD700 50%, #138808 100%); 
                    padding: 30px; text-align: center; color: white; }
          .content { background: #f9f9f9; padding: 30px; }
          .stat-card { background: white; padding: 20px; margin: 10px 0; border-radius: 5px; 
                       box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .stat-label { color: #666; font-size: 14px; }
          .stat-value { font-size: 28px; font-weight: bold; color: #FF9933; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #FF9933; color: white; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📊 Monthly Business Report</h1>
            <p>${reportData.month} ${reportData.year}</p>
          </div>
          <div class="content">
            <h2>Performance Summary</h2>
            
            <div class="stat-card">
              <div class="stat-label">Total Orders</div>
              <div class="stat-value">${reportData.totalOrders}</div>
            </div>
            
            <div class="stat-card">
              <div class="stat-label">Total Revenue</div>
              <div class="stat-value">₹${reportData.totalRevenue.toLocaleString('en-IN')}</div>
            </div>
            
            <div class="stat-card">
              <div class="stat-label">New Users</div>
              <div class="stat-value">${reportData.newUsers}</div>
            </div>
            
            <h3>Top Selling Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity Sold</th>
                </tr>
              </thead>
              <tbody>
                ${reportData.topProducts
                  .map(
                    (product) => `
                  <tr>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
            
            <p>For detailed analytics, please visit the admin dashboard.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Kumkum Vastr. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}
