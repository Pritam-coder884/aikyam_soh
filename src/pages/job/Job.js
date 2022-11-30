import jobsData from "../../config/data";
import "./job.css";
import React from "react";
import MediaControlCard from "../../components/Job/MakeCard";
import MakeCard from "../../components/Job/MakeCard";
import cardData from "../../config/data";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "@mui/material";

const Job = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          right: "20px",
          top: "20px",
          backgroundColor: "#ddd",
          "&:hover": {
            backgroundColor: "#999",
            color: "#cde",
          },
        }}
      >
        <ControlPointIcon />
      </Button>
      {cardData.map((card) => (
        <MakeCard
          logo={card.logo}
          company={card.company}
          neww={card.neww}
          position={card.position}
          featured={card.featured}
          postedAt={card.postedAt}
          contract={card.contract}
          location={card.location}
          role={card.role}
          level={card.level}
          languages={card.languages}
          tools={card.tools}
        />
      ))}
    </>
  );
};

export default Job;
