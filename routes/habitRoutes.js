const express = require('express');
const router = express.Router();
const {
  getHabits,
  addHabit,
  editHabit,
  checkInHabit,
  removeHabit,
} = require('../controllers/habitController');

// TODO (Stage 5): Wire up each route to its controller.
// GET    /              -> getHabits
// POST   /              -> addHabit
// PUT    /:id           -> editHabit
// PATCH  /:id/check-in  -> checkInHabit
// DELETE /:id           -> removeHabit

router.get('/', getHabits);
router.post('/', addHabit);
router.put('/:id', editHabit);
router.patch('/:id/check-in', checkInHabit);
router.delete('/:id', removeHabit);

module.exports = router;
