import React from 'react'
import "../../_dist/css/main.css";

import HomeHeader from "../components/header/header";
import Footer from "../components/footer/footer";
import Newsletter from "../components/newsletter";


const  Contact = () => {

    return (
        <div className="contact">
            <HomeHeader/>
              <div className="contact-wrapper wrapper padding-top-bottom-2rem">
                  <div className="contact-opening">
                      <h1>Contact us</h1>
                      <p>Kindly write to use, we will be so glad to hear from you</p>
                  </div>

                  <div className="grid-2 holding margin-top-2rem padding-top-bottom-2rem">
                      <div className="contact-info">
                          <h2>Contact <span className="orange">information</span></h2>
                          <ul className="contacts margin-top-2rem">
                              <li><i className="fas fa-map-marker"/><span className="margin-left-10">15789/1080, Kamwala south, Lusaka</span></li>
                              <li><i className="fas fa-phone"/><span className="margin-left-10">+260 771202700</span></li>
                              <li><i className="fas fa-envelope"/><span className="margin-left-10">reensonstudios@gmail.com</span></li>
                              <li><i className="fas fa-globe"/><span className="margin-left-10">www.reensonstudios.com</span></li>
                          </ul>
                          <div className="social-media margin-top-2rem">
                              <h3 className="orange">Follow us on</h3>
                              <div className="display-inline-flex">
                                  <a href="https://www.facebook.com/reensonstudios" target="_blank"><i className="fab fa-facebook-f"/></a>
                                  <a href="https://twitter.com/reensonstudios" target="_blank"><i className="fab fa-twitter"/></a>
                                  <a href="https://www.instagram.com/reensonstudios/" target="_blank"><i className="fab fa-instagram"/></a>
                                  <a href="https://g.page/r/Cckudu4RHlsiEBA" target="_blank"><i className="fab fa-google"/></a>
                                  <a href="https://api.whatsapp.com/message/XEHFBK2GQYR7M1?autoload=1&app_absent=0" target="_blank"><i className="fab fa-whatsapp"/></a>
                              </div>
                          </div>
                      </div>
                      <form action="" className="form">
                          <div className="grid-2">
                              <div className="form-group">
                                  <input type="text" placeholder="First name"/>
                              </div>
                              <div className="form-group">
                                  <input type="text" placeholder="Last name"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <select name="" id="">
                                  <option value="">Subject</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <input type="email" placeholder="Email address"/>
                          </div>
                          <div className="form-group">
                              <textarea name="" id="" placeholder="your message"></textarea>
                          </div>
                          <div className="form-group display-space-between">
                              <div className="display-inline-flex">
                                  <input type="checkbox"/>
                                  <span>Also subscribe to the newsletter</span>
                              </div>
                              <button className="btn submit-btn">Send</button>
                          </div>
                      </form>
                  </div>

              </div>
            <Newsletter/>
            <Footer/>
        </div>
    );
};
export default Contact;