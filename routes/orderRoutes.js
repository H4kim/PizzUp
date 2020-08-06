const express = require('express');
const orderController = require('../controllers/orderController')


const router = express.Router({ mergeParams : true })

router.route('/')
    .post(orderController.addOrder)
    .get(orderController.getAllOrder)
    

router.route('/:id')
    .get(orderController.getOneOrder)
    .delete(orderController.deleteOrder)
    .patch(orderController.updateOrder)

// router.post('/:id/products/:productId', orderController.addOrder)

module.exports = router