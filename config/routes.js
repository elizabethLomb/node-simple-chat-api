const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controllers');
const usersController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const {
  isNotAuthenticated,
  isAuthenticated,
} = require('../middlewares/auth.middleware');

router.get('/', isNotAuthenticated, controller.base);

// create user
router.post('/users', isNotAuthenticated, usersController.create);
// router.post('/users', authMiddleware.isNotAuthenticated, upload.single('avatar'), usersController.create)
// router.get('/users/:token/validate', usersController.validate)

// login
router.post('/login', isNotAuthenticated, authController.doLogin);
router.post('/logout', isAuthenticated, authController.logout);

module.exports = router;
