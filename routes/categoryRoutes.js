const express = require("express");
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(categoryController.addCategory)
  .get(categoryController.getAllCategory);

router
  .route("/:id")
  .get(categoryController.getOneCategory)
  .delete(categoryController.deleteCategory)
  .patch(categoryController.updateCategory);

module.exports = router;
