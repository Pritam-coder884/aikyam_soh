import React, { useState } from "react";
import "../Login/Login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentRegister from "../../components/studentRegister/StudentRegister";
import AlumniRegister from "../../components/alumniRegister/AlumniRegister";
import FullWidthTabs from "../../components/Tab/Tab";

const Signup = () => {
  return (
    <div className="login-container">
      <div style={{ textAlign: "center",paddingTop:"8vh" }}>
        <h1>Register as</h1>
      </div>
      <div>
        <FullWidthTabs />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
