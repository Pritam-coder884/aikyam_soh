import data from "../../config/data";
import React from "react";
import "./makecard.css";

const MakeCard = ({
  logo,
  company,
  neww,
  position,
  featured,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}) => {
  return (
    <>
      <div className="makeCard-card-container">
        <div className="makeCard-inner-left-container">
          <img className="makeCard-left-image" src={logo} alt="image" />
          <div className="makeCard-left-texts">
            <p className="makeCard-lr-1">
              {company}
              {neww && <span>{neww ? "new" : ""}</span>}
              {featured && <span>{featured ? "featured" : ""}</span>}
            </p>
            <p className="makeCard-lr-2">{position}</p>
            <p className="makeCard-lr-3">
              {postedAt + " . " + contract + " . " + location}
            </p>
          </div>
        </div>
        <div className="makeCard-inner-right-container">
          <p className="makeCard-right-texts rr-1">{role}</p>
          <p className="makeCard-right-texts rr-2">{level}</p>
          {languages.map((lang) => (
            <p className="makeCard-right-texts">{lang}</p>
          ))}
          {tools.map((tool) => (
            <p className="makeCard-right-texts rr-3">{tool}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default MakeCard;
