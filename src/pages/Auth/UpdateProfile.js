import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
  import { createBrowserHistory } from "history";

const UpdateProfile = () => {

    return (
        <div className="container-xxl py-5">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">UPDATE PROFILE</h1>

                <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password"/>
                                            <label for="confirmpassword">Confirm password</label>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                    <select class="form-select">
                                    <option selected disabled value="Role">Role</option>
                                    <option value="employer">Employer</option>
                                    <option value="student">Student</option>
                                    </select>
                                    </div>

                                    
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="domain" placeholder="Domain"/>
                                            <label for="domain">Domain</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="address" placeholder="Address"/>
                                            <label for="address">Address</label>
                                        </div>
                                    </div>
                                    
                                    
                                        
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="education" placeholder="Education"/>
                                            <label for="education">Education</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="degree" placeholder="Last degree"/>
                                            <label for="degree">Last degree</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea class="form-control" placeholder="About me" id="about_me"></textarea>
                                            <label for="about_me">About me</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                    <label className="btn btn-success w-100 py-3" for="cv">Upload CV</label>
                                        <input type="file" style={{display:'none'}} className="form-control" id="cv"/>
                                    </div>
                                    
                                    <div className="col-12">
                                        <button className="btn btn-success w-100 py-3" type="submit">Update</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

            </div>
        </div>
    )
}

export default UpdateProfile;