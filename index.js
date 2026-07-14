require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/errorHandler");
const Product = require("./models/Product");
const { seedDatabase } = require("./scripts/seed");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ message: "Server is running" });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Middleware (must be last)
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    await connectDB();

    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await seedDatabase({ clearExisting: false });
    } else {
      console.log(`Found ${productCount} products already. No need to seed again.`);
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server could not start:", error.message);
    process.exit(1);
  }
};

startServer();
