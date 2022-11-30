import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Login/Login.css";
import axios from "axios";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    institution:"",
    qualification: "",
    regdno: "",
    branch: "",
    pyear: "",
  });
  // const {
  //   name,
  //   email,
  //   gender,
  //   mobile,
  //   institution,
  //   qualification,
  //   pyear,
  //   branch,
  //   regdno,
  // } = userRegister;


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

  
    // try {
    //   const res = await fetch("http://localhost:9000/student/add", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       gender,
    //       mobile,
    //       institution,
    //       qualification,
    //       pyear,
    //       branch,
    //       regdno,
    //     }),
    //   });
    //   console.log("res =   " + res);
    //   const data = res.json();

    try {
			const url = "http://localhost:9000/student/add";
			const { userRegister: res } = await axios.post(url, userRegister);
			// navigate("/login");
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
      <h1>Student Registration</h1>
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
          <label>Enter your Institution Name</label>
          <input
            type="text"
            required
            name="institution"
            value={userRegister.institution}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Qualification</label>
          <input
            type="text"
            required
            name="qualification"
            value={userRegister.qualification}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Registration Number</label>
          <input
            type="number"
            required
            name="regdno"
            value={userRegister.regdno}
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

export default StudentRegister;