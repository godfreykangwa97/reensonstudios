import React from "react";
import {Link} from "react-router-dom";


const  Footer = () => {
    return (
        <footer className="footer padding-top-bottom-2rem">
            <div className="wrapper">
                <div className="grid-4 grid-sm">
                    <div className="footer-nav">
                        <h1>Quick</h1>
                        <ul className="margin-top-2rem">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="">Works</Link></li>
                            <li><Link to="">Services</Link></li>
                            <li><Link to="">Contact</Link></li>
                            <li><Link to="">About</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav">
                        <h1>Packages</h1>
                        <ul className="margin-top-2rem">
                            <li><Link to="">Diamond</Link></li>
                            <li><Link  to="">Gold</Link></li>
                            <li><Link  to="">Sliver</Link></li>
                            <li><Link  to="">Bronze</Link></li>
                            <li><Link  to="">Copper</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav">
                        <h1>Services</h1>
                        <ul className="contacts margin-top-2rem">
                          <li><Link  to="">Photography</Link></li>
                          <li><Link  to="">Video production</Link></li>
                          <li><Link  to="">Live streaming</Link></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h1>Categories</h1>
                        <ul className="categories margin-top-2rem">
                           <li><Link  to="">Wedding</Link></li>
                           <li><Link  to="">Kitchen</Link></li>
                           <li><Link  to="">Chilanga mulilo</Link></li>
                           <li><Link  to="">other</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center margin-top-2rem">
                    <h5 className="orange letter-10">&copy; 2022 Reenson studios | <a href="">emit arts & creatives</a></h5>
                </div>
            </div>
        </footer>
    );
};
export default  Footer;