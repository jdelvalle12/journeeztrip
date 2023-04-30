import React from "react";
import Weather from "../utils/api/weather";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'react-bootstrap/Image';


const Carousel = ({ images }) => {
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
      <div>
        <Image src={image} alt={`Slide ${index + 1}`} width={600} height={400}/>
      </div>
      {/* <div>
        <Image src={"/images/Travel Gears.jpg"} alt={`Slide ${index + 2}`} width={300} height={25}/>
        </div>
        <div>
        <Image src={"/images/Tropical Summer Getaways.jpg"} alt={`Slide ${index + 3}`} width={300} height={25}/>
      </div> */}
      </div>
       ))}
    </Slider>
  );
};


const Home = () => {
  return (
    
      
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold text-blue-800 mb-20'>Welcome, your adventure awaits!</h1>
      <div className="video-container">
        <video autoPlay loop muted className="video-container" >
          <source  src="/images/Mykonos-aerial-view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <Weather className='weather-dashboard' />
      </div>
    
      <div className="carousel-container relative w-full items-center "> 
        <Carousel 
          className="carousel-wrapper"
          images={[
            "/images/Tropical Summer Getaways.jpg", "/images/Travel Gears.jpg", "/images/Horizon.jpg"]}
            />
      </div>

     {/* </div>       */}
    </main>
    );
  }

export default Home;
