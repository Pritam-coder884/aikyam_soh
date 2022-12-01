import React from "react";
import FooterButton from "./FooterButton/FooterButton";
import "./Footer.css";
import { Adb, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";

const Footer = () => {
  const history = useNavigate();
  return (
    <>
      <div className="footer-container">
        <div className="Footer">
          <div className="footer-box" style={{ width: "30vw" }}>
            <div>
              <IconButton
                sx={{ padding: 0, display: { xs: "none", md: "flex" }, mr: 1 }}
              >
                <img src={logo} alt="" width="50px" />
              </IconButton>
            </div>
            <div>AIKYAM, CONNECTING ALUMS AND STUDENTS.</div>
          </div>
          <div className="footer-box">
            <h1>UNIVERSITY</h1>
            <FooterButton title={"STUDENTS"} navigate="/" />
            <FooterButton title={"EVENTS"} navigate="/events" />
            <FooterButton title={"GALLERY"} navigate="/gallery" />
            <FooterButton title={"NEWS"} navigate="/news" />
          </div>
          <div className="footer-box">
            <h1>ALUMNI</h1>
            <FooterButton title={"CONTACTS"} navigate="/" />
            <FooterButton title={"CAREER"} navigate="/jobs" />
            <FooterButton title={"ABOUT US"} navigate="/" />
            <FooterButton title={"APPLY TO JOB"} navigate="/jobs" />
          </div>
          <div className="footer-box">
            <h1>ACCOUNT</h1>
            <FooterButton title={"PROFILE"} navigate="/profile" />
            <FooterButton title={"STORIES"} navigate="/stories" />
            <FooterButton title={"DOWNLOADS"} />
          </div>
          <div className="footer-box">
            <div className="footer-box-button">
              <button>ALUMNI ACCOUNT</button>
            </div>
            <div className="footer-box-icon">
              <IconButton
                onClick={() => {
                  history("/");
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                onClick={() => {
                  history("/");
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                onClick={() => {
                  history("/");
                }}
              >
                <LinkedIn />
              </IconButton>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <hr />
          <div className="footer-horizontal-line">
            <p>©2022 AIKYAM Alumni Association</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
