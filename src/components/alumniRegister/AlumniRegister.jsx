import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Login/Login.css";
import axios from "axios";

const AlumniRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userRegister, setUserRegister] = useState({
    name:"",
    email:"",
    mobile:"",
    gender:"",
    interest:"",
    institution:"",
    pyear:"",
    branch:"",
    job:"",
    location:"",
    pic:"",
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
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // console.log(userRegister);
    try {
			const url = "http://localhost:7070/alumni";
			const { userRegister: res } = await axios.post(url, userRegister);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
   
  };

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
            name="interest"
            required
            value={userRegister.interest}
            onChange={handleRegisterChange}
          >
            <option>Interested in</option>
            <option value="music">Singing</option>
            <option value="dance">Dancing</option>
            <option value="cp">Competitive Programming</option>
            <option value="ro">Robotics</option>
            <option value="design">Designing</option>
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
            name="pyear"
            value={userRegister.pyear}
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
            name="job"
            value={userRegister.job}
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

