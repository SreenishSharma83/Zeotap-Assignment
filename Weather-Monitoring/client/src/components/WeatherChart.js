import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getDailySummary } from '../services/weatherService';

const WeatherChart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDailySummary();
            setDailyData(data);
        };
        fetchData();
    }, []);

    const data = {
        labels: dailyData.map(day => new Date(day.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Average Temperature (°C)',
                data: dailyData.map(day => day.averageTemp),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: 'Max Temperature (°C)',
                data: dailyData.map(day => day.maxTemp),
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
            {
                label: 'Min Temperature (°C)',
                data: dailyData.map(day => day.minTemp),
                borderColor: 'rgba(54,162,235,1)',
                fill: false,
            },
        ],
    };

    return <Line data={data} />;
};

export default WeatherChart;
