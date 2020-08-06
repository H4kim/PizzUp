const cruds = require("../utils/cruds");
const Category = require("../models/categoryModel");
const catchAsync = require("../utils/catchAsync");

exports.addCategory = cruds.createOne(Category);

exports.getAllCategory = cruds.getAll(Category);

exports.getOneCategory = cruds.getOne(Category);

exports.updateCategory = cruds.updateOne(Category);

exports.deleteCategory = cruds.deleteOne(Category);
