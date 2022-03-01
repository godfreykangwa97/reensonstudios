import React from "react";
import {Link} from "react-router-dom";


const  HomeServices = () => {
    return (
        <div className="home-services padding-top-bottom-2rem">
            <div className="wrapper">
                 <div className="home-opening text-center">
                     <h1>Services</h1>
                 </div>
                <div className="grid-2 margin-top-2rem">
                    <div className="services-card text-center">
                        <i className="fas fa-image"/>
                        <h3>Photography</h3>
                        <p></p>
                        <Link to="">more</Link>
                    </div>
                    <div className="services-card text-center">
                        <i className="fas fa-video"/>
                        <h3>Video-graphy</h3>
                        <p></p>
                        <Link to="">more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeServices;