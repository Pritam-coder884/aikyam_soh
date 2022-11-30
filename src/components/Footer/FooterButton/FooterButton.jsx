import React from "react";
import { useNavigate } from "react-router-dom";
import "./FooterButton.css";

const FooterButton = ({ title, navigate }) => {
  const history = useNavigate();
  return (
    <button
      className="footer-Button"
      onClick={() => {
        history(`${navigate}`);
      }}
    >
      {title}
    </button>
  );
};

export default FooterButton;
