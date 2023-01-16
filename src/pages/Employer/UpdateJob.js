import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { WithContext as ReactTags } from 'react-tag-input';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
import '../css/style.css';

const UpdateJob = () => {
    const KeyCodes = {
        comma: 188,
        enter: 13
      };
      
      const delimiters = [KeyCodes.comma, KeyCodes.enter];

      const [tags, setTags] = React.useState([]);

      const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
      };
    
      const handleAddition = tag => {
        if(tags.length != 5){
            setTags([...tags, tag]);
        }
        
      };

      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };
    
      const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
      };

    return (
        <div className="container-xxl bg-white p-0">

        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="#" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-success">OPS</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/student/applies" className="nav-item nav-link">Applies</Link>
                <Link to="/employer/dashboard" className="nav-item nav-link">dashboard</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link" data-bs-toggle="dropdown">
                            Pages
                            <ChevronDownIcon className="chevronDownIcon"/>
                            </a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="#" className="dropdown-item">Job Category</a>
                            <a href="#" className="dropdown-item">Testimonial</a>
                            <a href="#" className="dropdown-item">404</a>
                        </div>
                    </div>
                    <Link to="/profile" className="nav-item nav-link">Profile</Link>
                </div>
                <a href="#" className="btn btn-success rounded-0 py-4 px-lg-5 d-none d-lg-block">
                    Post A Job
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="arrowIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
            </div>
        </nav>
        {/* Navbar End */}

        {/* Post a Job Starts */}
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">UPDATE JOB</h1>

                <div>
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="jobtitle" placeholder="Job Title"/>
                                            <label for="jobtitle">Job Title</label>
                                        </div>
                                    </div>



                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea class="form-control" placeholder="Job description here" id="message"></textarea>
                                            <label for="message">Description</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea class="form-control" placeholder="Job requirements here" id="message"></textarea>
                                            <label for="message">Requirements</label>
                                        </div>
                                    </div>

                                    
                                        <ReactTags
                                        tags={tags}
                                        delimiters={delimiters}
                                        handleDelete={handleDelete}
                                        handleAddition={handleAddition}
                                        handleDrag={handleDrag}
                                        handleTagClick={handleTagClick}
                                        allowUnique={true}
                                        maxLength = "28"
                                        placeholder="Enter keywords"
                                        
                                        classNames={{
                                            tag: 'tagClass',
                                            remove: 'removeClass',
                                            tagInputField: 'tagInputFieldClass',
                                            tags: 'tagsClass',
                                        }}
                                        />
                                    


                                    <div className="col-12">
                                        <button className="btn btn-success w-100 py-3" type="submit">Post Job</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

            </div>
        </div>


        {/* Post a Job Ends */}

        </div>
    )
}

export default UpdateJob;