const mongoose = require('mongoose');

// TODO (Stage 2):
// Define a habitSchema with these fields:
//   name            -> String, required ('Habit name is required'), trim
//   frequency       -> String, enum ['daily', 'weekly'], default 'daily'
//   streak          -> Number, default 0, min 0
//   completedToday  -> Boolean, default false
// Add { timestamps: true } as the second argument to the schema.

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Habit name is required'],
      trim: true,
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly'],
      default: 'daily',
    },
    streak: {
      type: Number,
      default: 0,
      min: 0,
    },
    completedToday: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Habit', habitSchema);
