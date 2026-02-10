# API Documentation - Kumkum Vastr

## Authentication Endpoints

### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "message": "Registration successful! Please check your email to verify your account.",
  "userId": "user_id_here"
}
```

### POST /api/auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "accessToken": "jwt_token",
  "refreshToken": "refresh_token"
}
```

### POST /api/auth/verify
Verify email address with token.

**Request Body:**
```json
{
  "token": "verification_token"
}
```

### POST /api/auth/reset-password
Request password reset.

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

### PUT /api/auth/reset-password
Reset password with token.

**Request Body:**
```json
{
  "token": "reset_token",
  "newPassword": "newpassword123"
}
```

### POST /api/auth/refresh
Refresh access token.

**Request Body:**
```json
{
  "refreshToken": "refresh_token"
}
```

### POST /api/auth/logout
Logout and clear tokens.

---

## Product Endpoints

### GET /api/products
Get all products with optional filters.

**Query Parameters:**
- `category` - Filter by category ID
- `collection` - Filter by collection ID
- `featured` - Filter featured products (true/false)

**Response (200):**
```json
{
  "products": [
    {
      "_id": "product_id",
      "name": "Premium Silk Saree",
      "slug": "premium-silk-saree",
      "price": 5999,
      "images": ["image_url"],
      "category": { "name": "Sarees", "slug": "sarees" }
    }
  ]
}
```

### GET /api/products/[slug]
Get product by slug.

**Response (200):**
```json
{
  "product": {
    "_id": "product_id",
    "name": "Premium Silk Saree",
    "description": "Beautiful silk saree...",
    "price": 5999,
    "discount": 10,
    "images": ["image1", "image2"],
    "sizes": ["S", "M", "L"],
    "colors": ["Red", "Blue"],
    "stock": 50
  }
}
```

---

## Category Endpoints

### GET /api/categories
Get all active categories.

**Response (200):**
```json
{
  "categories": [
    {
      "_id": "category_id",
      "name": "Sarees",
      "slug": "sarees",
      "description": "Traditional Indian sarees"
    }
  ]
}
```

---

## Collection Endpoints

### GET /api/collections
Get all active collections.

**Query Parameters:**
- `featured` - Filter featured collections (true/false)

**Response (200):**
```json
{
  "collections": [
    {
      "_id": "collection_id",
      "name": "Festive Collection",
      "slug": "festive-collection",
      "isFeatured": true
    }
  ]
}
```

---

## Error Responses

All endpoints may return error responses in the following format:

**400 Bad Request:**
```json
{
  "error": "Validation error message"
}
```

**401 Unauthorized:**
```json
{
  "error": "Unauthorized"
}
```

**403 Forbidden:**
```json
{
  "error": "Forbidden"
}
```

**404 Not Found:**
```json
{
  "error": "Resource not found"
}
```

**500 Internal Server Error:**
```json
{
  "error": "Internal server error"
}
```

---

## Authentication

Protected endpoints require authentication via:
1. HTTP-only cookies (automatic)
2. Authorization header: `Bearer <access_token>`

Access tokens expire after 15 minutes. Use refresh endpoint to get new tokens.

---

## Rate Limiting

Currently no rate limiting implemented. Consider adding in production:
- Login: 5 attempts per 15 minutes
- Registration: 3 attempts per hour
- API calls: 100 per minute per user

---

## CORS

CORS is configured to allow:
- Same-origin requests
- Credentials (cookies)

---

## Future Endpoints (To be implemented)

- `/api/orders` - Order management
- `/api/users` - User management
- `/api/admin/*` - Admin operations
- `/api/export/*` - Data export
- `/api/addresses` - Address management
- `/api/cart` - Cart operations
