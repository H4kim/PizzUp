const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

//USERs
router.get("/myOrders", authController.protect, orderController.getMyOrders);

router
  .route("/")
  .post(authController.protect, orderController.addOrder)
  .get(authController.protect, orderController.getAllOrder);

//ADMIN
router
  .route("/:id")
  .get(authController.protect, orderController.getOneOrder)
  .delete(authController.protect, orderController.deleteOrder)
  .patch(authController.protect, orderController.updateOrder);

module.exports = router;
