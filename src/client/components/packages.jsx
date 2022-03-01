import React from "react";
import {Link} from "react-router-dom";


const  HomePackages = () => {
    return (
        <div className="home-packages padding-top-bottom-2rem">
            <div className="wrapper">
                <div className="home-opening text-center">
                    <h3>Choose from our packages</h3>
                </div>

                <div className="grid-4 margin-top-2rem">
                    <div className="package-card diamond">
                        <div className="package-header">
                            <h2>Diamond</h2>
                        </div>
                        <div className="package-body">
                            <ul>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">200 soft copies</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">30 printed</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">2 large portrait</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">Full video</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">8 hrs +</span></li>
                            </ul>
                            <h1 className="orange">K 5,000</h1>
                        </div>

                        <div className="package-footer text-left">
                            <div>
                                <small>Recommended for weddings</small>
                            </div>
                            <Link to="/packages/diamond/" className="orange"><span>Book</span><i className="fas fa-arrow-right margin-left-10"/></Link>
                        </div>
                    </div>

                    <div className="package-card gold">
                        <div className="package-header">
                            <h2>Gold</h2>
                        </div>
                        <div className="package-body">
                            <ul>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">120 soft copies</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">20 printed</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">1 large portrait</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">Full video</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">8 hrs +</span></li>
                            </ul>
                            <h1 className="orange">K 4,000</h1>
                        </div>

                        <div className="package-footer text-left">
                           <div>
                               <small>Recommended for kitchen party</small>
                           </div>
                            <Link to="/packages/diamond/" className="orange"><span>Book</span><i className="fas fa-arrow-right margin-left-10"/></Link>
                        </div>
                    </div>

                    <div className="package-card silver">
                        <div className="package-header">
                            <h2>Silver</h2>
                        </div>
                        <div className="package-body">
                            <ul>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">60 soft copies</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">no print</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">no large portrait</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">Video highlights</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">8 hrs +</span></li>
                            </ul>
                            <h1 className="orange">K 3,500</h1>
                        </div>

                        <div className="package-footer text-left">
                            <div>
                                <small>Recommended for chilanga mulilo</small>
                            </div>
                            <Link to="/packages/diamond/" className="orange"><span>Book</span><i className="fas fa-arrow-right margin-left-10"/></Link>
                        </div>
                    </div>

                    <div className="package-card bronze">
                        <div className="package-header">
                            <h2>Bronze</h2>
                        </div>
                        <div className="package-body">
                            <ul>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">60 soft copies</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">no print</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">no large portrait</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">Video highlights</span></li>
                                <li><i className="fas fa-circle orange"/><span className="margin-left-10">5 hrs +</span></li>
                            </ul>
                            <h1 className="orange">K 1,500</h1>
                        </div>

                        <div className="package-footer text-left">
                            <div>
                                <small>Recommended for parties and other events</small>
                            </div>
                            <Link to="/packages/diamond/" className="orange"><span>Book</span><i className="fas fa-arrow-right margin-left-10"/></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default HomePackages;