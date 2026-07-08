const Habit = require('../models/Habit');

// TODO (Stage 3):
// Complete each function. Use Mongoose methods directly on the Habit model.

// Return all habits matching the filter, sorted by newest first
const getAllHabits = async (filter = {}) => {
  return Habit.find(filter).sort({ createdAt: -1 });
};

// Return one habit by its id
const getHabitById = async (id) => {
  return Habit.findById(id);
};

// Create and return a new habit from the provided data
const createHabit = async (data) => {
  return Habit.create(data);
};

// Find a habit by id, update it, and return the NEW version
// HINT: pass { new: true, runValidators: true } as options
const updateHabit = async (id, data) => {
  return Habit.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Find a habit by id and delete it, return the deleted document
const deleteHabit = async (id) => {
  return Habit.findByIdAndDelete(id);
};

module.exports = { getAllHabits, getHabitById, createHabit, updateHabit, deleteHabit };
