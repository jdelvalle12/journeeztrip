import fetch from 'node-fetch';


export default async function handler(req, res) {
    const { latitude, longitude } = req.query;
    const API_KEY = "49df163cf17140efac2ee29ad389b959";
    const forecastAPI = `https://api.weatherbit.io/v2.0/forecast?lat=${latitude}&lon=${longitude}&key=${API_KEY}`;

    const response = await fetch(forecastAPI);
    const data = await response.json();
  
    res.json(data);
  }