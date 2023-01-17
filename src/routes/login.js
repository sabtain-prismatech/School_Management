const express = require('express');

const router = express.Router();

// controllers
const { userlogin } = require('../controllers/login')
// middlewares
const { middleLogin } = require('../middleware/login');

router.post('/user', middleLogin, userlogin);

module.exports = router;