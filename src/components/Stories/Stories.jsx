import { Select, MenuItem } from "@mui/material";
import React from "react";
import "./Stories.css";

const Stories = () => {
  return (
    <div className="Stories-bg">
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
              src="https://mitsloan.mit.edu/sites/default/files/styles/highlighted_article/public/2021-11/CDO_Survey21_2880x960.jpg?h=1cb3d5c4&itok=WJLZdZlo"
              alt=""
            />
          </div>
          <div className="Stories-container-right">
            <h1>
              MIT Sloan to Participate in 2022 National Alumni Career Mobility Survey
            </h1>
            <p>
              MIT Sloan has been an innovator in career outcomes data and we continue this role by 
              expanding the career data available to our master’s degree alumni. MIT Sloan is participating
              in the 2022 Alumni Career Mobility Survey to gather career outcomes and salary data for master’s
              degree graduates 5 and 10 years after graduation.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="Stories">
        <div className="Stories-container">
          <div className="Stories-container-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WWJEImdtBVeLhMDBgSTAfvvju5KltNqo2A&usqp=CAU"
              alt=""
            />
          </div>
          <div className="Stories-container-right">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              qui quia et ratione
            </h1>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WWJEImdtBVeLhMDBgSTAfvvju5KltNqo2A&usqp=CAU"
              alt=""
            />
          </div>
          <div className="Stories-container-right">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              qui quia et ratione
            </h1>
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
