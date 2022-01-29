const express = require('express');
const userController = require('../controllers/user_controller');
const router = express.Router();
const check_authentication = require('../middleware/check_authentication');
router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);
router.use(check_authentication);
router.get('/', userController.getAllUsers);
router.delete("/:userId", userController.deleteUserById);

module.exports = router;
