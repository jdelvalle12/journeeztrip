import React from "react";
import Weather from "../utils/api/weather";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'react-bootstrap/Image';
import Tropical from '../images/Tropical Summer Getaways.jpg';
import Travel from '../images/Travel With Ease.jpg';
import Gears from '../images/Travel Gears.jpg';
import Luggages from '../images/luggages.jpg';
import Mykonos from '../images/Mykonos-aerial-view.mp4';
import Caribbean from '../images/Caribbean.jpg';
import CA from '../images/Central America.jpg';
import Europe from '../images/Europe.jpg';
import USA from '../images/USA.jpg';
import Africa from '../images/Africa.jpg';
import Asia from '../images/Asia.jpg';

const Carousel = () => {
  const images = [Tropical, Gears, Travel, Luggages ];
  
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

      <h2 className='text-5xl font-bold text-blue-800 mt-20'>Choose your next destination</h2>
      <div className="image-row">
  <div className="image-container">
    <Image src= {Caribbean} alt="image-description"/>
    <div className="text-container">
      <p>Caribbean</p>
    </div>
  </div>
  <div className="image-container">
    <Image src={CA} alt="image-description"/>
    <div className="text-container">
      <p>Outdoor Adventures</p>
    </div>
  </div>
  <div className="image-container">
    <Image src={Europe} alt="image-description"/>
    <div className="text-container">
      <p>Europe</p>
    </div>
  </div>
  <div className="image-container">
    <Image src={USA} alt="image-description"/>
    <div className="text-container">
      <p>USA</p>
    </div>
  </div>
  <div className="image-container">
    <Image src={Asia} alt="image-description"/>
    <div className="text-container">
      <p>Asia</p>
    </div>
  </div>
  <div className="image-container">
    <Image src={Africa} alt="image-description"/>
    <div className="text-container">
      <p>Africa</p>
    </div>
  </div>
</div>
    </main>
  );
};

export default Home;