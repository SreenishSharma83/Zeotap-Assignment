# Real-Time Weather Monitoring System

## Overview

This application is a real-time data processing system designed to monitor weather conditions and provide summarized insights using rollups and aggregates. It utilizes data from the [OpenWeatherMap API](https://openweathermap.org/) and is built using Node.js, Express, and React.

The system continuously retrieves weather data for major metros in India, processes the data, and provides daily summaries and alerts based on user-defined thresholds.

## Features

- **Real-Time Data Retrieval**: Continuously fetches weather data from the OpenWeatherMap API every configurable interval (default: every 5 minutes).
- **Daily Weather Summary**: Calculates and stores daily aggregates including:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition
- **User-Configurable Alerts**: Allows users to set thresholds for temperature and specific weather conditions. Alerts are triggered if conditions are met.
- **Visualizations**: Displays daily weather summaries and trends using charts.
- **Responsive Design**: User-friendly interface optimized for various screen sizes.

## Technologies Used

- **Frontend**: React, Axios, Bootstrap, Chart.js
- **Backend**: Node.js, Express, Mongoose, Axios
- **Database**: MongoDB
- **Development Tools**: npm, dotenv

## File Structure

```
weather-monitoring/
│
├── client/                    # Frontend application
│   ├── public/                # Public files
│   ├── src/                   # Source files
│   │   ├── components/        # React components
│   │   ├── services/          # API service functions
│   │   ├── App.js             # Main application component
│   │   └── index.js           # Entry point for React app
│   └── package.json           # Client dependencies
│
├── server/                    # Backend application
│   ├── models/                # Mongoose models
│   ├── routes/                # Express routes
│   ├── controllers/           # Controller functions
│   ├── utils/                 # Utility functions
│   ├── config/                # Configuration files
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point for the server
│   └── package.json           # Server dependencies
│
├── README.md                  # Project documentation
└── .gitignore                 # Ignored files
```

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account.
- An API key from OpenWeatherMap.

### Clone the Repository

```bash
git clone https://github.com/sreenishsharma83/Zeotap-Assignment.git
cd Zeotap-Assignment/weather-monitoring
```

### Setup the Backend

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install server dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and configure the following:

    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/weatherMonitoring
    OPENWEATHER_API_KEY=your_api_key_here
    PORT=5000
    ```

4. Start the server:

    ```bash
    node server.js
    ```

### Setup the Frontend

1. Navigate to the client directory:

    ```bash
    cd ../client
    ```

2. Install client dependencies:

    ```bash
    npm install
    ```

3. Start the client application:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. The application will automatically fetch and display the latest weather data for the specified metros.
3. Set user-configurable thresholds for alerts and monitor the weather conditions in real-time.
4. Visualize daily summaries and historical trends through interactive charts.

## Testing

1. Ensure that the server connects to the OpenWeatherMap API using a valid API key.
2. Verify that the system retrieves and processes weather data correctly.
3. Check that the temperature conversions from Kelvin to Celsius are accurate.
4. Validate that daily weather summaries are calculated correctly, including averages and dominant conditions.
5. Test the alerting system to ensure alerts are triggered appropriately.

## Acknowledgments

- Thanks to the OpenWeatherMap API for providing weather data.
- Special thanks to the contributors and resources that made this project possible.

