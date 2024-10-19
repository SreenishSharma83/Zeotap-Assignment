const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: String,
    date: Date,
    avg_temp: Number,
    max_temp: Number,
    min_temp: Number,
    curr_temp: Number,
    dominant_condition: String,
    humidity: Number,
    wind_speed: Number,
    feels_like: Number,
    forecast_summary: String,
});

module.exports = mongoose.model('Weather', weatherSchema);