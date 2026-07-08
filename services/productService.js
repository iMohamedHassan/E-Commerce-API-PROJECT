const Product = require("../models/Product");

// Get all products
exports.getAllProducts = async () => {
  return await Product.find().sort({ createdAt: -1 });
};

// Get single product by ID
exports.getProductById = async (id) => {
  return await Product.findById(id);
};

// Create new product
exports.createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

// Update product
exports.updateProduct = async (id, updateData) => {
  return await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

// Delete product
exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

// Get products by category
exports.getProductsByCategory = async (category) => {
  return await Product.find({ category }).sort({ createdAt: -1 });
};
