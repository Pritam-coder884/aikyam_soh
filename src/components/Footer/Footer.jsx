import React from "react";
import FooterButton from "./FooterButton/FooterButton";
import "./Footer.css";
import { Adb, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";

const Footer = () => {
  const history = useNavigate();
  return (
    <>
      <div className="footer-container">
        <div className="Footer">
          <div className="footer-box" style={{ width: "30vw" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  padding: 0,
                  display: { md: "flex" },
                  mr: 1,
                  backgroundColor: "orange",
                }}
              >
                <img src={logo} alt="" width="50px" />
              </IconButton>
              <Typography sx={{ fontWeight: "600px" }}>AIKYAM</Typography>
            </div>
            <div>CONNECTING ALUMS AND STUDENTS.</div>
          </div>
          <div className="footer-box">
            <h1>UNIVERSITY</h1>
            <FooterButton title={"STUDENTS"} navigate="/" />
            <FooterButton title={"EVENTS"} navigate="/events" />
            <FooterButton title={"GALLERY"} navigate="/gallery" />
            <FooterButton title={"NEWS"} navigate="/" />
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
            <FooterButton title={"PROFILE"} navigate="/" />
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
