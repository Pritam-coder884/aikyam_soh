import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../utils/firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../Login/Login.css";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = userRegister;
  const auth = getAuth();
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // console.log(userRegister);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        navigate("/login");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        }
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
      });
  };
  const handleRegisterChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 style={{textAlign:"center"}}>Signup Form</h1>
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
            <label>Enter Password</label>
            <input
              type="password"
              required
              name="password"
              value={userRegister.password}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="login-input-box">
            <button>Register</button>
          </div>
        </form>
        <div className="login-input-box" style={{ textAlign: "center" }}>
          <p style={{fontSize:"12px"}}>
            Wan't to involve in the community of Alumni and students?{" "}
            <span className="render-to-signup">
              <Link to="/register">Register to the community</Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
