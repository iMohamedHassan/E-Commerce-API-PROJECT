const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
      maxlength: [100, "Product name cannot be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a product price"],
      min: [0, "Product price cannot be negative"],
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    category: {
      type: String,
      required: [true, "Please provide a product category"],
      enum: ["Electronics", "Clothing", "Books", "Home", "Sports", "Other"],
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/300",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
