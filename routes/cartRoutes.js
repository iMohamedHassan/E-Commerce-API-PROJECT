const express = require("express");
const router = express.Router();
const {
  createCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearCart,
} = require("../controllers/cartController");

// GET user's cart
router.get("/:userId", getCart);

// POST create cart
router.post("/", createCart);

// POST add item to cart
router.post("/:userId/items", addItemToCart);

// DELETE remove item from cart
router.delete("/:userId/items/:productId", removeItemFromCart);

// DELETE clear entire cart
router.delete("/:userId/clear", clearCart);

module.exports = router;
