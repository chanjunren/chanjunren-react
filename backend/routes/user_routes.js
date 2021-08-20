const express = require('express');
const userController = require('../controllers/user_controller');
const router = express.Router();

router.get('/', userController.getAllUsers);

router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);
router.use(check_authentication);
router.delete("/:userId", userController.deleteUserById);

module.exports = router;
