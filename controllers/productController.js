const AppError = require("errors-handler/appError");
const cruds = require("../utils/cruds");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/images/products",
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + ".jpg");
  },
});

exports.upload = multer({ storage });

exports.addProduct = catchAsync(async (req, res, next) => {
  let product;
  if (req.file) {
    product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      price: req.body.price,
      featured: req.body.featured,
      image: req.file.filename,
    };
  } else return next(new AppError("a product must have an image", 400));

  await Product.create(product);

  res.status(200).json({
    status: "success",
    message: "Product added succesflly",
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new AppError("Invalid ID", 400));

  if (req.body.featured) product.featured = req.body.featured;
  if (req.body.name) product.name = req.body.name;
  if (req.body.price) product.price = req.body.price;
  if (req.body.category) product.category = req.body.category;
  if (req.file) product.image = req.file.path;

  await product.save();

  res.status(200).json({
    status: "success",
    data: product,
  });
});

// exports.getAllProduct = cruds.getAll(Product);

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.find(req.query);
  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

exports.getOneProduct = cruds.getOne(Product);

exports.deleteProduct = cruds.deleteOne(Product);
