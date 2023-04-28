import React from 'react';
import Horizon from '../images/Horizon.jpg';


export default function About() {

    return (
        <div>
            <div className="about-us">
                <h2 className='about-us-heading font-bold text-blue-800'>About Us</h2>
                    <p>Welcome to Journeez, the ultimate travel companion for solo adventurers. 
                        This app is designed to help you make the most of your solo travel experience 
                        by providing you with everything you need in one convenient place.
                        From accommodations to discovering hidden gems in your destination, 
                        Journeez has got you covered. Our community of solo travelers share their experiences, tips, 
                        and advice to help you make the most of your trip. Whether you&apos;re planning a solo 
                        trip for the first time or you&apos;re a seasoned solo traveler, 
                        Journeez is here to make your journey unforgettable.&rdquo;
                    </p>
            </div>
            <img className='about-us-img'src={Horizon} alt='Horizon' width={600} height={400}/>
        </div>
    );
}