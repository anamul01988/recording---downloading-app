import React from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-full footer  mt-5 py-3 ">
      <div className="container footer-content">
        <p className="text-light">
          <span>Like-this Landing Page</span> © All Rights Reserved & System Inc - {""}
          <span>2022</span>
        </p>

        <p className="icons">
         <FaFacebook className="fb icon" /> <FaTwitterSquare  className="twitter icon"/> <FaInstagramSquare  className="intagram icon"/>{" "}
          <FaLinkedin className="linkedin icon" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
