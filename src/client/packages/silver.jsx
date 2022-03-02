import React from "react";
import HomeHeader from "../components/header/header";
import Footer from "../components/footer/footer";

const PackageSilver = () => {
    return (
        <div className="silver">
            <HomeHeader/>
            <div className="wrapper margin-top-2rem padding-top-bottom-2rem">
                <div className="package-opening margin-top-2rem pa">
                    <h1 className="orange">SILVER</h1>
                    <h5>Package</h5>
                    <p>Recommended for weddings</p>
                </div>
                <div className="grid-2 silver-form">

                    <div className="info">
                        <ul className="display-flex flex-column gap-1rem  margin-top-2rem padding-top-bottom-2rem">
                            <li><i className="fas fa-circle orange"/><span className="margin-left-20">200 soft copies</span></li>
                            <li><i className="fas fa-circle orange"/><span className="margin-left-20">30 printed</span></li>
                            <li><i className="fas fa-circle orange"/><span className="margin-left-20">2 large portraits</span></li>
                            <li><i className="fas fa-circle orange"/><span className="margin-left-20">full video</span></li>
                            <li><i className="fas fa-circle orange"/><span className="margin-left-20">8hrs +</span></li>
                        </ul>
                        <h1>K 5,000</h1>
                        <div className="form-group">
                            <h3>TERMS & CONDITIONS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi doloremque laborum necessitatibus quaerat quia quibusdam, tenetur velit. Impedit, repudiandae.</p>
                        </div>
                    </div>

                    <form action="" className="padding-20">
                        <small>What is your name</small>
                        <div className="form-group grid-2">
                            <div className="form-group">
                                <input type="text" placeholder="First name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="last name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <small>You are booking for</small>
                            <select name="" id="">
                                <option value="">Wedding</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <small>How do we reach you</small>
                            <input type="text" placeholder="phone number"/>
                        </div>

                        <div className="form-group grid-2">
                            <div className="form-group">
                                <small>What time is the event starting</small>
                                <input type="time"/>
                            </div>
                            <div className="form-group">
                                <small>What time is the event ending</small>
                                <input type="time"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <small>When will be the event</small>
                            <input type="date" placeholder=""/>
                        </div>

                        <div className="form-group">
                            <small>The event will be held at</small>
                            <input type="text" placeholder="venue"/>
                        </div>

                        <div className="form-group display-inline-flex display-space-between align-items-center">
                            <div className="display-inline-flex">
                                <input type="checkbox"/>
                                I agree to the terms & conditions
                            </div>
                            <button className="btn submit-btn">Proceed</button>
                        </div>
                    </form>

                </div>
                <div className="closing">
                    <h1>You are making an appointment</h1>
                    <h1>For the <span className="orange">silver package</span></h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default PackageSilver;