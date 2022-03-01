import React from "react";

import "../../_dist/css/admin.css";


import SideBar from "../components/sidebar/sidebar";
import Header from "../components/header/header";

const Dashboard = () => {
    return (
        <div className="main-wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="contents">
                    <div className="dashboard">
                        dashboard
                    </div>
                </div>

            </main>
        </div>
    );
};
export default Dashboard;