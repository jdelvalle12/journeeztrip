import { useState, useEffect } from 'react';
import Mapbox from 'mapbox-gl';
import { Form, FormControl, Button } from 'react-bootstrap'; // importing search bar components from react-bootstrap

//  const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
//   resolvers: resolvers,
//   typeDefs: typeDefs,
// });



export default function Explore() {
  const [locations, setLocations] = useState([]);
  const [lodging, setLodging] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [eateries, setEateries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [lodgingSearchValue, setLodgingSearchValue] = useState('');
  // const [attractionsSearchValue, setAttractionsSearchValue] = useState('');
  // const [eateriesSearchValue, setEateriesSearchValue] = useState('');
  // const [locationsSearchValue, setLocationsSearchValue] = useState('');

  useEffect(() => {
    // Fetch data from APIs
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error(error));
      
    fetch('/api/lodging')
      .then(response => response.json())
      .then(data => setLodging(data))
      .catch(error => console.error(error));
      
    fetch('/api/attractions')
      .then(response => response.json())
      .then(data => setAttractions(data))
      .catch(error => console.error(error));
      
    fetch('/api/eateries')
      .then(response => response.json())
      .then(data => setEateries(data))
      .catch(error => console.error(error));
    
    // Initialize Mapbox map
    Mapbox.accessToken = `pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow`;
    const map = new Mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-81.3, 28.5],
      zoom: 9
    });
    
 // Add location markers to map
 locations.forEach(location => {
  new Mapbox.Marker({color: 'orange'})
    .setLngLat(location.coordinates)
    .addTo(map);
});

// Add lodging markers to map
lodging.forEach(lodge => {
  new Mapbox.Marker({color: 'red'})
    .setLngLat(lodge.coordinates)
    .addTo(map);
});

// Add attraction markers to map
attractions.forEach(attraction => {
  new Mapbox.Marker({color: 'blue'})
    .setLngLat(attraction.coordinates)
    .addTo(map);
});

// Add eatery markers to map
eateries.forEach(eatery => {
  new Mapbox.Marker({color: 'green'})
    .setLngLat(eatery.coordinates)
    .addTo(map);
});
    
    // Cleanup
    return () => {
      map.remove();
    }
  }, [locations, lodging, attractions, eateries]);

  // const handleSearch = () => {
  //   // Fetch location data from API based on user's search value
  //   Promise.all([
  //     fetch(`/api/locations?q=${searchValue}`),
  //     fetch(`/api/lodgings?q=${searchValue}`),
  //     fetch(`/api/attractions?q=${searchValue}`),
  //     fetch(`/api/eateries?q=${searchValue}`)
  //   ])
  //     .then(responses => Promise.all(responses.map(response => response.json())))
  //     .then(data => {
  //       // Combine all search results into a single array
  //       const searchResults = [...data[0], ...data[1], ...data[2], ...data[3]];
  
  //       // Update map view to center on the first matching location
  //       const location = searchResults[0];
  //       if (location) {
  //         map.setCenter(location.coordinates);
  //       }
  //     })
  //     .catch(error => console.error(error));
  // };
  
  const handleSearch = async (e) => {
    e.preventDefault();
    
    const pk = 'pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow';
  
    document.addEventListener('load', () => {

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value;

    // Use the Mapbox Geocoding API to search for places and get their coordinates
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${pk}`)
      .then(response => response.json())
      .then(data => {
        // Get the coordinates of the first result
        const coordinates = data.features[0].geometry.coordinates;
        
        // Center the map on the coordinates
        map.setCenter(coordinates);
        
        new Mapbox.Marker({color: 'black'})
        .setLngLat(coordinates)
        .addTo(map);
      })
      .catch(error => console.error(error));
    });
  });
} 
 
  // const handleLodgingSearch = () => {
  //   // Fetch lodging data from API based on user's search value
  //   fetch(`/api/lodging?q=${lodgingSearchValue}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Display lodging markers on map
  //       displayResultsOnMap(data);
  //     })
  //     .catch(error => console.error(error));
  // };

  // const handleAttractionsSearch = () => {
  //   // Fetch lodging data from API based on user's search value
  //   fetch(`/api/attractions?q=${attractionsSearchValue}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Display lodging markers on map
  //       displayResultsOnMap(data);
  //     })
  //     .catch(error => console.error(error));
  // };

  // const handleEateriesSearch = () => {
  //   // Fetch lodging data from API based on user's search value
  //   fetch(`/api/eateries?q=${eateriesSearchValue}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Display lodging markers on map
  //       displayResultsOnMap(data);
  //     })
  //     .catch(error => console.error(error));
  // };

  // const handleLocationsSearch = () => {
  //   // Fetch lodging data from API based on user's search value
  //   fetch(`/api/locations?q=${locationsSearchValue}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Display lodging markers on map
  //       displayResultsOnMap(data);
  //     })
  //     .catch(error => console.error(error));
  // };

  function displayResultsOnMap(results) {
    // Clear any existing markers from the map
    markerLayer.clearLayers();
  
    // Loop through each result and add a marker to the map
    results.forEach(result => {
      const { latitude, longitude } = result.location;
      const marker = L.marker([latitude, longitude]).addTo(markerLayer);
      marker.bindPopup(result.name);
    });
  }
  


  return (
    <div>
      <h1 className='explore text-5xl font-bold text-blue-800 mb-40'>Explore</h1>
      <div class="search-container">
      <Form inline>
        <FormControl className='map-search-box' type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        <Button className='map-search-button' variant="outline-success" onClick={handleSearch}>Search</Button>
      </Form>
      {/* <Form inline>
        <FormControl className='map-search-box' type="text" placeholder="Search lodging" value={lodgingSearchValue} onChange={e => setLodgingSearchValue(e.target.value)} />
        <Button className='map-search-button' variant="outline-success" onClick={handleLodgingSearch}>Search lodging</Button>
      </Form>
      <Form inline>
        <FormControl className='map-search-box' type="text" placeholder="Search attractions" value={attractionsSearchValue} onChange={e => setAttractionsSearchValue(e.target.value)} />
        <Button className='map-search-button' variant="outline-success" onClick={handleAttractionsSearch}>Search attractions</Button>
      </Form>
      <Form inline>
        <FormControl className='map-search-box' type="text" placeholder="Search eateries" value={eateriesSearchValue} onChange={e => setEateriesSearchValue(e.target.value)} />
        <Button className='map-search-button' variant="outline-success" onClick={handleEateriesSearch}>Search eateries</Button>
      </Form> */}
      </div>
      <div id="map" style={{ height: '500px', width: '80%' }}></div>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <h2>{location.name}</h2>
            <p>{location.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}