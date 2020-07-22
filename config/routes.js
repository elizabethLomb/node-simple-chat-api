const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controllers');

router.get('/', controller.base);

module.exports = router;
