import React from "react";
import Weather from "../utils/api/weather";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'react-bootstrap/Image';
import Tropical from '../images/Tropical Summer Getaways.jpg';
import Horizon from '../images/Horizon.jpg';
import Gears from '../images/Travel Gears.jpg';
import Mykonos from '../images/Mykonos-aerial-view.mp4';


const Carousel = () => {
  const images = [Tropical, Gears, Horizon];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} width={600} height={400}/>
        </div>
      ))}
    </Slider>
  );
};

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold text-blue-800 mb-20'>Welcome, your adventure awaits!</h1>
      <div>
        <video autoPlay loop muted className="video-container" >
          <source  src={Mykonos} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <Weather className='weather-dashboard' />
      </div>
      <div className="carousel-container relative w-full items-center ">
        <Carousel />
      </div>
    </main>
  );
};

export default Home;