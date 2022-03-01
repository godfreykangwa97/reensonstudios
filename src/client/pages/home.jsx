import React from "react";


import "../../_dist/css/main.css";

import HomeHeader from "../components/header/header";
import HomeServices from "../components/services";
import HomeAbout from "../components/about";
import HomeCoreValues from "../components/core-values";
import HomeWorks from "../components/works";
import HomePackages from "../components/packages";
import HomeOffer from "../components/offer";
import Footer from "../components/footer/footer";
import Hero from "../components/hero";
import Newsletter from "../components/newsletter";


const  Home = () => {
    return (
        <div className="home">
           <HomeHeader/>
           <Hero/>
           <HomeServices/>
           <HomeAbout/>
           <HomeCoreValues/>
           <HomeWorks/>
           <HomePackages/>
           <HomeOffer/>
           <Newsletter/>
           <Footer/>
        </div>
    );
};
export default Home;