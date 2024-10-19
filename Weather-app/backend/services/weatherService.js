const axios = require('axios');

const API_KEY = 'a31c70de1a904290ba22f685e33b0e47';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

async function fetchWeather(city) {
    const weatherResponse = await axios.get(URL, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric'  // Celsius
        }
    });

    return weatherResponse.data;
}

async function fetchForecast(city) {
    const forecastResponse = await axios.get(FORECAST_URL, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
        }
    });

    return forecastResponse.data;
}

module.exports = { fetchWeather, fetchForecast };
