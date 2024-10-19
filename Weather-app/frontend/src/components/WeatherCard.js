import React from 'react';

// Function to format timestamp
const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Converts to a readable format (local date and time)
};

function WeatherCard({ weather, unit }) {
    // Convert temperature to Kelvin if needed
    const convertTemperature = (tempCelsius) => {
        return unit === 'Kelvin' ? (tempCelsius + 273.15).toFixed(2) : tempCelsius.toFixed(2);
    };

    // Use weather condition icon based on dominant condition
    const getWeatherIcon = (condition) => {
        switch (condition.toLowerCase()) {
            case 'clear':
                return '☀️'; // Replace with image/icon URL for clear weather
            case 'rain':
                return '🌧️'; // Replace with image/icon URL for rain
            case 'clouds':
                return '☁️'; // Replace with image/icon URL for clouds
            default:
                return '🌤️'; // Default weather icon
        }
    };

    return (
        <div className="weather-card">
            <h2>{weather.city}</h2>
            <p className="temperature">{convertTemperature(weather.curr_temp)}°{unit}</p>
            <p>Dominant Condition: {weather.dominant_condition}</p>
            <p>Feels Like: {convertTemperature(weather.feels_like)}°{unit}</p>
            <p>Max Temp: {convertTemperature(weather.max_temp)}°{unit}</p>
            <p>Min Temp: {convertTemperature(weather.min_temp)}°{unit}</p>
            <p>Avg Temp: {convertTemperature(weather.avg_temp)}°{unit}</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.wind_speed} m/s</p>
            <p>Data fetched at: {formatDateTime(weather.date)}</p>
        </div>
    );
}

export default WeatherCard;
