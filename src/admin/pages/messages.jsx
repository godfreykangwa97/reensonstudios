import React from "react";
import SideBar from "../components/sidebar/sidebar";
import Header from "../components/header/header";

const Messages = () => {
    return (
        <div className="wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="messages">
                    Messages
                </div>
            </main>
        </div>
    );
};
export default Messages;