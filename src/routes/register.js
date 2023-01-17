const express = require('express');

const router = express.Router();

// controllers
const { userRegister } = require('../controllers/register')
// middlewares
const { middleRegister } = require('../middleware/register');

router.post('/user', middleRegister, userRegister);

module.exports = router;