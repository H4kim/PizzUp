const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("errors-handler/appError");
const bcrypt = require("bcrypt");

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXP_TIME,
  });
  return token;
};

const createSendToken = (res, user) => {
  const token = signToken(user.id);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 7776000000),
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  createSendToken(res, user);

  res.status(201).json({
    status: "success",
    message: "Account created succesfully",
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password)))
    return next(new AppError("Invalid email or password", 404));

  createSendToken(res, user);

  res.status(200).json({
    status: "success",
    message: "User logged in succesfully",
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return next(
      new AppError("You are not logged in , please login to get access", 401)
    );

  const decoded = await promisify(jwt.verify)(
    req.cookies.token,
    process.env.JWT_SECRET_KEY
  );

  const user = await User.findById(decoded.id);

  // check if the user still exist
  if (!user)
    return next(
      new AppError("The user belonging to this token is no longer exist", 401)
    );

  req.user = user;
  next();
});
