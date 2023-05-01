import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';

const API_KEY = '49df163cf17140efac2ee29ad389b959'; // replace with your actual API key


export async function getCurrentWeather(city) {
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&units=imperial`;
  const response = await axios.get(url);
  return response.data.data[0];
}

export async function getWeatherForecast(city, date) {
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}&units=imperial&days=7`;
  const response = await axios.get(url);
  return response.data.data;
}

export default function Weather() {
  const [city, setCity] = useState(''); // the current city
  const [currentWeather, setCurrentWeather] = useState(null); // the current weather data
  const [forecast, setForecast] = useState(null); // the weather forecast data
  

  useEffect(() => {
    // get weather data from localStorage if it exists
    const savedWeather = JSON.parse(localStorage.getItem('weatherData'));
    if (savedWeather) {
      setCurrentWeather(savedWeather.currentWeather);
      setForecast(savedWeather.forecast);
    }
  }, []);
  
  useEffect(() => {
    async function fetchData() {
      const currentWeatherData = await getCurrentWeather(city);
      setCurrentWeather(currentWeatherData);
      
      // const forecastData = await getWeatherForecast(city);
      // setForecast(forecastData);
      
      
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const forecastData = await getWeatherForecast(city, currentDate.toISOString().slice(0,7));
        setForecast(forecastData);
      
      
      // save weather data to localStorage
      const weatherData = {
        city: city,
        currentWeather: currentWeatherData,
        forecast: forecastData
      };
      localStorage.setItem('weatherData', JSON.stringify(weatherData));
    }
    
    if (city) {
      fetchData();
      const intervalId = setInterval(() => {
        fetchData();
      }, 21600000); // update every 6hrs
      
      return () => clearInterval(intervalId);
    }
    }, [city]);
 
    
    function handleSearch(event) {
      event.preventDefault();
      const newCity = event.target.elements.city.value.trim();
      setCity(newCity);
    }
    
    return (
    <div className="weather-dashboard-card">
    <div className='weather-dashboard'>
      <div className='search-container'>
      <form onSubmit={handleSearch}>
        <label>
          Search city:
          <input type="text" name="city" className='search-input' />
        </label>
        <button type="submit" className='search-button' >Search</button>
      </form>
      </div>

      {currentWeather && (
        <div className='current-weather-container'>
          <h2 className='text-2xl font-bold text-blue-800'>Current weather in {city}:</h2>
          <div className='current-weather-details'>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png`}
            alt={currentWeather.weather.description}
            width={64} // set the width to the actual width of the image
            height={64} // set the height to the actual height of the image
          />
          <div>
          <p>Temperature: {currentWeather.temp} °F</p>
          <p>Conditions: {currentWeather.weather.description}</p>
          <p>Wind: {currentWeather.wind_spd} mph</p>
          <p>Humidity: {currentWeather.rh}%</p>
        </div>
        </div>
        </div>
      )}
      {forecast && (
        <div className='forecast-container'>
          <h3 className='text-3xl font-bold text-blue-800'>Forecast</h3>
          <h2>{city}</h2>
          <ul className='forecast-list'>
            {forecast.map((item) => (
              <li key={item.datetime} className='forecast-item'>
                <p className='forecast-date'> {new Date(item.datetime).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                <div className='forecast-details'>
                <Image
                  src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                  alt={item.weather.description}
                  width={64} // set the width to the actual width of the image
                  height={64} // set the height to the actual height of the image
                />
                </div>
                <p className='forecast-temperature'>Temperature: {item.temp} °F</p>
                <p className='forecast-conditions'>Conditions: {item.weather.description}</p>
                <p>Wind: {item.wind_spd} mph</p>
                <p>Humidity: {item.rh}%</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
   </div>
  );
}