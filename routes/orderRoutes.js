const express = require('express');
const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();

//USERs
router.get('/myOrders', authController.protect, orderController.getMyOrders);

router
  .route('/')
  .post(authController.protect, orderController.addOrder)
  .get(authController.protect, authController.restrictTo('user'), orderController.getAllOrder); //NEED TO BE ADMIN  //BUG

// Admin
router
  .route('/:id')
  .get(authController.protect, authController.restrictTo('user'), orderController.getOneOrder) //NEED TO BE ADMIN //BUG
  .delete(authController.protect, authController.restrictTo('user'), orderController.deleteOrder) //NEED TO BE ADMIN //BUG
  .patch(authController.protect, authController.restrictTo('user'), orderController.updateOrder); //NEED TO BE ADMIN //BUG

module.exports = router;
