import { Select, MenuItem } from "@mui/material";
import React from "react";
import "./Stories.css";

const Stories = () => {
  return (
    <div>
      <div className="Stories-upper-nav">
        <h1 className="stories-header">Sucess Stories</h1>
        <Select
          className="Select"
          labelId="demo-simple-select-label"
          displayEmpty
          id="demo-simple-select"
          label="Archive"
        >
          <MenuItem disabled>
            <em>Archive</em>
          </MenuItem>
          <MenuItem value="Ten">Ten</MenuItem>
          <MenuItem value="Twenty">Twenty</MenuItem>
          <MenuItem value="Thirty">Thirty</MenuItem>
        </Select>
      </div>
      <div className="Stories">
        <div className="Stories-container">
          <div className="Stories-container-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEbc01cllLpNLxYKBlSsM8MxZSeA4znPySw&usqp=CAU"
              alt=""
            />
            <h3>Lorem ipsum dolor</h3>
          </div>
          <div className="Stories-container-right">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              qui quia et ratione
            </h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officia blanditiis dicta! Est labore voluptatem
              delectus.
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              hic quasi iste nihil magni cum doloribus tenetur ullam odio
              ratione iure a fugit in ut earum? Commodi animi ullam obcaecati.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="Stories">
        <div className="Stories-container">
          <div className="Stories-container-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEbc01cllLpNLxYKBlSsM8MxZSeA4znPySw&usqp=CAU"
              alt=""
            />
            <h3>Lorem ipsum dolor</h3>
          </div>
          <div className="Stories-container-right">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              qui quia et ratione
            </h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officia blanditiis dicta! Est labore voluptatem
              delectus.
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              hic quasi iste nihil magni cum doloribus tenetur ullam odio
              ratione iure a fugit in ut earum? Commodi animi ullam obcaecati.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="Stories">
        <div className="Stories-container">
          <div className="Stories-container-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEbc01cllLpNLxYKBlSsM8MxZSeA4znPySw&usqp=CAU"
              alt=""
            />
            <h3>Lorem ipsum dolor</h3>
          </div>
          <div className="Stories-container-right">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              qui quia et ratione
            </h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officia blanditiis dicta! Est labore voluptatem
              delectus.
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              hic quasi iste nihil magni cum doloribus tenetur ullam odio
              ratione iure a fugit in ut earum? Commodi animi ullam obcaecati.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
