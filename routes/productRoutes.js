const express = require('express');
const orderRoutes = require('./orderRoutes');
const productController = require('../controllers/productController');

const router = express.Router();

// router.use("/:id/orders", orderRoutes);

router
  .route('/')
  .post(productController.upload.single('image'), productController.addProduct)
  .get(productController.getAllProduct);

router
  .route('/:id')
  .get(productController.getOneProduct)
  .patch(
    productController.upload.single('image'),
    productController.updateProduct
  )
  .delete(productController.deleteProduct);

module.exports = router;
