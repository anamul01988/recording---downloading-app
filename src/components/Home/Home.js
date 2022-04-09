import React from "react";
import "./Home.css";
import img from '../assets/screen-recording.jpg'
import HomeTestimony from "../HomeTestimony/HomeTestimony";
import { Link } from "react-router-dom";
import WorkingProcedure from "../WorkingProcedure/WorkingProcedure";
const Home = () => {
  return (
 <>
    <div className="container-fluid home mt-2">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="home-content py-5">
              <h3>Screen <span>Record & Download</span> </h3>
              <h4>
                 Thinking about screen recording? <br />
                 You are at right place so make sure to evaluate your needs before downloading.
               
              </h4>
              <Link to="/record" className="home-btn">Record Your screen</Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
              <img className="img-fluid py-5" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
    <HomeTestimony/>
    <WorkingProcedure/>
  
 </>
  );
};

export default Home;
