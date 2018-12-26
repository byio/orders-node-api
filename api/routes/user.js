const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

router.get('/', UserController.user_get_all);

module.exports = router;
