const express = require('express');
const { getWeatherData, getDailySummary } = require('../controllers/weatherController');

const router = express.Router();

router.get('/current', getWeatherData);
router.get('/summary', getDailySummary);

module.exports = router;
