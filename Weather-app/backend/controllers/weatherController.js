const Weather = require('../models/Weather');
const { fetchWeather, fetchForecast } = require('../services/weatherService');

function calculateDailySummary(weatherList) {
    const temps = weatherList.map(data => data.temp);
    const avg_temp = temps.reduce((acc, temp) => acc + temp, 0) / temps.length;
    const max_temp = Math.max(...temps);
    const min_temp = Math.min(...temps);
    const dominant_condition = weatherList.map(data => data.main)
        .sort((a, b) => weatherList.filter(v => v === a).length - weatherList.filter(v => v === b).length).pop();

    return { avg_temp, max_temp, min_temp, dominant_condition };
}

async function storeWeatherDataForMultipleCities(req, res) {
    const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
    const weatherData = [];

    for (let city of cities) {
        const currentWeather = await fetchWeather(city);  // Fetch current weather
        const forecastData = await fetchForecast(city);   // Fetch forecast data

        const weatherSummary = calculateDailySummary(forecastData.list.map(item => ({
            temp: item.main.temp,
            main: item.weather[0].main
        })));

        const weatherDocument = new Weather({
            city: city,
            date: new Date(),  // Save current timestamp
            avg_temp: weatherSummary.avg_temp,
            max_temp: weatherSummary.max_temp,
            min_temp: weatherSummary.min_temp,
            dominant_condition: weatherSummary.dominant_condition,
            humidity: currentWeather.main.humidity,
            wind_speed: currentWeather.wind.speed,
            curr_temp: currentWeather.main.temp,
            feels_like: currentWeather.main.feels_like,   // Add "feels like" temp
            forecast_summary: forecastData.list[0].weather[0].description
        });

        // Save the weather data to MongoDB
        const savedWeather = await weatherDocument.save();

        // Add the saved weather data to the array
        weatherData.push(savedWeather);
    }

    // Return the weather data for all cities in the response
    res.json(weatherData);
}

module.exports = { storeWeatherDataForMultipleCities };