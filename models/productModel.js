const mongoose = require("mongoose");
const AppError = require("errors-handler/appError");
const Category = require("./categoryModel");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "product name must be unique"],
    required: [true, "a product must have a name "],
  },
  image: {
    type: String,
    required: [true, "a product must have an image "],
  },
  category: {
    type: String,
    required: [true, "product must belong to a category"],
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: [true, "a product must have a price "],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

//assign categoryId Before save
productSchema.pre("save", async function (next) {
  const category = await Category.findOne({ name: this.category });
  if (!category)
    return next(
      new AppError(`No category with the name of ${this.category} `, 400)
    );
  this.categoryId = category._id;
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
