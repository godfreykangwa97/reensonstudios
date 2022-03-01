import React from "react";
import { Link} from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";


const CreateProject = () => {

    return (
        <div className="main-wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="contents">
                    <nav className="page-nav">
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/monitor/works">Monitor works</Link>
                        <Link to="/admin/create/project" className="page-active">create project</Link>
                    </nav>
                    <div className="opening">
                        <div className="opening-header">
                            <h3>Create project</h3>
                            <Link to="/admin/create/blog" className="link"><i className="fas fa-line-chart"/><span>Monitor</span></Link>
                        </div>
                    </div>
                    <div className="create-project">
                        <form action="" className="w-100">
                            <div className="form-group">
                                <h1>Add images</h1>
                            </div>

                            <div className="form-group display-flex justify-center align-items-center">
                                <label htmlFor="file">
                                    <div className="Show-Image">
                                        <i className="fas fa-plus-circle"/>
                                        <input type="file" accept="images/*"  id="file" hidden/>
                                    </div>
                                </label>
                            </div>
                        </form>
                        <div className="images-list">
                            <h4>Recently added photos</h4>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};
export default  CreateProject;