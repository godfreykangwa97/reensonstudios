import React from "react";
import { Link} from "react-router-dom";

import { LightBox } from "react-lightbox-pack";

import SideBar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

import Pagination from "../../../client/components/pagination/pagination";

import data from "../../../data/gallery";
let PageSize = 5;
const MonitorUsers = () => {


    // State
    const [toggle, setToggle] =  React.useState(false);
    const [sIndex, setSIndex] =  React.useState(0);

    // Handler
    const  lightBoxHandler  = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    const [currentPage, setCurrentPage] = React.useState(1);

    const currentTableData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div className="main-wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="contents">
                    <nav className="page-nav">
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/monitor/users" className="page-active">Monitor users</Link>
                    </nav>
                    <div className="opening">
                        <div className="opening-header">
                            <h3>Monitor users</h3>
                            <Link to="/admin/register/user" className="link"><i className="fas fa-pen"/><span>Register</span></Link>
                        </div>
                    </div>
                    <div className="users margin-top-2rem" style={{backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px"}}>
                        <div className="table-holder display-space-between">
                            <h2>Total <span className="orange">2345</span></h2>
                            <form action="" className="sort-wrapper display-space-between">
                                <small>Sort</small>
                                <select name="" id="">
                                    <option value="">All</option>
                                </select>
                            </form>
                        </div>
                        <table className="table w-100" style={{marginTop: "2rem"}}>
                            <thead>
                            <th><input type="checkbox"/></th>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Published</th>
                            <th>Options</th>
                            </thead>

                            <tbody className="padding-top-bottom-2rem">
                            {currentTableData.map((item, index) => (
                                <tr className="w-100">
                                    <td><input type="checkbox"/></td>
                                    <td>
                                        <img
                                            key={item.id}
                                            src={item.image}
                                            alt={item.title}
                                            style={{ maxHeight:  "50px", maxWidth:  "50px", borderRadius: "50%" }}
                                            onClick={() => {
                                                lightBoxHandler(true, index);
                                            }}
                                        />
                                    </td>
                                    <td><small>{item.title}</small></td>
                                    <td><small>category</small></td>
                                    <td><small>Published</small></td>
                                    <td><small>12 Aug, 2021</small></td>
                                    <td className="">
                                        <button className="icon-btn"><i className="fas fa-pen"/></button>
                                        <button className="icon-btn"><i className="fas fa-trash"/></button>
                                    </td>
                                </tr>
                            ))}
                            <LightBox
                                state={toggle}
                                event={lightBoxHandler}
                                data={currentTableData}
                                imageWidth="60vw"
                                imageHeight="70vh"
                                thumbnailHeight={50}
                                thumbnailWidth={50}
                                setImageIndex={setSIndex}
                                imageIndex={sIndex}
                            />
                            </tbody>
                        </table>
                        <Pagination
                            className="pagination"
                            currentPage={currentPage}
                            totalCount={data.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                </div>

            </main>
        </div>
    );
};
export default MonitorUsers;