import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        const apiKey = "f8c7d633b3f5cc87f4b09c98ed84d16a";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching the weather data', error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your location"value={location} onChange={(e) => setLocation(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            {weatherData && (
                <div>
                    <p>Place: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}kmph</p>
                    <p>Weather Condition: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
