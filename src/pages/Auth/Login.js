import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Online Placement System</h1>

                <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">

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
                                        <button className="btn btn-success w-100 py-3" type="submit">Sign In</button>
                                    </div>
                                </div>
                            </form>
                            <p className="mt-3">Don't have an account <Link to="/register">Register</Link></p>
                        </div>
                    </div>

            </div>
        </div>


    )
}

export default Login;