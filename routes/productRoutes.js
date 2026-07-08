const express = require("express");
const router = express.Router();

// Routes will be implemented in step 12
// GET all products
router.get("/", (req, res) => {
  res.json({ message: "Get all products" });
});

// POST new product
router.post("/", (req, res) => {
  res.json({ message: "Create new product" });
});

// GET product by ID
router.get("/:id", (req, res) => {
  res.json({ message: "Get product by ID" });
});

// PUT update product
router.put("/:id", (req, res) => {
  res.json({ message: "Update product" });
});

// DELETE product
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete product" });
});

module.exports = router;
