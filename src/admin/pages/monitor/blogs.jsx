import React from "react";
import { Link} from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

const MonitorBlog = () => {
    return (
        <div className="main-wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="contents">
                    <nav className="page-nav">
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/monitor/blogs" className="page-active">Monitor blogs</Link>
                    </nav>
                    <div className="opening">
                        <div className="opening-header">
                            <h3>Monitor Blogs</h3>
                            <Link to="/admin/create/blog" className="link"><i className="fas fa-plus-circle"/><span>Create</span></Link>
                        </div>
                    </div>
                    <div className="blogs">
                        blogs
                    </div>
                </div>

            </main>
        </div>
    );
};
export default MonitorBlog;