const axios = require('axios');
const Weather = require('../models/Weather');

const API_KEY = process.env.OPENWEATHER_API_KEY;
const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

const fetchWeatherData = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};

const calculateDailySummary = (weatherData) => {
    const dailySummary = {
        averageTemp: 0,
        maxTemp: -Infinity,
        minTemp: Infinity,
        conditionCounts: {},
    };

    weatherData.forEach(data => {
        const { main, temp } = data;
        dailySummary.averageTemp += temp;
        dailySummary.maxTemp = Math.max(dailySummary.maxTemp, temp);
        dailySummary.minTemp = Math.min(dailySummary.minTemp, temp);
        
        dailySummary.conditionCounts[main] = (dailySummary.conditionCounts[main] || 0) + 1;
    });

    dailySummary.averageTemp /= weatherData.length;
    dailySummary.dominantCondition = Object.keys(dailySummary.conditionCounts).reduce((a, b) => 
        dailySummary.conditionCounts[a] > dailySummary.conditionCounts[b] ? a : b
    );

    return dailySummary;
};

const getWeatherData = async (req, res) => {
    try {
        const weatherDataPromises = cities.map(fetchWeatherData);
        const weatherData = await Promise.all(weatherDataPromises);
        const dailySummary = calculateDailySummary(weatherData);

        // Store in the database
        const weatherRecord = new Weather({
            date: new Date(),
            averageTemp: dailySummary.averageTemp,
            maxTemp: dailySummary.maxTemp,
            minTemp: dailySummary.minTemp,
            dominantCondition: dailySummary.dominantCondition,
        });

        await weatherRecord.save();
        res.status(200).json(dailySummary);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching weather data' });
    }
};

const getDailySummary = async (req, res) => {
    try {
        const summaries = await Weather.find({});
        res.status(200).json(summaries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching daily summaries' });
    }
};

module.exports = { getWeatherData, getDailySummary };
