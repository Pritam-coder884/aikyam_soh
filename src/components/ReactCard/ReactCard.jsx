import React from "react";
import "./ReactCard.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import z1 from "../../assets/images/z1.png";
import z2 from "../../assets/images/z2.jpg";
import z3 from "../../assets/images/z3.png";
import s1 from "../../assets/images/s1.jpg";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.jpg";
import a1 from "../../assets/images/a1.jpeg";
import a2 from "../../assets/images/a2.jpeg";
import a3 from "../../assets/images/a3.jpeg";

const ReactCard = ({ type }) => {
  let data = {};
  switch (type) {
    case "card1":
      data = {
        title: "Skill++ Event",
        description:
          "Skills++ is the biggest UPSKILLING program for future geeks and programmers by Zairza. An idea can pop up in the middle of a shower or while going on a walk, or even randomly after hours of thinking.",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
        ),
        img:(<img src={z1} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card2":
      data = {
        title: "Zairziest Event",
        description:
          "Zairziest event is one of the Technical fest event which is held once in a year.It is a great event which includes lots of fun events also.",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
        ),
        img:(<img src={z2} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card3":
      data = {
        title: "Web development Event",
        description:
          "Web development events might just be what you need to ramp up your professional development. Many web development conferences out there are a valuable way to improve your skills, expand your network, and advance your career.",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
        ),
        img:(<img src={z3} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card4":
      data = {
        title: "SID Event",
        description:
          "Spectrum Internship Drive is a one month Internship drive organised by Spectrum club of OUTR BBSR",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
        ),
        img:(<img src={s1} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card5":
      data = {
        title: "Spectoberfest Event",
        description:
          "Spectober fest event is one of the interesting event which is held in month of october every year where many students and alumni contribute their different kinds of idea to make Projects.",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
        ),
        img:(<img src={s2} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card6":
      data = {
        title: "Machine Learning Event",
        description:
          "Machine learning algorithms will build a model based on sample data to decide or predict without being explicitly programmed. This sample is also known as training data, and it’s the key to any precise analysis.",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
        ),
        img:(<img src={s3} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card7":
      data = {
        title: "Design of Plane Event",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
        ),
        img:(<img src={a1} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card8":
      data = {
        title: "Testing Event",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
        ),
        img:(<img src={a2} alt="" className="rectangular-card-image"/>),
      };
      break;
    case "card9":
      data = {
        title: "Research Event",
        eventicon: (
          <EventIcon
            className="rectangular-card-icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        dateicon: (<CalendarTodayIcon className="rectangular-card-icon" 
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
         />
        ),
        locicon:(<LocationOnIcon className="rectangular-card-icon" 
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
        ),
        img:(<img src={a3} alt="" className="rectangular-card-image"/>),
      };
      break;

    default:
      break;
  }
  return (
    <div className="rectangle-card">
        <div>
            {data.img}
        </div>
      <div className="rectangular-data-icon">
        <span>{data.eventicon}</span>
        <span>{data.title}</span>
      </div>
      <div className="rectangular-card-description">
        <p>{data.description}</p>
      </div>
      <div className="rectangular-data-icon">
        <span>{data.dateicon}</span>
        <span>Date:</span>
      </div>
      <div className="rectangular-data-icon">
        <span>{data.locicon}</span>
        <span>Location:</span>
      </div>
    </div>
  );
};

export default ReactCard;
