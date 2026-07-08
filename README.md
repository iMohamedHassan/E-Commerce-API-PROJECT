# E-Commerce API

A simple REST API for managing products and shopping carts. Built with Node.js, Express, and MongoDB.

## What's in here?

I built this API with:
- **Products**: Add, update, delete products 
- **Shopping Cart**: Users can add items and manage their cart
- **Error Handling**: Central error middleware to catch everything

Two types of users:
- **Shoppers**: Can view products and manage cart
- **Admins**: Can manage all products (create, read, update, delete)

## Getting Started

### What you need
- Node.js
- npm
- MongoDB Atlas account
- Git

### Setup

1. Clone the repo
   ```bash
   git clone <repository-url>
   cd ecommerce-api
   ```

2. Install packages
   ```bash
   npm install
   ```

3. Copy `.env.example` to create `.env`:
   ```bash
   cp .env.example .env
   ```

4. Open `.env` and set your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

4. Seed the database with sample products
   ```bash
   npm run seed
   ```

5. Start the server
   ```bash
   npm run dev
   ```

## Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- dotenv, Nodemon

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Cart
- `POST /api/cart` - Create a new cart
- `GET /api/cart/:userId` - Get user's cart
- `POST /api/cart/:userId/items` - Add item to cart
- `DELETE /api/cart/:userId/items/:productId` - Remove item from cart
- `DELETE /api/cart/:userId/clear` - Clear entire cart

### Health Check
- `GET /health` - Check if server is running

## Example Requests

### Get all products
```
GET http://localhost:5000/api/products
```

### Create a product
```
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "name": "Laptop",
  "price": 999.99,
  "description": "High performance laptop",
  "category": "Electronics",
  "image": "https://example.com/laptop.jpg"
}
```

### Add item to cart
```
POST http://localhost:5000/api/cart/user123/items
Content-Type: application/json

{
  "productId": "6a4e74202f453cec1f526bd0",
  "quantity": 2
}
```

## Project Structure

```
ecommerce-api/
├── controllers/
│   ├── productController.js
│   └── cartController.js
├── models/
│   ├── Product.js
│   └── Cart.js
├── routes/
│   ├── productRoutes.js
│   └── cartRoutes.js
├── services/
│   ├── productService.js
│   └── cartService.js
├── middleware/
│   └── errorHandler.js
├── scripts/
│   └── seed.js
├── db/
│   └── connect.js
├── index.js
├── .env
├── package.json
└── README.md
```

## Testing

Use Postman to test the endpoints. I included a seed script that adds 8 sample products to the database so you can test right away.

Just run:
```bash
npm run seed
```

Then use the product IDs from the GET /api/products response to test adding items to the cart.

## Notes

- All responses follow a consistent format with `success`, `message`, and `data` fields
- Validation errors return 400 status
- Not found errors return 404 status
- Check the error middleware if something breaks

That's it!