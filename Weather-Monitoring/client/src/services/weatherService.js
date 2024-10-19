import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weather';

export const getCurrentWeather = async () => {
    const response = await axios.get(`${API_URL}/current`);
    return response.data;
};

export const getDailySummary = async () => {
    const response = await axios.get(`${API_URL}/summary`);
    return response.data;
};
