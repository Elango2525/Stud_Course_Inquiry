// RatingStars.js
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './courses.css';

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half-star

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} className='star' />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStarHalfAlt key={i} className='star' />);
      } else {
        stars.push(<FaRegStar key={i} className='star' />);
      }
    }

    return stars;
  };

  return <div className='rating-stars'>{renderStars()}</div>;
};

export default RatingStars;
