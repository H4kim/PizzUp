const AppError = require("errors-handler/appError");
const cruds = require("../utils/cruds");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");

exports.addOrder = catchAsync(async (req, res, next) => {
  const orderDetails = req.body.orderDetails;
  if (!orderDetails) return next(new AppError("Order list is empty"));
  let totalPrice = 0;
  let orderNumber = 0;

  //get the number of items (products ordred) && Total price
  let product;
  for (i = 0; i < orderDetails.length; i++) {
    product = await Product.findById(orderDetails[i].product);
    totalPrice += product.price * orderDetails[i].quantity;
    orderNumber += orderDetails[i].quantity;
  }

  const orderObj = {};
  orderObj.user = req.user._id;
  orderObj.phone = req.body.phone;
  orderObj.address = req.body.address;
  orderObj.orderNum = orderNumber;
  orderObj.totalPrice = totalPrice;
  orderObj.orderDetails = [...orderDetails];

  const order = await Order.create(orderObj);

  console.log(req.user);
  res.status(201).json({
    status: "success",
    data: order,
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new AppError("Invalid ID", 400));

  if (req.body.status) order.status = req.body.status;
  if (req.body.phone) order.phone = req.body.phone;
  if (req.body.quantity) order.quantity = req.body.quantity;
  if (req.body.product) order.product = req.body.product;

  await order.save();

  res.status(200).json({
    status: "success",
    data: order,
  });
});

exports.getMyOrders = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const query = req.query.filter;
  let orders;
  if (!query) {
    orders = await Order.find({ user: userId });
  } else {
    orders = await Order.find({ user: userId, status: query });
  }

  res.status(200).json({
    status: "success",
    result: orders.length,
    data: orders,
  });
});

exports.getAllOrder = cruds.getAll(Order);

exports.getOneOrder = cruds.getOne(Order);

exports.deleteOrder = cruds.deleteOne(Order);
