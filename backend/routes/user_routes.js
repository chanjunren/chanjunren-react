const express = require('express');
const userController = require('../controllers/user_controller');
const router = express.Router();

router.get('/', userController.getAllUsers);

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);

router.delete("/:userId", userController.deleteUserById);

module.exports = router;
