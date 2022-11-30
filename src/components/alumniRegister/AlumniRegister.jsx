import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../utils/firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../../pages/Login/Login.css";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

const AlumniRegister = () => {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
  });

  const postImg = async (pic) => {
    try {
      const data = new FormData();
      data.append("upload_preset", "alumnipics");
      data.append("file", pic);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/alokranjanjoshi07567/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await res.json();
      const picUrl = resData.url.toString();
      console.log("pic url " + picUrl);
      setUserRegister({ ...userRegister, pic: picUrl });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      pic,
      gender,
      mobile,
      institution,
      pbatch,
      branch,
      currentPosition,
      location,
      theme,
    } = userRegister;

    try {
      console.log({
        name,
        email,
        pic,
        gender,
        mobile,
        institution,
        pbatch,
        branch,
        currentPosition,
        location,
        theme,
      });
      const res = await fetch("http://localhost:9000/alumni/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          pic,
          gender,
          mobile,
          institution,
          pbatch,
          branch,
          currentPosition,
          location,
          theme,
        }),
      });
      // const res = await axios.post(
      //   "http://localhost:9000/alumni/add",
      //   {
      //     name,
      //     email,
      //     pic,
      //     gender,
      //     mobile,
      //     institution,
      //     pbatch,
      //     branch,
      //     currentPosition,
      //     location,
      //   },
      //   {
      //     headers: {
      //       "content-type": "text/plain",
      //     },
      //   }
      // );
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  //Firebase part end

  const handleRegisterChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Alumni Registration</h1>
      <form onSubmit={handleRegisterSubmit}>
        <div className="login-input-box">
          <label>Enter your Name</label>
          <input
            type="text"
            required
            name="name"
            value={userRegister.name}
            onChange={handleRegisterChange}
          />
        </div>
        <div className="login-input-box">
          <label>Enter your Email</label>
          <input
            type="email"
            required
            name="email"
            value={userRegister.email}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Mobile Number</label>
          <input
            type="number"
            required
            name="mobile"
            value={userRegister.mobile}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Gender</label>
          <select
            style={{ height: "40px" }}
            name="gender"
            required
            value={userRegister.gender}
            onChange={handleRegisterChange}
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="login-input-box">
          <label>Interested in</label>
          <select
            style={{ height: "40px" }}
            name="theme"
            required
            value={userRegister.theme}
            onChange={handleRegisterChange}
          >
            <option>Select Branch</option>
            <option value="music">Singing</option>
            <option value="dance">Dancing</option>
            <option value="cp">CP</option>
          </select>
        </div>

        <div className="login-input-box">
          <label>Enter your Institution</label>
          <input
            type="text"
            required
            name="institution"
            value={userRegister.institution}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Passout Year</label>
          <input
            type="number"
            required
            name="pbatch"
            value={userRegister.pbatch}
            onChange={handleRegisterChange}
          />
        </div>
        <div className="login-input-box">
          <label>Enter your Branch</label>
          <select
            style={{ height: "40px" }}
            name="branch"
            required
            value={userRegister.branch}
            onChange={handleRegisterChange}
          >
            <option>Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="EE">EE</option>
            <option value="I&E">I&E</option>
            <option value="CE">CE</option>
            <option value="ME">ME</option>
          </select>
        </div>
        <div className="login-input-box">
          <label>Current Job/ Position</label>
          <input
            type="text"
            required
            name="currentPosition"
            value={userRegister.currentPosition}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Location</label>
          <input
            type="text"
            required
            name="location"
            value={userRegister.location}
            onChange={handleRegisterChange}
          />
        </div>
        <div className="login-input-box">
          <label>Image</label>
          <input
            type="file"
            required
            name="pic"
            onChange={(e) => postImg(e.target.files[0])}
          />
        </div>

        <div className="login-input-box">
          <button>Submit</button>
        </div>
      </form>
      <div className="login-input-box" style={{ textAlign: "center" }}>
        <p>
          Already have an account !{" "}
          <span className="render-to-signup">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AlumniRegister;
