import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import '../css/style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

  const Profile = () => {
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


        {/* Job Detail Starts */}
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gy-5 gx-4">
                    <div class="col-lg-8">
                        <div class="d-flex align-items-center mb-3">
                            <div class="text-start">
                                <h3 class="mb-2">Shahid Khan</h3>
                                <p>MS Softare Engineering</p>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h4 class="mb-3">About Me</h4>
                            <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
                            
                            <h4 class="mb-3">Last Degree</h4>
                            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                        </div>

                        <div>
                            <p>Enter your password and press continue to update profile</p>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                            <label for="password">Password</label>
                        </div>
                        <div className="col-12">
                            <Link to="/student/profile/update">
                            <button className="btn btn-success w-100 py-2 mt-2 mb-2" type="submit">Continue</button>
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                    
        
                </div>
            </div>
        </div>
        {/* Job Detail Ends  */}


        </div>
    )
  }

  export default Profile;