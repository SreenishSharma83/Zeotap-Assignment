import React from 'react';
import WeatherChart from './components/WeatherChart';
import WeatherAlerts from './components/WeatherAlerts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <h1 className="mt-5">Weather Monitoring System</h1>
            <WeatherAlerts />
            <WeatherChart />
        </div>
    );
}

export default App;
