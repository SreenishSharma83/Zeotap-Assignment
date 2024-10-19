const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    averageTemp: { type: Number, required: true },
    maxTemp: { type: Number, required: true },
    minTemp: { type: Number, required: true },
    dominantCondition: { type: String, required: true },
});

module.exports = mongoose.model('Weather', WeatherSchema);
