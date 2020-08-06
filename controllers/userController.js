const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("errors-handler/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find().select("-password");

  res.status(201).json({
    status: "success",
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userID).select("-password");

  if (!user) return next(new AppError("No user with that id"));

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
