const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Category name must be unique"],
    required: [true, "a category must have a name "],
  },
});

//TODO (make it work)
// categorySchema.methods.findSimilarTypes = function (req) {
//   return req;
// };
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
