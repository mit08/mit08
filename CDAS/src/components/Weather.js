import React, { useState, useEffect } from 'react';
import "../css/cardback.css"
function App() {
    const [location, setLocation] = useState('');
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');
    const [humidity, sethumidity] = useState('');
    const [pressure, setpressure ] = useState('');
    const [visibility, setvisibility ] = useState('');
    const [wind_speed, setwind_speed ] = useState('');
    const [city, setcity ] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9aa4ae989e949e6681c74fe42c4d4490`;
                let tp = await fetch(url);
                let data = await tp.json()
                console.log("data", data);
                setTemperature((data.main.temp-273.15).toFixed(2));
                setDescription(data.weather[0].description);
                sethumidity(data.main.humidity);
                setpressure(data.main.pressure);
                setvisibility(data.visibility);
                setwind_speed(data.wind.speed);
                setcity(data.name);
            
            
                 console.log(location);
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
            <h1>Weather Information</h1>
            <form>
                <label>
                    Enter Location :
                    <input type="text" value={location} onChange={handleLocationChange} />
                </label>
            </form>

            
                <div className="card bgnew shadow-sm" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <p className="card-text">
                            Temperature: {temperature} °C <br/>
                            Description: {description}<br/>
                            humidity: {humidity} <br/>
                            pressure: {pressure}<br/> 
                            visibility: {visibility} <br/>
                            wind speed: {wind_speed} <br/>
                            city: {city} 
                           
                        </p>
                    </div>
                </div>
            
        </div>
    );
}

export default App;