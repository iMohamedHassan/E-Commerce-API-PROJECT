# 🛍️ E-Commerce API

A modern REST API for managing products and shopping carts built with Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Setup & Configuration](#setup--configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Testing with Postman](#testing-with-postman)

## 📝 Project Description

This E-Commerce API provides a robust backend solution for managing:
- **Products**: Browse, create, update, and delete products
- **Shopping Cart**: Add/remove items, manage cart for users
- **Error Handling**: Comprehensive centralized error handling

The API supports two main user types:
- **Shoppers**: View products and manage their shopping cart
- **Admins**: Full control over product catalog (CRUD operations)

## ✨ Features

### Product Management
- ✅ Get all products with sorting
- ✅ Get individual product details
- ✅ Create new products (Admin)
- ✅ Update product information (Admin)
- ✅ Delete products (Admin)
- ✅ Filter products by category

### Cart Management
- ✅ Create shopping cart for users
- ✅ View cart contents with product details
- ✅ Add items to cart
- ✅ Remove items from cart
- ✅ Clear entire cart
- ✅ Automatic total price calculation

### Data Validation
- ✅ Schema validation on all models
- ✅ Input validation on API endpoints
- ✅ Error handling with meaningful messages

### Categories
Supported product categories:
- Electronics
- Clothing
- Books
- Home
- Sports
- Other

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **ODM**: Mongoose
- **Environment**: dotenv
- **Development**: Nodemon
- **API Testing**: Postman

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables** (see Setup & Configuration section)

## 🔧 Setup & Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce-db?appName=Cluster0
PORT=5000
NODE_ENV=development
```

**Variables:**
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode (development/production)

### Database Connection

The application automatically connects to MongoDB when started. Ensure your MongoDB URI is correct in the `.env` file.

## 🚀 Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Seed Sample Data
```bash
npm run seed
```

This populates the database with 8 sample products for testing.

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Health Check
```
GET /health
```
Response: `{ "message": "Server is running" }`

---

## Products Endpoints

### Get All Products
```
GET /products
```
**Response:**
```json
{
  "success": true,
  "count": 8,
  "data": [
    {
      "_id": "...",
      "name": "Wireless Headphones",
      "price": 99.99,
      "description": "High-quality wireless headphones...",
      "category": "Electronics",
      "image": "https://...",
      "createdAt": "2026-07-08T...",
      "updatedAt": "2026-07-08T..."
    }
  ]
}
```

### Get Product by ID
```
GET /products/:id
```
**Example:**
```
GET /products/507f1f77bcf86cd799439011
```

### Create Product (Admin)
```
POST /products
Content-Type: application/json

{
  "name": "New Product",
  "price": 49.99,
  "description": "Product description",
  "category": "Electronics",
  "image": "https://example.com/image.jpg"
}
```

### Update Product (Admin)
```
PUT /products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 59.99,
  "description": "Updated description"
}
```

### Delete Product (Admin)
```
DELETE /products/:id
```

---

## 🛒 Cart Endpoints

### Create Cart
```
POST /cart
Content-Type: application/json

{
  "userId": "507f1f77bcf86cd799439011"
}
```

### Get User Cart
```
GET /cart/:userId
```

### Add Item to Cart
```
POST /cart/:userId/items
Content-Type: application/json

{
  "productId": "507f1f77bcf86cd799439011",
  "quantity": 2
}
```

### Remove Item from Cart
```
DELETE /cart/:userId/items/:productId
```

### Clear Cart
```
DELETE /cart/:userId/clear
```

---

## 📂 Project Structure

```
ecommerce-api/
├── controllers/          # Request handlers
│   ├── productController.js
│   └── cartController.js
├── models/              # Database schemas
│   ├── Product.js
│   └── Cart.js
├── routes/              # API routes
│   ├── productRoutes.js
│   └── cartRoutes.js
├── services/            # Business logic
│   ├── productService.js
│   └── cartService.js
├── middleware/          # Express middleware
│   └── errorHandler.js
├── scripts/             # Utility scripts
│   └── seed.js
├── db/                  # Database configuration
│   └── connect.js
├── .env                 # Environment variables
├── .gitignore           # Git ignore rules
├── index.js             # Express server entry point
├── package.json         # Project dependencies
└── README.md            # Documentation
```

## 🧪 Testing with Postman

### Import Collection

1. Open Postman
2. Create a new Collection: "E-Commerce API"
3. Add the following requests:

### Test Requests

#### 1. Health Check
```
GET http://localhost:5000/health
```

#### 2. Get All Products
```
GET http://localhost:5000/api/products
```

#### 3. Create Product
```
POST http://localhost:5000/api/products
Body (JSON):
{
  "name": "Test Product",
  "price": 99.99,
  "description": "A test product",
  "category": "Electronics",
  "image": "https://via.placeholder.com/300"
}
```

#### 4. Create Cart
```
POST http://localhost:5000/api/cart
Body (JSON):
{
  "userId": "USER_ID_HERE"
}
```

#### 5. Add Item to Cart
```
POST http://localhost:5000/api/cart/USER_ID_HERE/items
Body (JSON):
{
  "productId": "PRODUCT_ID_HERE",
  "quantity": 2
}
```

#### 6. Get Cart
```
GET http://localhost:5000/api/cart/USER_ID_HERE
```

#### 7. Remove Item from Cart
```
DELETE http://localhost:5000/api/cart/USER_ID_HERE/items/PRODUCT_ID_HERE
```

### Tips for Testing
- Replace `USER_ID_HERE` with an actual MongoDB ObjectId or create a unique ID
- Use product IDs from the GET /products response
- Check console output for any validation errors
- Postman will auto-highlight syntax errors in JSON body

## 🐛 Error Handling

The API includes comprehensive error handling:

- **Validation Errors** (400): Missing or invalid required fields
- **Not Found Errors** (404): Resource doesn't exist
- **Server Errors** (500): Unexpected server issues
- **Mongoose Errors**: Handled gracefully with meaningful messages

Example Error Response:
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

## 📚 API Response Format

All responses follow a consistent format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔐 Security Notes

- Always validate user input on the server
- Sanitize data before storing in database
- Implement authentication/authorization for admin routes
- Use HTTPS in production
- Keep dependencies updated
- Never commit `.env` file to version control

## 🚀 Deployment

To deploy this API:

1. **Environment Variables**: Set all `.env` variables on your hosting platform
2. **Database**: Ensure MongoDB Atlas connection is accessible
3. **Dependencies**: Install with `npm install --production`
4. **Start Command**: Use `npm start`

Recommended hosting platforms:
- Heroku
- Railway
- Render
- AWS/Azure/GCP

## 📝 Version

**Version**: 1.0.0

## 📄 License

ISC

## 👥 Author

E-Commerce API Team

---

## 📞 Support

For issues, questions, or contributions, please open an issue or contact the development team.

**Happy coding! 🚀**
