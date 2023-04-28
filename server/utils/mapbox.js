// mapbox.js

const axios = require('axios');

const MAPBOX_API_ENDPOINT = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

// Export function to retrieve latitude and longitude of a location
async function getLatLong(location) {
  // Construct URL for API request
  const url = `${MAPBOX_API_ENDPOINT}${location}.json?access_token=${pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow}`;

  try {
    // Make API request and retrieve response
    const response = await axios.get(url);

    // Parse response to extract latitude and longitude
    const latitude = response.data.features[0].center[1];
    const longitude = response.data.features[0].center[0];

    // Return latitude and longitude
    return { latitude, longitude };
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getLatLong };