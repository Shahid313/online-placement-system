import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import '../../css/style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';


const EmployerDashboard = () => {
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
                <Link to="/employer/postjob" className="btn btn-success rounded-0 py-4 px-lg-5 d-none d-lg-block">
                    Post A Job
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="arrowIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </Link>
            </div>
        </nav>
        {/* Navbar End */}

        {/* Jobs Listing Starts*/}

        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">EMPLOYER DASHBOARD</h1>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    
                    <div className="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">

                            {/* job item 1 starts */}
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <div className="text-start">
                                            <h5 className="mb-3">Software Engineer</h5>
                                            <Link className="btn btn-sm btn-success" to="/employer/applicationstojob">See applications (13)</Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3 justify-content-between" style={{width:'45%'}}>
                                            <Link className="btn btn-sm btn-success" to="/employer/updatejob">Update</Link>
                                            <Link className="btn btn-sm btn-danger" to="/apply">Delete</Link>
                                        </div>
                                        <small className="text-truncate">Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            {/* job item 1 ends */}


                            {/* job item 2 starts */}
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <div className="text-start">
                                            <h5 className="mb-3">Software Engineer</h5>
                                            <Link className="btn btn-sm btn-success" to="/employer/applicationstojob">See applications (23)</Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3 justify-content-between" style={{width:'45%'}}>
                                            <Link className="btn btn-sm btn-success" to="/employer/updatejob">Update</Link>
                                            <Link className="btn btn-sm btn-danger" to="/apply">Delete</Link>
                                        </div>
                                        <small className="text-truncate">Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            {/* job item 2 ends */}
                            <a className="btn btn-success py-3 px-5" href="#">Browse More Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Jobs Listing Ends */}



        </div>
    )
}

export default EmployerDashboard;