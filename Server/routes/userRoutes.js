const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users/test — создание тестового пользователя
router.post('/test', userController.createTestUser);

module.exports = router;
