import React from 'react';

const InterestCard = ({ image, name, description }) => {
  return (
    <div className="interest-card">
      <div className="interest-card-image-container">
        <img src={image} alt={name} className="interest-card-image" />
      </div>
      <div className="interest-card-text-container">
        <h3 className="interest-card-name">{name}</h3>
        <p className="interest-card-description">{description}</p>
      </div>
    </div>
  );
};

export default InterestCard;