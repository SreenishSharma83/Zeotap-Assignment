import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../services/weatherService';

const WeatherAlerts = () => {
    const [alert, setAlert] = useState('');

    useEffect(() => {
        const monitorWeather = async () => {
            const currentWeather = await getCurrentWeather();
            if (currentWeather.maxTemp > 35) {
                setAlert('High temperature alert! Stay hydrated!');
            } else {
                setAlert('');
            }
        };

        const intervalId = setInterval(monitorWeather, 60000); // Check every minute
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div>
            {alert && <div className="alert alert-warning">{alert}</div>}
        </div>
    );
};

export default WeatherAlerts;
