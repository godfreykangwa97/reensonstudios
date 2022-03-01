import React from "react";
import "../../_dist/css/main.css";

const Newsletter = () => {
     return (
         <div className="newsletter padding-top-bottom-2rem">
             <div className="wrapper">
                 <div className="newsletter-opening text-center">
                     <h1 className="upper-case">Subscribe</h1>
                     <h3 className="upper-case">to mail list</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                 </div>

                 <form action="">
                     <div className="form-group display-flex justify-center gap-1rem ">
                         <input type="text" placeholder="First name"/>
                         <input type="email" placeholder="Email address"/>
                     </div>
                     <div className="form-group display-flex justify-center">
                         <button className="btn plain-btn">Subscribe <i className="fas fa-arrow-right margin-left-10"/></button>
                     </div>
                 </form>
             </div>
         </div>
     );
};
export default Newsletter;