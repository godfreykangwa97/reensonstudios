import React,  {useState, useEffect} from "react";

import { Link} from "react-router-dom";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";


import SideBar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";








const CreateBlog = () => {

    const [images, setImages] = useState([]);
    const [imagesURLs, setImagesURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImagesURLs(newImageUrls);
    }, [images]);
    function onImageChange(e) {
        setImages([...e.target.files]);
    }



    return (
        <div className="main-wrapper">
            <SideBar/>
            <main className="main">
                <Header/>
                <div className="contents">
                    <nav className="page-nav">
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/monitor/blogs">Monitor blog</Link>
                        <Link to="/admin/create/blog" className="page-active">create blog</Link>
                    </nav>
                    <div className="opening">
                        <div className="opening-header">
                            <h3>Create blog</h3>
                            <Link to="/admin/create/blog" className="link"><i className="fas fa-line-chart"/><span>Monitor</span></Link>
                        </div>
                    </div>
                    <div className="create-blog">
                        <form>
                            <div className="form-group margin-bottom-2rem p-0">
                                <label htmlFor="file">
                                    <div className="Show-Image">
                                        {imagesURLs.map(imageSrc => <img src={imageSrc} alt=""/>)}
                                    </div>
                                </label>
                            </div>

                            <div className="padded">
                                <div className="form-group">
                                    <input type="file" accept="images/*" onChange={onImageChange} id="file" hidden/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="title">Blog title</label><br/>
                                    <input type="text" name="blog-title" placeholder="title"  id="title" required/>
                                </div>

                                <div className="grid-2">
                                    <div className="form-group">
                                        <label htmlFor="title">Category</label><br/>
                                        <select name="" id="">
                                            <option value="">Photography</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Tags</label><br/>
                                        <input type="text" name="blog-title" placeholder="tags" id="tags"/>
                                    </div>
                                </div>

                               <div className="form-group padding-top-bottom-2rem">
                                   <FroalaEditorComponent tag='textarea'/>
                               </div>

                                <div className="blog-options display-space-between">
                                    <div className="form-group display-inline-flex">
                                        <label htmlFor="tags"><i className="fas fa-tag"/></label>
                                        <label htmlFor="file"><i className="fas fa-image"/></label>
                                    </div>
                                    <div className="form-group display-inline-flex">
                                        <button type="submit" className="btn submit-btn">Create</button>
                                        <button type="reset" className="btn reset-btn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    );
};
export default CreateBlog;