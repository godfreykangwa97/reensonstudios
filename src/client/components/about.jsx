import React from "react";
import {Link} from "react-router-dom";


const  HomeAbout = () => {
    return (
        <div className="home-about padding-top-bottom-2rem">
            <div className="wrapper text-left">
                <div className="home-opening ">
                    <h1>About</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque blanditiis eaque earum esse facere, id, iste laborum molestias mollitia odit pariatur provident temporibus voluptatibus voluptatum? Accusantium adipisci eligendi tenetur.</p>
                <Link to="" className="orange"><i className="fas fa-arrow-right"/></Link>
            </div>
        </div>
    );
};
export default  HomeAbout;