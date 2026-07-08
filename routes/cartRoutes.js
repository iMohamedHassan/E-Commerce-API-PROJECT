const express = require("express");
const router = express.Router();

// Routes will be implemented in step 13
// GET cart
router.get("/:userId", (req, res) => {
  res.json({ message: "Get user cart" });
});

// POST create cart
router.post("/", (req, res) => {
  res.json({ message: "Create cart" });
});

// POST add item to cart
router.post("/:userId/items", (req, res) => {
  res.json({ message: "Add item to cart" });
});

module.exports = router;
