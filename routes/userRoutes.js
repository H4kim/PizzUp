const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.isLoggedIn, authController.login);

router.route('/').get(userController.getAllUsers);
router.route('/:userID').get(userController.getUser);

module.exports = router;
