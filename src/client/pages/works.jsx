import React from "react";
import { LightBox } from "react-lightbox-pack";
import {Link} from "react-router-dom";

import "../../_dist/css/main.css";

import Pagination from "../components/pagination/pagination";

import HomeHeader from "../components/header/header";
import Footer from "../components/footer/footer";
import HomePackages from "../components/packages";


import data from "../../data/gallery.json";

let PageSize = 8;

const  Works = () => {

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
        <div className="works">
            <HomeHeader/>
            <div className="works-content wrapper">
                <div className="works-opening display-space-between padding-top-bottom-2rem text-left">
                  <div className="heading">
                      <h1>Our works</h1>
                      <h3>Total <span className="orange">345</span></h3>
                  </div>
                    <form action="" className="display-space-between sort-wrapper">
                        <small>Sort</small>
                        <div className="form-group">
                            <select name="" id="">
                                <option value="">All</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className="works-gallery margin-top-2rem">
                    {currentTableData.map((item, index) => (
                        <div className="img-holder">
                            <img
                                key={item.id}
                                src={item.image}
                                alt={item.title}
                                style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
                                onClick={() => {
                                    lightBoxHandler(true, index);
                                }}
                            />
                        </div>
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
                </div>

                {/*<div className="pagination display-inline-flex margin-top-2rem">*/}
                {/*    <button className="pagination-btn">*/}
                {/*        <i className="fas fa-arrow-left"/>*/}
                {/*    </button>*/}
                {/*    <button className="pagination-btn">1</button>*/}
                {/*    <button className="pagination-btn active">2</button>*/}
                {/*    <button className="pagination-btn">*/}
                {/*        <i className="fas fa-arrow-right"/>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <Pagination
                    className="pagination"
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>

            <HomePackages/>
            <div className="hero">
                <div className="hero-wrapper">
                    <div className="wrapper open-letter text-left">
                        <div className="title">
                            <h1 className="text-deco">New dawn</h1>
                            <h1 className="text-deco">wedding offer </h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, magni?</p>
                        <h2>includes photography and video</h2>
                        <h4>Redeem offer at</h4>
                        <h1 className="orange">K 5,000</h1>
                        <div className="options margin-top-2rem display-inline-flex">
                            <Link to="" className="btn learn-btn">Redeem</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Works;