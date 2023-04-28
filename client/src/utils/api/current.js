import fetch from 'node-fetch';


export default async function handler(req, res) {
    const { latitude, longitude } = req.query;
    const API_KEY = "49df163cf17140efac2ee29ad389b959";
    const currentWeatherAPI = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}`;

    const response = await fetch(currentWeatherAPI);
    const data = await response.json();
  
    res.json(data);
  }