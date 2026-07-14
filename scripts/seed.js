require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const connectDB = require("../db/connect");

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

const seedDatabase = async ({ clearExisting = true } = {}) => {
  try {
    const existingCount = await Product.countDocuments();

    if (existingCount > 0 && clearExisting === false) {
      console.log(`Products already exist (${existingCount}). Skipping seeding.`);
      return [];
    }

    if (clearExisting) {
      await Product.deleteMany({});
      console.log("Cleared existing products");
    }

    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`${createdProducts.length} products were added.`);

    if (clearExisting) {
      console.log("\nSample products:");
      createdProducts.forEach((product) => {
        console.log(`- ${product.name} ($${product.price})`);
      });
    }

    return createdProducts;
  } catch (error) {
    console.error("Error seeding database:", error.message);
    throw error;
  }
};

const runSeeder = async () => {
  try {
    await connectDB();
    await seedDatabase();
    console.log("\nSeeding finished.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
};

if (require.main === module) {
  runSeeder();
}

module.exports = { sampleProducts, seedDatabase };
