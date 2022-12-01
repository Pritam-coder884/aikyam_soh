import jobsData from "../../config/data";
import "./job.css";
import React from "react";
import MediaControlCard from "../../components/Job/MakeCard";
import MakeCard from "../../components/Job/MakeCard";
import cardData from "../../config/data";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useEffect } from "react";

const Job = () => {
  const addEvent = () => {};

  const [cards, setCards] = useState([...cardData]);
  function AddEvent() {
    // console.log(cards);
    const [open, setOpen] = React.useState(false);
    const [job, setJob] = useState({});

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setCards([...cards, job]);
      setOpen(false);
    };

    const handleChange = (event) => {
      if (event.target.name === "tools" || event.target.name === "languages") {
        setJob({ ...job, [event.target.name]: event.target.value.split(" ") });
      } else setJob({ ...job, [event.target.name]: event.target.value });
    };

    return (
      <div>
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
          onClick={handleClickOpen}
        >
          <ControlPointIcon />
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <input
              type="text"
              name="id"
              onChange={handleChange}
              placeholder="id"
            />
            <input
              type="text"
              name="company"
              onChange={handleChange}
              placeholder="company"
            />
            <input
              type="text"
              name="logo"
              onChange={handleChange}
              placeholder="logo"
            />
            <input
              type="text"
              name="position"
              onChange={handleChange}
              placeholder="position"
            />
            <input
              type="text"
              name="role"
              onChange={handleChange}
              placeholder="role"
            />
            <input
              type="text"
              name="level"
              onChange={handleChange}
              placeholder="level"
            />
            <input
              type="text"
              name="contract"
              onChange={handleChange}
              placeholder="contract"
            />
            <input
              type="text"
              name="location"
              onChange={handleChange}
              placeholder="location"
            />
            <input
              type="text"
              name="languages"
              onChange={handleChange}
              placeholder="languages"
            />
            <input
              type="text"
              name="tools"
              onChange={handleChange}
              placeholder="tools"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <>
      <AddEvent />
      {cards.map((card) => (
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
