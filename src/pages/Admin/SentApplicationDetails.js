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

  const SentApplicationDetails = () => {
    return (
        <div className="container-xxl bg-white p-0">

        {/* Job Detail Starts */}
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gy-5 gx-4">
                    <div class="col-lg-8">
                        <div class="d-flex align-items-center mb-5">
                            <div class="text-start">
                            <h3 class="mb-4">Application Sent By</h3>
                                <h3 class="mb-2">Shahid Khan</h3>
                                <p>MS Softare Engineering</p>
                                <Link to="/">Download CV</Link>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h4 class="mb-3">Message</h4>
                            <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
                        </div>
        
                    </div>
        
                </div>
            </div>
        </div>
        {/* Job Detail Ends  */}


        </div>
    )
  }

  export default SentApplicationDetails;