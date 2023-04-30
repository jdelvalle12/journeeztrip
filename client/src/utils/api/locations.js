// pages/api/locations.js
import axiosInstance from '../api/axiosInstance';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${q}.json?access_token=${pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow}`;

    axiosInstance.get('../locations')
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  } else {
    res.status(405).end();
  }
}
