const Product = require("../models/Product");
const {
  createCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearCart,
} = require("../services/cartService");

// Create a new cart
exports.createCart = async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Please provide userId",
      });
    }

    const cart = await createCart(userId);
    res.status(201).json({
      success: true,
      message: "Cart created successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Get user's cart
exports.getCart = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const cart = await getCart(userId);
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Add item to cart
exports.addItemToCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Please provide productId and quantity",
      });
    }

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const cart = await addItemToCart(userId, productId, quantity, product.price);
    res.status(200).json({
      success: true,
      message: "Item added to cart successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res, next) => {
  try {
    const { userId, productId } = req.params;

    const cart = await removeItemFromCart(userId, productId);
    res.status(200).json({
      success: true,
      message: "Item removed from cart",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Clear cart
exports.clearCart = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const cart = await clearCart(userId);
    res.status(200).json({
      success: true,
      message: "Cart cleared",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
