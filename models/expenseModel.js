const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Expenses must have a title (tomato , bread, ..)"],
    unique: [true, "test"],
  },
  amount: {
    type: Number,
    required: [true, "Expenses must have a price"],
  },
  suplier: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
    enum: Date.now(),
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
