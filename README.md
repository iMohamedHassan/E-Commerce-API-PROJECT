# E-Commerce API

A simple API for products and shopping carts.

## Start here

1. Install packages
   ```bash
   npm install
   ```

2. Create a `.env` file
   ```bash
   cp .env.example .env
   ```

3. Add your MongoDB URL in `.env`
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

4. Seed sample data
   ```bash
   npm run seed
   ```

5. Start the server
   ```bash
   npm run dev
   ```

## Main endpoints

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `POST /api/cart`
- `GET /api/cart/:userId`
- `POST /api/cart/:userId/items`
- `DELETE /api/cart/:userId/items/:productId`
- `DELETE /api/cart/:userId/clear`
- `GET /health`

## Test it

You can test the API in Postman.

A ready-to-import collection is included as [postman-collection.json](postman-collection.json).