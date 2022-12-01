import React from "react";
import "./alumni.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useEffect } from "react";
// import { alumnidata } from "../../config/alumnidata";
import CardAlum from "../../components/Card/card/CardAlum";
import { Box } from "@mui/material";
import axios from "axios";
const Alumni = () => {
  const [search, setSearch] = useState("");
  const [alm, setAlm] = useState();

  const handleClick = async () => {
    try {
      const url = `http://localhost:7070/alumni/s?search=${search}`;
      const res = await axios.get(url);
      console.log(res.data);
      setAlm(res.data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // setError(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="alumni-search-bar">
        <input
          type="text"
          className="search-alumni"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter email, nme or interest"
        />
        <SearchIcon className="alumni-search-icon" onClick={handleClick} />
      </div>
      <Box
        p={10}
        className="alumni-card"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          margin: "auto",
          gap: 10,
        }}
      >
        {alm &&
          alm.map((alumni) => {
            const {
              name,
              email,
              gender,
              mobile,
              institution,
              pbatch,
              pic,
              branch,
              job,
              location,
            } = alumni;
            return (
              <CardAlum
                name={name}
                email={email}
                gender={gender}
                mobile={mobile}
                institution={institution}
                pbatch={pbatch}
                branch={branch}
                job={job}
                pic={pic}
                location={location}
              />
            );
          })}
      </Box>
    </>
  );
};

export default Alumni;
