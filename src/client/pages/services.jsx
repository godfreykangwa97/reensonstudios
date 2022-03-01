import "../../_dist/css/main.css";

import HomeHeader from "../components/header/header";

import Footer from "../components/footer/footer";
import HomePackages from "../components/packages";
import HomeOffer from "../components/offer";




const  Services = () => {
    return (
        <div className="sevices">
            <HomeHeader/>
              <div className="home-services padding-top-bottom-2rem margin-top-100">
                <div className="wrapper">
                    <div className="home-opening text-center">
                        <h1>Services</h1>
                    </div>
                    <div className="grid-3 margin-top-2rem">
                        <div className="services-card text-center">
                            <i className="fas fa-image"/>
                            <h3>Photography</h3>
                            <p></p>
                        </div>
                        <div className="services-card text-center">
                            <i className="fas fa-video"/>
                            <h3>Video-graphy</h3>
                            <p></p>
                        </div>
                        <div className="services-card text-center">
                            <i className="fas fa-stream"/>
                            <h3>Live streaming</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
              <div className="bundles padding-top-bottom-2rem">
                  <div className="wrapper">
                      <div className="opening text-left">
                          <h1>Combined bundles</h1>
                          <hr className="line-thick"/>
                      </div>
                      <div className="grid-2">
                          <div className="bundle padding-20">
                              <h3>Wedding</h3>
                          </div>
                          <div className="bundle padding-20">
                              <h3>Wedding</h3>
                          </div>
                          <div className="bundle padding-20">
                              <h3>Wedding</h3>
                          </div>
                          <div className="bundle padding-20">
                              <h3>Wedding</h3>
                          </div>
                      </div>
                  </div>
              </div>
              <HomePackages/>
              <HomeOffer/>
            <Footer/>
        </div>
    );
};
export default Services;