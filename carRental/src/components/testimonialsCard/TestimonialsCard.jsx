import React from "react";
import "./testimonialsCard.css";
const TestimonialsCard = ({text, image, name, city}) => {
  return (
    <div className="testimonials">
      <p>"{text}"</p>
      <div className="testimonials__info">
        <img src={image} alt={name} />
        <div className="testimonials__info__subText">
          <p>{name}</p>
          <span>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
