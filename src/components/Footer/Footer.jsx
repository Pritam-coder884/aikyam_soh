import React from "react";
import FooterButton from "./FooterButton/FooterButton";
import "./Footer.css";
import FooterLogo from "../../Assets/logo-footer.png";

const Footer = () => {
  return (
   <>
    <div className="footer-container">
      <div className="Footer">
        <div className="footer-box" style={{width:"30vw"}}>
          <div>
            <img src={FooterLogo} alt="footer-logo" />
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
            <p>i1</p>
            <p>i2</p>
            <p>i3</p>
            <p>i4</p>
            <p>i5</p>
          </div>
        </div>
      </div>
      <div style={{marginTop:"3rem"}}>
      <hr />
      <div className="footer-horizontal-line">
        <p>©2022 Alumni Association</p>
      </div>
      </div>
    </div>
    <div style={{backgroundColor:"#222222",height:"5vh"}}></div>
   </>
  );
};

export default Footer;
