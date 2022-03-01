import React from "react";

import { Link } from "react-router-dom"


import SideBar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

const RegisterUser = () => {

    return (


        <div className="main-wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="contents">
                    <nav className="page-nav">
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/monitor/users">Monitor users</Link>
                        <Link to="/admin/register/user" className="page-active">Register user</Link>
                    </nav>
                    <div className="opening">
                        <div className="opening-header">
                            <h3>Register user</h3>
                            <Link to="/admin/monitor/users" className="link"><i className="fas fa-arrow-left"/><span>Back</span></Link>
                        </div>
                    </div>
                    <div className="register-user">
                        <div className="grid-2 align-items-center padding-top-bottom-2rem">
                            <div className="infor">
                                <h1>Now registering user</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolores ea placeat quam quasi voluptates? Architecto delectus ea est eveniet fugit hic id in ipsa iure laboriosam magnam magni minus necessitatibus nostrum omnis pariatur, porro possimus quaerat rerum saepe veniam veritatis vitae voluptatem? Deleniti ex iste molestiae, nihil quisquam repellat!</p>
                            </div>
                            <form onSubmit="">

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
                                        <option value="">Admin</option>
                                        <option value="">Analyst</option>
                                        <option value="">Designer</option>
                                        <option value="">Editor</option>
                                        <option value="">Marketer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email address"/>
                                </div>
                                <div className="form-group">
                                    <small>A system generated password and verification link will be sent to the email above.</small>
                                </div>
                                <div className="form-group text-right display-space-between ">
                                    <span className="display-inline-flex align-items-center">
                                        <input type="checkbox"/>
                                        <span className="margin-left-10">
                                            the information is collect
                                        </span>
                                    </span>
                                   <button className="btn sign-up-btn">Register</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};
// Render Froala Editor component.
// ReactDOM.render(<FroalaEditorComponent tag='textarea'/>, document.getElementById('editor'));
export default RegisterUser;