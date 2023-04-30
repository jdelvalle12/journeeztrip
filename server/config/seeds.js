const db = require('./connection');
const { getLatLong } = require('./utils/mapbox');
const { User, Location, Lodging, Attraction, Eatery, JournalEntry } = require('../models');
const mapbox = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mapbox({ accessToken: process.env.MAPBOX_ACCESS_TOKEN });

db.once('open', async () => {
  // delete existing data
  await Location.deleteMany();
  await Lodging.deleteMany();
  await Attraction.deleteMany();
  await Eatery.deleteMany();
  await JournalEntry.deleteMany();

  // Seed Locations
  const locationNames = await Location.insertMany([
    { name: 'Paris' },
    { name: 'London' },
    { name: 'Florence' },
    { name: 'Rome' },
    { name: 'Athens' }
  ]);

  const locationResponses = await Promise.all(
    locationNames.map(async (name) => {
      const response = await geocodingClient.forwardGeocode({
        query: name,
        limit: 1
      }).send();

      return response.body.features[0];
    })
  );

  const locations = await Location.insertMany(
    locationResponses.map((response) => {
      return {
        name: response.place_name,
        coordinates: response.center
      };
    })
  );

  console.log('locations seeded');

  
 // Seed Lodgings
 const lodgings = await Lodging.insertMany([
  {
    name: 'Hôtel Ritz Paris',
    description: '5-star luxury hotel located in the heart of Paris.',
    image: 'ritz-paris.jpg',
    rating: 4.8,
    location: locations[0]._id // Use the first location ID
  },
  {
    name: 'Hostel Generator',
    description: 'A vibrant and modern hostel located in the heart of Paris, just a short walk from Gare du Nord train station. The hostel features a range of shared and private rooms, all decorated with bright, contemporary furnishings and equipped with comfortable beds and modern amenities. A great option for travelers looking for an affordable and enjoyable stay in Paris.',
    image: 'hostel-generator.jpg',
    rating: 4.5,
    location: locations[0]._id
  },
    {
      name: 'The Ritz London',
      description: '5-star hotel located in Piccadilly, London.',
      image: 'ritz-london.jpg',
      rating: 4.5,
      location: locations[1]._id // Use the second location ID
    },
    {
      name: 'ibis London Canning Town',
      description: 'A modern hotel located in the bustling district of Canning Town, in East London. The hotel features contemporary guest rooms, designed with comfort and convenience in mind.',
      image: 'ibis-London-Canning-Town.jpg',
      rating: 4.5,
      location: locations[1]._id
    },
    {
      name: 'hu Norcenni Girasole village',
      description: 'a large, family-friendly holiday resort located in the picturesque hills of Tuscany, Italy. The resort features various types of accommodations including camping pitches, apartments, mobile homes and lodges. The facilities include multiple swimming pools, restaurants, bars, shops, sports courts, playgrounds, entertainment venues and a spa..',
      image: 'hu-Norcenni-Girasole-village.jpg',
      rating: 4.4,
      location: locations[2]._id // Use the second location ID
    },
    {
      name: 'Grand Hotel Baglioni',
      description: 'A luxury hotel located in the heart of Florence, just a few steps away from the Duomo and the main train station. The hotel features elegant rooms and suites, a rooftop restaurant with panoramic views of the city, a fitness center, and a conference center. It is a great option for those who want to stay in a central location and enjoy all that Florence has to offer.',
      image: 'grand-hotel-baglioni.jpg',
      rating: 4.4,
      location: locations[2]._id
    },
    {
      name: 'MEININGER Roma Termini',
      description: 'A budget hotel located in the heart of Rome, just a few minutes walk from the Termini train station. The hotel offers a range of comfortable and modern rooms, including dormitory rooms and private rooms with en-suite bathrooms. An ideal base for exploring all that Rome has to offer',
      image: 'meininger-roma-termini.jpg',
      rating: 4.4,
      location: locations[3]._id // Use the second location ID
    },
    {
      name: 'Hotel Artemide',
      description: 'Located in the heart of Rome, just a short walk from the Termini Station. The hotel features stylish and modern rooms, a rooftop restaurant and bar with panoramic views of the city, a spa, and a fitness center. It has received high ratings from guests for its comfortable accommodations and excellent service.',
      image: 'grand-hotel-baglioni.jpg',
      rating: 4.8,
      location: locations[3]._id
    },
    {
      name: 'MEININGER Roma Termini',
      description: 'A budget hotel located in the heart of Rome, just a few minutes walk from the Termini train station. The hotel offers a range of comfortable and modern rooms, including dormitory rooms and private rooms with en-suite bathrooms. An ideal base for exploring all that Rome has to offer',
      image: 'meininger-roma-termini.jpg',
      rating: 4.4,
      location: locations[3]._id // Use the second location ID
    },
    {
      name: 'Hotel Artemide',
      description: 'Located in the heart of Rome, just a short walk from the Termini Station. The hotel features stylish and modern rooms, a rooftop restaurant and bar with panoramic views of the city, a spa, and a fitness center. It has received high ratings from guests for its comfortable accommodations and excellent service.',
      image: 'grand-hotel-baglioni.jpg',
      rating: 4.8,
      location: locations[3]._id
    },
    {
      name: 'President Hotel Athens',
      description: 'A located in the heart of Athens, Greece. It offers comfortable and spacious rooms and suites, all equipped with modern amenities such as air conditioning, flat-screen TV, and free Wi-Fi. The hotel also features a rooftop swimming pool, a fitness center, and a restaurant serving Mediterranean and international cuisine. With its central location, guests can easily explore the nearby attractions such as the National Archaeological Museum and the Acropolis.',
      image: 'president-hotel-athens.jpg',
      rating: 4.1,
      location: locations[4]._id // Use the second location ID
    },
    {
      name: 'Grand Hyatt Athens',
      description: 'A luxury hotel located in the heart of the city, offering stylish rooms and suites, a rooftop restaurant with panoramic views, a rooftop bar, an outdoor pool, a fitness center, and a spa. The hotel is also conveniently located near major tourist attractions such as the Acropolis, the National Museum of Contemporary Art, and the Temple of Olympian Zeus.',
      image: 'grand-hyatt-athens.jpg',
      rating: 4.4,
      location: locations[4]._id
    },
]);


// Seed Attractions
const attractions = await Attraction.insertMany([
  {
    name: 'Eiffel Tower',
    description: 'Iconic tower in Paris, France.',
    image: 'eiffel-tower.jpg',
    price: 25,
    location: locations[0]._id // Use the first location ID
  },
  {
    name: 'Louvre Museum',
    description: 'The world\'s largest art museum and a historic monument in Paris, France.',
    image: 'louvre-museum.jpg',
    price: 17,
    location: locations[0]._id
  },
  {
    name: 'Big Ben',
    description: 'The nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London.',
    image: 'big-ben.jpg',
    price: 10,
    location: locations[1]._id // Use the second location ID
  },
  {
    name: 'Piccadilly Square',
    description: 'A popular destination for tourists and locals alike, and serves as a hub for shopping, dining, and entertainment in the city.',
    image: 'piccadilly-square.jpg',
    price: 0,
    location: locations[1]._id
  },
  {
    name: 'Florence Cathedral (Duomo)',
    description: 'A magnificent Gothic-style cathedral that dominates the city skyline. The cathedral is renowned for its elaborate façade, intricate mosaics, and stunning frescoes. Visitors can climb to the top of the dome for breathtaking views of the city.',
    image: 'florence-cathedral-(duomo).jpg',
    price: 28,
    location: locations[2]._id // Use the second location ID
  },
  {
    name: 'Ponte Vecchio',
    description: 'Known for its shops that are built along the bridge, mostly goldsmiths and jewelry shops, which have been there since the 16th century. It is a popular spot for tourists to visit and take in the scenic views of the Arno River and the city of Florence.',
    image: 'ponte-vecchio.jpg',
    price: 0,
    location: locations[2]._id
  },
  {
    name: 'Colosseum',
    description: 'A huge amphitheater built more than 2,000 years ago and was used for gladiatorial contests and public spectacles. It is one of the most visited tourist attractions in Rome and a symbol of the citys rich history.',
    image: 'colosseum.jpg',
    price: 16.50,
    location: locations[3]._id // Use the second location ID
  },
  {
    name: 'Vatican City',
    description: 'An independent city-state surrounded by the city of Rome and is the smallest country in the world. It is home to numerous art and architectural wonders, including St. Peters Basilica, the Sistine Chapel, and the Vatican Museums.',
    image: 'vatican-city.jpg',
    price: 17,
    location: locations[3]._id
  },
  {
    name: 'Acropolis ',
    description: 'This iconic hilltop citadel is home to some of the most famous landmarks in Athens, including the Parthenon, the Erechtheion, and the Temple of Athena Nike.',
    image: 'acropolis.jpg',
    price: 20,
    location: locations[4]._id // Use the second location ID
  },
  {
    name: 'Monastiraki Flea Market',
    description: 'This lively market is one of the best places to shop for souvenirs, antiques, and vintage clothing in Athens. It is located in the Monastiraki neighborhood, which is also known for its vibrant nightlife and street art.',
    image: 'monastiraki-flea-market.jpg',
    price: 0,
    location: locations[4]._id
  },
]);

// Seed Eateries
const eateries = await Eatery.insertMany([
  {
    name: 'Patisserie Yann Couvreur',
    description: 'A patisserie located in Paris, France, that offers a selection of high-quality pastries and desserts.',
    image: 'patisserie-yann-couvreur.jpg',
    rating: 4.1,
    price: 3,
    location: locations[0]._id
  },
  {
    name: 'L\'As du Fallafel',
    description: 'Falafel restaurant located in the Marais district of Paris.',
    image: 'l-as-du-fallafel.jpg',
    rating: 4.5,
    price: 15,
    location: locations[0]._id
  },
  {
    name: 'Dishoom',
    description: 'A popular Indian restaurant chain with multiple locations in London. They serve a variety of Indian dishes, including street food, grills, curries, and biryanis. The atmosphere is lively and the decor is inspired by the Irani cafes of Mumbai.',
    image: 'dishoom.jpg',
    rating: 4.5,
    price: 20,
    location: locations[1]._id
  },
  {
    name: 'The Ivy',
    description: 'A stylish restaurant serving modern British cuisine in a glamorous setting.',
    image: 'the-ivy.jpg',
    rating: 4.4,
    price: 40,
    location: locations[1]._id
  },
  {
    name: 'Trattoria Mario',
    description: 'Family-owned restaurant serving up delicious traditional Tuscan dishes at affordable prices. The menu changes daily depending on what s fresh and in season, but you can expect to find dishes like pappa al pomodoro (bread and tomato soup), bistecca alla fiorentina (Florentine steak), and homemade pasta.',
    image: 'trattoria-mario.jpg',
    rating: 4.6,
    price: 25,
    location: locations[2]._id
  },
  {
    name: 'La Giostra',
    description: 'An upscale restaurant is known for its excellent Tuscan cuisine. The menu features dishes like truffle pasta, wild boar stew, and Florentine-style steak, all made with high-quality ingredients. Be sure to make a reservation in advance, as this restaurant can get quite busy.',
    image: 'la-giostra.jpg',
    rating: 4.4,
    price: 50,
    location: locations[2]._id
  },
  {
    name: 'Trattoria da Enzo al 29',
    description: 'Located in the Trastevere neighborhood and serves classic Roman dishes like cacio e pepe, amatriciana, and saltimbocca alla romana. The prices are reasonable and the atmosphere is lively and authentic.',
    image: 'trattoria-da-enzo-al-29.jpg',
    rating: 4.4,
    price: 20,
    location: locations[3]._id
  },
  {
    name: 'Pizzeria La Montecarlo',
    description: 'A historic pizzeria has been serving up delicious pies since 1906. The menu features classic Neapolitan-style pizzas with simple toppings like tomato, mozzarella, and basil. The prices are reasonable and the atmosphere is casual and welcoming.',
    image: 'pizzeria-la-montecarlo.jpg',
    rating: 4.4,
    price: 60,
    location: locations[3]._id
  },
  {
    name: 'Ta Karamanlidika Tou Fani',
    description: 'A Greek deli and restaurant that offers a variety of traditional Greek dishes such as souvlaki, moussaka, and pastitsio. The food is made with fresh ingredients and the portions are generous.',
    image: 'ta-karamanlidika-tou-fani.jpg',
    rating: 4.5,
    price: 15,
    location: locations[4]._id
  },
  {
    name: 'Varoulko Seaside',
    description: 'A seafood restaurant located near the port of Piraeus. It offers a variety of fresh seafood dishes and has a beautiful view of the sea.',
    image: 'varoulko-seaside.jpg',
    rating: 4.4,
    price: 25,
    location: locations[4]._id
  },
]);


const journalEntries = await JournalEntry.insertMany([
  new JournalEntry({
    date: '2018-09-14',
    title: 'My first journal entry',
    content: 'This is incredible',
  }),
  new JournalEntry({
    date: '2018-09-15',
    title: 'My second journal entry',
    content: 'It was an amazing expereience',
  }),
]);

journalEntries.forEach((entry) => {
  entry.save((err) => {
    if (err) {
      console.log(err);
    }
  });
});

  await User.deleteMany();

  await User.create({
    firstName: 'Nick',
    lastName: 'Tozzi',
    email: 'ntozzi@testmail.com',
    password: 'password12345',
    // orders: [
    //   {
    //     venues: [venues[0]._id, venues[0]._id, venues[1]._id]
    //   }
    // ]
  });

  await User.create({
    firstName: 'Jose',
    lastName: 'Del Valle',
    email: 'jdelvalle88@live.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Paul',
    lastName: 'Dangelo',
    email: 'pdangelo@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Kelley',
    lastName: 'Flinn',
    email: 'kflinn@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
