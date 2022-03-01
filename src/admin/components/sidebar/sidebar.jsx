import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../../_assets/site/logo.png";

const SideBar = () => {

    return (
        <aside className="side-bar">
            <div className="side-bar-logo-holder">
                <Link to="admin/dashboard"><img src={Logo} className="logo" alt="Reenson studios"/></Link>
            </div>

            <div className="sidebar-user-header">
                <div className="sidebar-avatar-holder">
                    <img src="" className="sidebar-avatar" alt=""/>
                </div>
                <h4>name</h4>
                <p>role</p>
            </div>

            <nav className="sidebar-navigation">
               <Link to="/admin/dashboard" className="page-link"><i className="fas fa-home"/><span>Dashboard</span></Link>
               <Link to="/admin/chats"  className="page-link"><i className="fas fa-comment-alt"/><span>Chats</span></Link>
               <Link to="/admin/monitor/blogs"  className="page-link"><i className="fas fa-book-reader"/><span>Blogs</span></Link>
               <Link to="/admin/monitor/works"  className="page-link"><i className="fas fa-layer-group "/><span>Works</span></Link>
               <Link to="/admin/monitor/users"  className="page-link"><i className="fas fa-users"/><span>Users</span></Link>
                <div className="nav-section">
                    <h5>Create</h5>
                    <Link to="/admin/create/project"  className="page-link"><i className="fas fa-image"/><span>Project</span></Link>
                    <Link to="/admin/create/blog"  className="page-link"><i className="fas fa-blog"/><span>Blog</span></Link>
                </div>
                <div className="nav-section">
                    <h5>Register</h5>
                    <Link to="/admin/register/user"  className="page-link"><i className="fas fa-user"/><span>User</span></Link>
                </div>
            </nav>
        </aside>
    );
};
export default SideBar;