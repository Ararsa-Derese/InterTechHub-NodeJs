// src/routes/hobbyRoutes.js
const express = require('express');
const { getHobby } = require('../controllers/hobbyController');

const router = express.Router();
router.get('/hobby', getHobby);

module.exports = router;
