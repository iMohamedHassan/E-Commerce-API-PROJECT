const Cart = require("../models/Cart");

// Create a new cart for user
exports.createCart = async (userId) => {
  let cart = await Cart.findOne({ userId });
  if (cart) {
    return cart;
  }
  cart = new Cart({ userId, items: [], totalPrice: 0 });
  return await cart.save();
};

// Get user's cart
exports.getCart = async (userId) => {
  return await Cart.findOne({ userId }).populate("items.productId");
};

// Add item to cart
exports.addItemToCart = async (userId, productId, quantity, price) => {
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({
      userId,
      items: [{ productId, quantity, price }],
      totalPrice: price * quantity,
    });
  } else {
    // Check if item already in cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, price });
    }
  }

  await cart.save();
  return await Cart.findOne({ userId }).populate("items.productId");
};

// Remove item from cart
exports.removeItemFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await cart.save();
  return await Cart.findOne({ userId }).populate("items.productId");
};

// Clear cart
exports.clearCart = async (userId) => {
  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  cart.items = [];
  cart.totalPrice = 0;
  await cart.save();
  return cart;
};

// Update item quantity
exports.updateItemQuantity = async (userId, productId, quantity) => {
  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const item = cart.items.find(
    (item) => item.productId.toString() === productId
  );

  if (!item) {
    throw new Error("Item not found in cart");
  }

  item.quantity = quantity;
  await cart.save();
  return await Cart.findOne({ userId }).populate("items.productId");
};
