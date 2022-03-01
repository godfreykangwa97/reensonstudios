import React from "react";
import {Link} from "react-router-dom";

import "../../_dist/css/main.css";

const  StartAd = () => {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="wrapper open-letter text-left">
                    <div className="title">
                        <h1 className="text-deco">New dawn</h1>
                        <h1 className="text-deco">wedding offer </h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, magni?</p>
                    <h2>includes photography and video</h2>
                    <h4>Redeem offer at</h4>
                    <h1 className="orange">K 5,000</h1>
                    <div className="options margin-top-2rem display-inline-flex">
                        <Link to="" className="btn learn-btn">Redeem</Link>
                        <Link to="/home" className="btn continue-btn">Continue</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StartAd;