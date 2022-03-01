import React from "react";
import {Link} from "react-router-dom";


const  Hero = () => {
    return (
        <div className="hero">
          <div className="faded-overlay">
              <div className="wrapper">
                  <div className="info">
                      <h3>We create the perfect memories</h3>
                      <h1>in frames and motion</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="options margin-top-2rem display-inline-flex">
                      <Link to="" className="btn learn-btn">Redeem</Link>
                  </div>
              </div>
          </div>
        </div>
    );
};
export default Hero;