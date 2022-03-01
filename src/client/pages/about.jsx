import React from "react";
import "../../_dist/css/main.css";

import HomeHeader from "../components/header/header";

import Footer from "../components/footer/footer";




const  About = () => {
    return (
        <div className="about">
            <HomeHeader/>

              <div className="about-wrapper padding-top-bottom-2rem">
                 <div className="wrapper">
                     <div className="about-opening text-left">
                         <h1 className="orange">About</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus exercitationem nisi numquam perferendis voluptatum. A assumenda aut autem blanditiis commodi, consectetur cupiditate esse, est excepturi laborum maiores modi molestiae nam non nostrum numquam odit quasi qui ratione recusandae tenetur ullam vitae! Incidunt molestias qui quia quidem ratione tempora vel voluptatibus?</p>
                     </div>
                 </div>
              </div>

              <div className="core-values padding-top-bottom-2rem">
                <div className="wrapper">
                    <div className="text-right">
                        <h1>Our core-values</h1>
                    </div>
                    <div className="grid-3 justify-center align-items-center padding-top-bottom-2rem">
                        <div className="core-card text-center">
                            <i className="fas fa-bank"/>
                            <h4>Value</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quae?</p>
                        </div>

                        <div className="core-card text-center">
                            <i className="fas fa-bank"/>
                            <h4>Value</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quae?</p>
                        </div>

                        <div className="core-card text-center">
                            <i className="fas fa-clock"/>
                            <h4>Time</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quae?</p>
                        </div>
                    </div>
                </div>
              </div>


            <Footer/>
        </div>
    );
};
export default About;