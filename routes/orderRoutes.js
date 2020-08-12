const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(authController.protect, orderController.addOrder)
  .get(orderController.getAllOrder);

router
  .route("/:id")
  .get(orderController.getOneOrder)
  .delete(orderController.deleteOrder)
  .patch(orderController.updateOrder);

// router.post('/:id/products/:productId', orderController.addOrder)

module.exports = router;
