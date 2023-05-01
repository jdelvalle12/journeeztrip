import { useState, useEffect } from 'react';
import Mapbox from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Eiffel from '../images/eiffeltower.jpg';
import Caribbean from '../images/Caribbean.jpg';
import Madrid from '../images/Madrid.jpg';
// import { Form, FormControl, Button } from 'react-bootstrap'; // importing search bar components from react-bootstrap
import InterestCard from '../components/AreasInterest/InterestCard';

const areasOfInterest = [
  {
    id: 1,
    name: 'Eiffel Tower',
    image: Eiffel,
    description: 'Explore the most iconic.'
  },
  {
    id: 2,
    name: 'Beaches',
    image: Caribbean,
    description: 'Relax on sandy beaches and soak up the sun.'
  },
  {
    id: 3,
    name: 'City',
    image: Madrid,
    description: 'Discover the hustle and bustle of Madrid.'
  },
];

export default function Explore() {
  const [locations, setLocations] = useState([]);
  // const [searchValue, setSearchValue] = useState('');
  const [marker, setMarker] = useState(null);
  // let map;
  const longitude = -81.3;
  const latitude = 28.5;

  useEffect(() => {
    // Fetch locations data from API
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error(error));
    
    // Initialize Mapbox map
    Mapbox.accessToken = `pk.eyJ1IjoiamRlbHZhbGxlMTIiLCJhIjoiY2xnc2YyZG92MW50MTNqbWs1enV6a3gyOSJ9.NyHRU66sRujiLrEwi7AXow`;
    const map = new Mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 9
    });
    
    // Add location markers to map
    locations.forEach(location => {
      new Mapbox.Marker()
        .setLngLat(location.coordinates)
        .addTo(map);
    });

    // Initialize geocoder
  const geocoder = new MapboxGeocoder({
    accessToken: Mapbox.accessToken,
    mapboxgl: Mapbox,
    marker: false, // disable default marker
    // Custom stylesheet
  render: function(item) {
    return '<div class="mapboxgl-ctrl-geocoder--suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title">' + item.place_name + '</div></div>';
  },
  // Custom CSS
  theme: 'mapboxgl-ctrl-light mapboxgl-ctrl-geocoder--theme my-custom-geocoder-theme',
  });

  // Create a new marker
// const marker = new mapboxgl.Marker()
// .setLngLat([longitude, latitude])
// .addTo(map);

  // Add geocoder to map
  map.addControl(geocoder);

 // Listen for geocoder result event
 geocoder.on('result', (event) => {
  // Remove existing marker
  if (marker) {
    marker.remove();
  }
  // Create new marker at the location of the searched place
  const newMarker = new mapboxgl.Marker()
    .setLngLat(event.result.center)
    .addTo(map);
  setMarker(newMarker);
  // Center the map on the searched place
  map.setCenter(event.result.center);
});
    
    // Cleanup
    return () => {
      map.remove();
    }
  }, [locations, longitude, marker]);

  // const handleSearch = () => {
  //   // Fetch location data from API based on user's search value
  //   fetch(`/api/locations?q=${searchValue}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Update map view to center on the first matching location
  //       const location = data[0];
  //       if (location) {
  //         map.setCenter(location.coordinates);
  //       }
  //     })
  //     .catch(error => console.error(error));
  // };


  return (
    <div>
      <h1 className='explore text-4xl font-bold text-blue-800'>Explore</h1>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        <Button className='search-box' variant="outline-success" onClick={handleSearch}>Search</Button>
      </Form> */}
      <div id="map" style={{ height: '500px' , width: '1200px' }}></div>
      <h2 className=' text-4xl font-bold text-blue-800'>Areas of Interest</h2>
      <div className='interest-cards-container'>
        {areasOfInterest.map((area) => (
          <InterestCard
            key={area.id}
            name={area.name}
            image={area.image}
            description={area.description}
          />
        ))}
      </div>
    </div>
  );
}