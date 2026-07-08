const {
  getAllHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  getHabitById,
} = require('../services/habitService');

// TODO (Stage 4): Complete each controller.
// Rules: always use try/catch, always call next(error) in the catch block,
// never query the database directly here - use the service functions above.

// GET /habits  or  GET /habits?frequency=daily
// HINT: build a filter object from req.query.frequency before calling getAllHabits
const getHabits = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.frequency) {
      filter.frequency = req.query.frequency;
    }
    const habits = await getAllHabits(filter);
    res.json(habits);
  } catch (error) {
    next(error);
  }
};

// POST /habits -> respond with status 201 and the new habit
const addHabit = async (req, res, next) => {
  try {
    const habit = await createHabit(req.body);
    res.status(201).json(habit);
  } catch (error) {
    next(error);
  }
};

// PUT /habits/:id -> respond with the updated habit
// If the habit is not found, set error.status = 404 and call next(error)
const editHabit = async (req, res, next) => {
  try {
    const updatedHabit = await updateHabit(req.params.id, req.body);
    if (!updatedHabit) {
      const error = new Error('Habit not found');
      error.status = 404;
      return next(error);
    }
    res.json(updatedHabit);
  } catch (error) {
    next(error);
  }
};

// PATCH /habits/:id/check-in
// HINT: first fetch the existing habit with getHabitById to read its current streak,
// then update it with completedToday: true and streak: existing.streak + 1
const checkInHabit = async (req, res, next) => {
  try {
    const habit = await getHabitById(req.params.id);
    if (!habit) {
      const error = new Error('Habit not found');
      error.status = 404;
      return next(error);
    }
    const updatedHabit = await updateHabit(req.params.id, {
      completedToday: true,
      streak: habit.streak + 1,
    });
    res.json(updatedHabit);
  } catch (error) {
    next(error);
  }
};

// DELETE /habits/:id -> respond with a confirmation message
const removeHabit = async (req, res, next) => {
  try {
    const deletedHabit = await deleteHabit(req.params.id);
    if (!deletedHabit) {
      const error = new Error('Habit not found');
      error.status = 404;
      return next(error);
    }
    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getHabits, addHabit, editHabit, checkInHabit, removeHabit };
