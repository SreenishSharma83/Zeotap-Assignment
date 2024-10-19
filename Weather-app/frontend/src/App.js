import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState([]);
    const [unit, setUnit] = useState('Celsius'); // State to track temperature unit
    const [threshold, setThreshold] = useState(30); // Default threshold in Celsius
    const [alerts, setAlerts] = useState({}); // To track cities with consecutive high temps
    const [newThreshold, setNewThreshold] = useState(0); // Temporary state for the input box
    const [hasPreviousUpdate, setHasPreviousUpdate] = useState(false); // Track if we have previous data to compare

    useEffect(() => {
        const fetchWeatherData = () => {
            axios.get('http://localhost:5000/api/weather')
                .then(response => {
                    checkForAlerts(response.data); // Check alerts based on current data
                    setWeatherData(response.data); // Store fetched weather data
                    setHasPreviousUpdate(true); // Mark that we now have at least one update
                })
                .catch(error => console.log(error));
        };

        // Fetch data initially
        fetchWeatherData();

        // Set interval to fetch every 5 minutes
        const intervalId = setInterval(fetchWeatherData, 5 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Toggle between Celsius and Kelvin
    const toggleUnit = () => {
        // Convert the threshold when toggling the temperature unit
        if (unit === 'Celsius') {
            setThreshold((prevThreshold) => (prevThreshold + 273.15)); // Convert Celsius to Kelvin
            setUnit('Kelvin');
        } else {
            setThreshold((prevThreshold) => (prevThreshold - 273.15)); // Convert Kelvin to Celsius
            setUnit('Celsius');
        }
    };

    // Check if "feels_like" temperature exceeds the threshold for two consecutive updates
    const checkForAlerts = (newWeatherData) => {
        let citiesWithAlerts = []; // Array to store cities that trigger alerts
        const newAlerts = { ...alerts }; // Copy the existing alerts state

        // If there's no previous update, don't check for consecutive values yet
        if (!hasPreviousUpdate) {
            // Initialize alerts tracking with first update
            newWeatherData.forEach(weather => {
                const city = weather.city;
                newAlerts[city] = {
                    consecutiveHighs: 0, // Start at 0 since this is the first update
                };
            });
            setAlerts(newAlerts); // Store the initial state
            return; // Skip alert checks on the first update
        }

        // For each city in the new data
        newWeatherData.forEach((weather) => {
            const currCelsius = weather.curr_temp;
            const city = weather.city;

            // Check if the city already exists in the alerts state
            if (!newAlerts[city]) {
                newAlerts[city] = {
                    consecutiveHighs: 0, // Initialize to 0 if not tracked yet
                };
            }

            // Check if "feels_like" exceeds threshold (always check in Celsius)
            const tempThresholdInCelsius = unit === 'Kelvin' ? threshold - 273.15 : threshold;
            if (currCelsius > tempThresholdInCelsius) {
                newAlerts[city].consecutiveHighs += 1; // Increment consecutive high count
            } else {
                newAlerts[city].consecutiveHighs = 0; // Reset if below threshold
            }

            // If exceeded twice consecutively, add the city to the alerts list
            if (newAlerts[city].consecutiveHighs === 2) {
                citiesWithAlerts.push(city);
            }
        });

        // If there are cities that triggered alerts, show them in a single alert
        if (citiesWithAlerts.length > 0) {
            alert(`Warning! The current temperature has exceeded the threshold in the following cities: ${citiesWithAlerts.join(', ')}`);
        }

        setAlerts(newAlerts); // Update the alerts state with new values
    };

    // Update threshold when button is clicked and recheck weather data
    const handleThresholdUpdate = () => {
        setThreshold(newThreshold); // Update the threshold
        setAlerts({}); // Clear previous alert data when updating the threshold
        setHasPreviousUpdate(false); // Reset to skip consecutive checks after threshold change
        checkForAlerts(weatherData); // Re-check weather data based on the new threshold, only considering current data
        setNewThreshold(0); // Reset input box to zero after updating the threshold
    };

    return (
        <div className="App">
            <h1>Weather Monitoring System</h1>

            {/* Toggle button for Celsius/Kelvin */}
            <button onClick={toggleUnit}>
                Show in {unit === 'Celsius' ? 'Kelvin' : 'Celsius'}
            </button>

            {/* Display current threshold in the selected unit */}
            <div>
                <p>Current Threshold: {threshold.toFixed(2)} °{unit}</p>
            </div>

            {/* Input for changing the threshold */}
            <div>
                <label>Set New Threshold (°{unit}): </label>
                <input
                    type="number"
                    value={newThreshold}
                    onChange={(e) => setNewThreshold(Number(e.target.value))}
                />
                <button onClick={handleThresholdUpdate}>Update Threshold</button>
            </div>
            <div className="weather-container">
            {weatherData.length > 0 ? (
                weatherData.map(weather => (
                    <WeatherCard key={weather._id} weather={weather} unit={unit} />
                ))
            ) : (
                <p>No weather data available.</p>
            )}
            </div>
        </div>
    );
}

export default App;
