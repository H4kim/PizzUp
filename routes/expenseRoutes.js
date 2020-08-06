const express = require('express');
const expenseController = require('../controllers/expenseController')


const router = express.Router()

router.route('/')
    .post(expenseController.addExpense)
    .get(expenseController.getAllExpense)
    

router.route('/:id')
    .get(expenseController.getOneExpense)
    .delete(expenseController.deleteExpense)
    .patch(expenseController.updateExpense)


module.exports = router