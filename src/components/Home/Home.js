import React from "react";
import "./Home.css";
import img from '../assets/screen-recording.jpg'
import HomeTestimony from "../HomeTestimony/HomeTestimony";
import { Link } from "react-router-dom";
const Home = () => {
  return (
 <>
    <div className="container-fluid home mt-2">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="home-content py-5">
              <h2>Recording Screen & Download it.</h2>
              <h3>
                Record the screen on your display <br /> <span>
                  Or
                </span> <br /> macOS laptop in one easy step.
              </h3>
              <Link to="/testimony" className="home-btn">Record Your screen</Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
              <img className="img-fluid py-5" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
    <HomeTestimony/>
 </>
  );
};

export default Home;
