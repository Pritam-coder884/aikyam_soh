import React from "react";
import FooterButton from "./FooterButton/FooterButton";
import "./Footer.css";
import { Adb, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="Footer">
          <div className="footer-box" style={{ width: "30vw" }}>
            <div>
              <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            </div>
          </div>
          <div className="footer-box">
            <h1>UNIVERSITY</h1>
            <FooterButton title={"STUDENTS"} />
            <FooterButton title={"EVENTS"} />
            <FooterButton title={"GALLERY"} />
            <FooterButton title={"NEWS"} />
          </div>
          <div className="footer-box">
            <h1>ALUMNI</h1>
            <FooterButton title={"CONTACTS"} />
            <FooterButton title={"CAREER"} />
            <FooterButton title={"ABOUT US"} />
            <FooterButton title={"APPLY TO JOB"} />
          </div>
          <div className="footer-box">
            <h1>ACCOUNT</h1>
            <FooterButton title={"PROFILE"} />
            <FooterButton title={"STORIES"} />
            <FooterButton title={"PASSWORD"} />
            <FooterButton title={"DOWNLOADS"} />
          </div>
          <div className="footer-box">
            <div className="footer-box-button">
              <button>ALUMNI ACCOUNT</button>
            </div>
            <div className="footer-box-icon">
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <hr />
          <div className="footer-horizontal-line">
            <p>©2022 Alumni Association</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
