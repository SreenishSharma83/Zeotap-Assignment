const express = require('express');
const router = express.Router();
const { storeWeatherDataForMultipleCities } = require('../controllers/weatherController');

// Fetch and store weather data for multiple cities
router.get('/weather', storeWeatherDataForMultipleCities);

module.exports = router;
