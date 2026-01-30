# 🌺 Kumkum Vastr - Premium Indian Ethnic Wear E-commerce Platform

A complete, production-ready MERN stack e-commerce website for **Kumkum Vastr** - an authentic Indian ladies clothing brand specializing in Sarees, Kurtis, Lehengas, and traditional ethnic wear.

![Kumkum Vastr](https://img.shields.io/badge/Version-1.0.0-red) ![License](https://img.shields.io/badge/License-ISC-blue) ![Node](https://img.shields.io/badge/Node-18.x-green) ![React](https://img.shields.io/badge/React-18.2-blue)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [Deployment](#-deployment-on-render)
- [API Documentation](#-api-documentation)
- [Admin Credentials](#-admin-credentials)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Customer Features
- 🛍️ **Browse Products** - Explore curated collections by category (Sarees, Kurtis, Lehengas, Suits)
- 🔍 **Advanced Filtering** - Filter by price, rating, category, and availability
- ⭐ **Product Reviews** - Read and write verified customer reviews
- 🛒 **Shopping Cart** - Add products with size and color variants
- 💳 **Secure Checkout** - Multiple payment options (COD, Razorpay)
- 👤 **User Authentication** - Secure JWT-based auth with role management
- 📦 **Order Tracking** - Track order status from processing to delivery
- ❤️ **Wishlist** - Save favorite products for later
- 📱 **Responsive Design** - Seamless experience across all devices

### Admin Features
- 📊 **Dashboard** - Overview of sales, orders, and customers
- ➕ **Product Management** - CRUD operations for products
- 📋 **Order Management** - Update order status, view details
- 👥 **User Management** - View and manage customers

### Technical Features
- ⚡ **Performance Optimized** - Code splitting, lazy loading, image optimization
- 🎨 **Beautiful UI** - Indian-themed design with Kumkum red, maroon, and gold colors
- 🔒 **Secure** - Helmet, rate limiting, input sanitization
- 📱 **PWA Ready** - Can be installed as a mobile app
- 🎭 **Animations** - Smooth Framer Motion animations
- 🚀 **Production Ready** - Configured for Render deployment

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Zustand** - State management
- **Axios** - HTTP client
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Helmet** - Security headers
- **Express Rate Limit** - API rate limiting
- **Express Mongo Sanitize** - NoSQL injection prevention

---

## 📁 Project Structure

```
kumkum-vastr/
│
├── backend/                    # Backend Node.js/Express application
│   ├── config/                # Database and config files
│   │   └── database.js       # MongoDB connection
│   ├── controllers/           # Request handlers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── middleware/            # Custom middleware
│   │   ├── auth.js           # JWT authentication
│   │   └── errorHandler.js   # Error handling
│   ├── models/                # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Review.js
│   ├── routes/                # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   ├── utils/                 # Utility functions
│   ├── server.js             # Entry point
│   ├── package.json
│   └── .env.example          # Environment variables template
│
├── frontend/                  # Frontend React application
│   ├── public/               # Static files
│   ├── src/
│   │   ├── assets/          # Images, icons, fonts
│   │   ├── components/      # Reusable components
│   │   │   ├── common/      # Common components (ProductCard, etc.)
│   │   │   ├── home/        # Home page components
│   │   │   ├── layout/      # Layout components (Header, Footer)
│   │   │   └── products/    # Product-related components
│   │   ├── context/         # State management (Zustand)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── ...
│   │   ├── services/        # API services
│   │   │   └── api.js
│   │   ├── styles/          # CSS files
│   │   │   └── index.css
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── .gitignore
├── render.yaml               # Render deployment config
├── README.md
└── PULL_REQUEST_TEMPLATE.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/kumkum-vastr.git
cd kumkum-vastr
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in `backend` directory:
```bash
cp .env.example .env
```

Fill in your environment variables (see [Environment Variables](#-environment-variables) section).

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file in `frontend` directory:
```bash
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

---

## 🔐 Environment Variables

### Backend (.env)
```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/kumkum-vastr
# For MongoDB Atlas: mongodb+srv://<username>:<password>@cluster.mongodb.net/kumkum-vastr

# JWT Secret (Generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=30d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Optional: Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional: Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Optional: Payment Gateway (Razorpay)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 💻 Running the Application

### Development Mode

#### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

#### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Build

#### Backend
```bash
cd backend
npm start
```

#### Frontend
```bash
cd frontend
npm run build
npm run preview
```

---

## 🌐 Deployment on Render

### Prerequisites
- GitHub account
- Render account (free tier available)
- MongoDB Atlas account

### Step-by-Step Deployment

#### 1. Setup MongoDB Atlas
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier M0)
3. Create a database user
4. Whitelist all IPs (0.0.0.0/0) for production
5. Get your connection string

#### 2. Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Kumkum Vastr E-commerce"
git branch -M main
git remote add origin https://github.com/yourusername/kumkum-vastr.git
git push -u origin main
```

#### 3. Deploy on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will detect `render.yaml` and create both services
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Generate a strong random string
6. Deploy!

Your app will be live at:
- Frontend: `https://kumkum-vastr-frontend.onrender.com`
- Backend: `https://kumkum-vastr-backend.onrender.com`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Product Endpoints

#### Get All Products
```http
GET /api/products?page=1&limit=12&category=Sarees&sort=price-asc
```

Query Parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 12)
- `category`: Filter by category
- `sort`: Sort by (price-asc, price-desc, rating, newest)
- `minPrice`, `maxPrice`: Price range
- `minRating`: Minimum rating
- `search`: Search term

#### Get Product by ID
```http
GET /api/products/:id
```

#### Get Featured Products
```http
GET /api/products/featured
```

#### Get Best Sellers
```http
GET /api/products/bestsellers
```

### Order Endpoints

#### Create Order
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderItems": [...],
  "shippingAddress": {...},
  "paymentInfo": {...},
  "itemsPrice": 2999,
  "taxPrice": 299,
  "shippingPrice": 0,
  "totalPrice": 3298
}
```

#### Get My Orders
```http
GET /api/orders/myorders
Authorization: Bearer <token>
```

---

## 👨‍💼 Admin Credentials

For testing admin features, create an admin user manually in MongoDB or use seed script:

```javascript
// In MongoDB Compass or Shell
db.users.updateOne(
  { email: "admin@kumkumvastr.com" },
  { 
    $set: { 
      role: "admin",
      name: "Admin",
      email: "admin@kumkumvastr.com",
      password: "<hashed_password>",
      isActive: true
    }
  },
  { upsert: true }
)
```

**Default Admin Login:**
- Email: `admin@kumkumvastr.com`
- Password: `admin123` (Change after first login)

---

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)

### Product Listing
![Products](https://via.placeholder.com/800x400?text=Products+Page+Screenshot)

### Product Detail
![Product Detail](https://via.placeholder.com/800x400?text=Product+Detail+Screenshot)

### Shopping Cart
![Cart](https://via.placeholder.com/800x400?text=Cart+Screenshot)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgments

- Design inspired by traditional Indian aesthetics
- Icons by [Lucide](https://lucide.dev/)
- Fonts by Google Fonts (Inter, Playfair Display)
- Images from Unsplash

---

## 📞 Support

For support, email support@kumkumvastr.com or create an issue in the repository.

---

**Made with ❤️ in India** 🇮🇳

---

## 🗺️ Roadmap

- [ ] Payment Gateway Integration (Razorpay/Stripe)
- [ ] Email Notifications
- [ ] Product Reviews & Ratings
- [ ] Wishlist Functionality
- [ ] Order Tracking with SMS
- [ ] Admin Dashboard Analytics
- [ ] Multi-language Support
- [ ] Size Guide & Measurement Tool
- [ ] Virtual Try-On Feature
- [ ] Mobile App (React Native)

---

**Version 1.0.0** | **Last Updated: January 2024**
