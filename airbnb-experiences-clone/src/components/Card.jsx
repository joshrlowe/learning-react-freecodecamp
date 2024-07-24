import React from "react";
import starIcon from "../images/star.png";

const Card = ({
  coverImg,
  title,
  rating,
  stats,
  location,
  price,
  openSpots,
  ...props
}) => {
  const imagePath = require(`../images/${coverImg}`);
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card" {...props}>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--image-container">
        <img src={imagePath} alt={title} className="card--image" />
      </div>
      <div className="card-info">
        <div className="card--stats">
          <img src={starIcon} alt="Star" className="card--star" />
          <span>{rating}</span>
          <span className="gray">({stats.reviewCount}) • </span>
          <span className="gray">{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
