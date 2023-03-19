import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherStackApiKey = '695b40b10919df8b82d0c08307495137';
const WeatherStackApiUrl = 'http://api.weatherstack.com/current';

function App() {
    const [location, setLocation] = useState('');
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(WeatherStackApiUrl, {
                    params: {
                        access_key: WeatherStackApiKey,
                        query: location,
                    },
                });
                const data = response.data;
                setTemperature(data.current.temperature);
                setDescription(data.current.weather_descriptions[0]);
            } catch (error) {
                console.log(error);
            }
        };

        if (location) {
            fetchWeatherData();
        }
    }, [location]);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form>
                <label>
                    Location:
                    <input type="text" value={location} onChange={handleLocationChange} />
                </label>
            </form>

            {temperature && (
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <p className="card-text">
                            <p>Temperature: {temperature} °C</p>
                            <p>Description: {description}</p>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
