const AppError = require("errors-handler/appError");
const cruds = require("../utils/cruds");
const Expense = require("../models/expenseModel");
const catchAsync = require("../utils/catchAsync");

exports.updateExpense = catchAsync(async (req, res, next) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) return next(new AppError("Invalid ID", 400));

  if (req.body.title) expense.title = req.body.title;
  if (req.body.amount) expense.amount = req.body.amount;
  if (req.body.suplier) expense.suplier = req.body.suplier;

  await expense.save();

  res.status(200).json({
    status: "success",
    data: expense,
  });
});
exports.addExpense = cruds.createOne(Expense);

exports.getAllExpense = cruds.getAll(Expense);

exports.getOneExpense = cruds.getOne(Expense);

// exports.updateExpense = cruds.updateOne(Expense);

exports.deleteExpense = cruds.deleteOne(Expense);
