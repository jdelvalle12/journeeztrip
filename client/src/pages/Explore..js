import { useEffect } from 'react';
import Mapbox from 'mapbox-gl';
import { Form, FormControl, Button } from 'react-bootstrap'; // importing search bar components from react-bootstrap
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, useMutation } from '@apollo/client';
import { GET_LOCATIONS, GET_LODGINGS, ADD_LOCATION, ADD_LODGING } from './queries';
import React from 'react';

// Initialize Apollo client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function Explore() {
  // const [locations, setLocations] = useState([]);
  // const [lodging, setLodging] = useState([]);
  // const [searchValue, setSearchValue] = useState('');
  // const [attractions, setAttractions] = useState([]);
  // const [eateries, setEateries] = useState([]);
  // const [lodgingSearchValue, setLodgingSearchValue] = useState('');
  // const [attractionsSearchValue, setAttractionsSearchValue] = useState('');
  // const [eateriesSearchValue, setEateriesSearchValue] = useState('');
  // const [locationsSearchValue, setLocationsSearchValue] = useState('');
  
  // Define queries and mutations
  const { loading: locationsLoading, error: locationsError, data: locationsData } = useQuery(GET_LOCATIONS);
  // const { loading: lodgingLoading, error: lodgingError, data: lodgingData } = useQuery(GET_LODGINGS);
  // const [addLocation] = useMutation(ADD_LOCATION);
  // const [addLodging] = useMutation(ADD_LODGING);
  
  useEffect(() => {
    // // Fetch data from APIs
    // fetch('/api/locations')
    //   .then(response => response.json())
    //   .then(data => setLocations(data))
    //   .catch(error => console.error(error));
    
    // fetch('/api/lodging')
    //   .then(response => response.json())
    //   .then(data => setLodging(data))
    //   .catch(error => console.error(error));
    
    // fetch('/api/attractions')
    //   .then(response => response.json())
    //   .then(data => setAttractions(data))
    //   .catch(error => console.error(error));
    
    // fetch('/api/eateries')
    //   .then(response => response.json())
    //   .then(data => setEateries(data))
    //   .catch(error => console.error(error));
    
    // Initialize Mapbox map
    Mapbox.accessToken = `pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow`;
    const map = new Mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-81.3, 28.5],
      zoom: 9
    });
    
//  // Add location markers to map
//  locations.forEach(location => {
//   new Mapbox.Marker({color: 'orange'})
//     .setLngLat(location.coordinates)
//     .addTo(map);
// });

// // Add lodging markers to map
// lodging.forEach(lodge => {
//   new Mapbox.Marker({color: 'red'})
//     .setLngLat(lodge.coordinates)
//     .addTo(map);
// });

// // Add attraction markers to map
// attractions.forEach(attraction => {
//   new Mapbox.Marker({color: 'blue'})
//     .setLngLat(attraction.coordinates)
//     .addTo(map);
// });

// // Add eatery markers to map
// eateries.forEach(eatery => {
//   new Mapbox.Marker({color: 'green'})
//     .setLngLat(eatery.coordinates)
//     .addTo(map);
// });
    
//     // Cleanup
//     return () => {
//       map.remove();
//     }
//   }, [locations, lodging, attractions, eateries]);

// Add markers for each location and lodging
if (locationsData && lodgingData) {
  const locationsMarkers = locationsData.locations.map((location) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [location.longitude, location.latitude]
      },
      properties: {
        title: location.name,
        description: location.description,
        icon: 'marker'
      }
    }
  });
  const lodgingMarkers = lodgingData.lodgings.map((lodging) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [lodging.longitude, lodging.latitude]
      },
      properties: {
        title: lodging.name,
        description: lodging.description,
        icon: 'lodging'
      }
    }
  });
  map.on('load', function () {
    map.addSource('locations', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: locationsMarkers
      }
    });
    map.addLayer({
      id: 'locations',
      type: 'symbol',
      source: 'locations',
      layout: {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
      }
    });
    map.addSource('lodging', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: lodgingMarkers
      }
    });
    map.addLayer({
      id: 'lodging',
      type: 'symbol',
      source: 'lodging',
      layout: {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
      }
    });
  });
}
}, [locationsData, lodgingData]);
  
//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     const pk = 'pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow';
  
//     document.addEventListener('load', () => {

//     const searchButton = document.getElementById('searchButton');
//     const searchInput = document.getElementById('searchInput');

//     searchButton.addEventListener('click', () => {
//     const searchValue = searchInput.value;

//     // Use the Mapbox Geocoding API to search for places and get their coordinates
//     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${pk}`)
//       .then(response => response.json())
//       .then(data => {
//         // Get the coordinates of the first result
//         const coordinates = data.features[0].geometry.coordinates;
        
//         // Center the map on the coordinates
//         map.setCenter(coordinates);
        
//         new Mapbox.Marker({color: 'black'})
//         .setLngLat(coordinates)
//         .addTo(map);
//       })
//       .catch(error => console.error(error));
//     });
//   });
// } 
 
// Handle search input
const handleSearch = (e) => {
  setSearchValue(e.target.value);
  }
  
  // Handle add location form submit
  // const handleAddLocation = (e) => {
  // e.preventDefault();
  // const name = e.target.name.value;
  // const description = e.target.description.value;
  // const latitude = e.target.latitude.value;
  // const longitude = e.target.longitude.value;
  // addLocation({ variables: { name, description, latitude, longitude } });
  // e.target.reset();
  // }
  
  // // Handle add lodging form submit
  // const handleAddLodging = (e) => {
  // e.preventDefault();
  // const name = e.target.name.value;
  // const description = e.target.description.value;
  // const latitude = e.target.latitude.value;
  // const longitude = e.target.longitude.value;
  // const locationId = e.target.locationId.value;
  // addLodging({ variables: { name, description, latitude, longitude, locationId } });
  // e.target.reset();
  // }
  
  return (
  <ApolloProvider client={client}>
    <div>
      <div id="map" style={{ height: '600px' }} />
        <div className="mt-4">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchValue} onChange={handleSearch} />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="row mt-4">
        <div className="col-md-6">
          <h2>Locations</h2>
            {locationsLoading ? (
          <p>Loading locations...</p>
          ) : locationsError ? (
          <p>Error loading locations</p>
          ) : (
            <ul>
            {locationsData.locations.map((location) => (
              <li key={location.id}>{location.name}</li>
            ))}
          </ul>
           )}
          </div>
      </div>
    </div>
    </ApolloProvider>
  );
}

export default Explore;