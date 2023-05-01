// pages/api/locations.js
import axios from 'axios';

export default async function handler(req, res) {
  const { q } = req.query;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${q}.json?access_token=${pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow}`;
  
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
