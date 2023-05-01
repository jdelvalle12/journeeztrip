import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'react-bootstrap/Image';
import Tropical from '../images/Tropical Summer Getaways.jpg';
import Airport from '../images/Airport.jpg';
import Gears from '../images/Travel Gears.jpg';

const Carousel = ({ images }) => {
  const images = [Tropical, Gears, Airport];
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
        <div className="carousel-container relative w-full items-center">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div>
                <Image src={image.src} alt={image.alt} width={600} height={400} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };



  export default Carousel;