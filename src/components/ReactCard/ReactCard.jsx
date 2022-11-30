import React from "react";
import "./ReactCard.css";
const ReactCard = ({title,description}) => {
  return (
    <div className="react-card-container">
        <div className="react-card-image">
            <img src="" alt="" />
        </div>
        <div className="react-card-title">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div>
            <button>Learn More</button>
        </div>
    </div>
  );
};

export default ReactCard;
