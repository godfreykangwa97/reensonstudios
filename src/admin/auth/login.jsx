import React, { useRef } from "react";
import Fav from "../../_assets/site/favicon.png";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    return (
        <div className="container-holder">
            <div className="login">
                <div className="center-opening">
                    <img src={Fav} className="fav-icon" alt="Reenson studios"/>
                    <h3>Login into accounts</h3>
                </div>
                <form action="">
                   <div className="form-group">
                       <input type="email" ref={emailRef} placeholder="Email address or Username"/>
                   </div>
                    <div className="form-group">
                        <input type="password" ref={passwordRef} placeholder="Password"/>
                    </div>
                    <div className="form-group">
                       <button className="btn login-btn">Login</button>
                    </div>

                    <div className="form-group">
                        <h3 className="text-center">- OR -</h3>
                        <button className="btn icon-btn"><i className="fab fa-google"/><span>sign in with google</span></button>
                        <button className="btn  icon-btn"><i className="fab fa-facebook-f"/><span>sign in with facebook</span></button>
                        <button className="btn  icon-btn">Reset password</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;