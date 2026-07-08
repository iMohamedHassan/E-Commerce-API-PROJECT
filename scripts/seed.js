require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected for seeding");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
};

const sampleProducts = [
  {
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    image: "https://via.placeholder.com/300?text=Wireless+Headphones",
  },
  {
    name: "Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and breathable cotton t-shirt",
    category: "Clothing",
    image: "https://via.placeholder.com/300?text=Cotton+T-Shirt",
  },
  {
    name: "JavaScript Book",
    price: 39.99,
    description: "Learn JavaScript from basics to advanced concepts",
    category: "Books",
    image: "https://via.placeholder.com/300?text=JavaScript+Book",
  },
  {
    name: "Desk Lamp",
    price: 45.99,
    description: "LED desk lamp with adjustable brightness",
    category: "Home",
    image: "https://via.placeholder.com/300?text=Desk+Lamp",
  },
  {
    name: "Running Shoes",
    price: 129.99,
    description: "Professional running shoes with cushioning support",
    category: "Sports",
    image: "https://via.placeholder.com/300?text=Running+Shoes",
  },
  {
    name: "USB-C Cable",
    price: 19.99,
    description: "Durable USB-C charging and data transfer cable",
    category: "Electronics",
    image: "https://via.placeholder.com/300?text=USB-C+Cable",
  },
  {
    name: "Winter Jacket",
    price: 159.99,
    description: "Warm and stylish winter jacket with waterproof material",
    category: "Clothing",
    image: "https://via.placeholder.com/300?text=Winter+Jacket",
  },
  {
    name: "Coffee Maker",
    price: 89.99,
    description: "Automatic coffee maker with programmable timer",
    category: "Home",
    image: "https://via.placeholder.com/300?text=Coffee+Maker",
  },
];

const seedDatabase = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert sample products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`✅ ${createdProducts.length} products seeded successfully`);

    // Display seeded products
    console.log("\nSeeded Products:");
    createdProducts.forEach((product) => {
      console.log(`- ${product.name} ($${product.price})`);
    });

    mongoose.connection.close();
    console.log("\n✅ Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    mongoose.connection.close();
    process.exit(1);
  }
};

// Run seeding
connectDB().then(() => seedDatabase());
