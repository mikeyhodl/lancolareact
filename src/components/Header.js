import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import About from './About';
  import Home from './Home';

export default function () {
  return (
    <div id="header" class="section header-section header-section-2 transparent-header">
            <div class="container">

                {/* <!-- Header Wrap Start  --> */}
                <div class="header-wrap">

                    <div class="header-logo">
                        <a href="./"><img src="assets/images/logo.png" alt=""/></a>
                    </div>

                    <div class="header-menu header-menu-2 d-none d-lg-block">
                        <ul class="main-menu">
                            <li class="active-menu">
                                <a href="./">Home</a>
                                {/* <!-- <ul class="sub-menu">
                                    <li><a href="./">Home One</a></li>
                                    <li class="active"><a href="index-2.html">Home Two</a></li>
                                    <li><a href="index-3.html">Home Three</a></li>
                                    <li><a href="index-4.html">Home Four</a></li>
                                    <li><a href="index-5.html">Home Five</a></li>
                                    <li><a href="index-6.html">Home Six</a></li>
                                </ul> --> */}
                            </li>
                            <li>
                                <a href="about.html">About Us</a>
                            </li>
                            <li><a href="javascript:;">Our Services</a>
                                <ul class="sub-menu">
                                    <li><a href="bulk-sms.html">Bulk SMS</a></li>
                                    <li><a href="management-systems.html">Management Systems</a></li>
                                    <li><a href="computer-solutions.html">Computer Solutions</a></li>
                                    <li><a href="computer-accessories.html">Computer Accessories</a></li>
                                    <li><a href="CCTV-installations.html">CCTV Installtions</a></li>
                                    <li><a href="structured-cabling-and-networking.html">Structured Cabling and Networking</a></li>
                                    <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                    <li><a href="web-development.html">Web Development</a></li>
                                </ul>
                            </li>
                            <li><a href="https://blog.lancolatech.co.ke" target="_blank">Blog</a>
                                {/* <!-- <ul class="sub-menu">
                                    <li><a href="blog.html">Blog Grid</a></li>
                                    <li><a href="blog-standard.html">Latest News</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul> --> */}
                            </li>
                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Header Meta Start --> */}
                    <div class="header-meta">
                        {/* <!-- Header Search Start -->
                        <!-- Header Search End -->

                        <!-- Header Cart Start -->
                        
                        <!-- Header Cart End -->
                        <!-- Header Info Start --> */}
                        <div class="header-info d-none d-md-flex">
                            <div class="info-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="info-text">
                                <span>For Enquiries</span>
                                <span class="number"><a href="tel:254115588872">+254 115 588 872</a></span>
                                <span class="number"><a href="tel:254715223428">+254 715 223 428</a></span>
                            </div>
                        </div>
                        {/* <!-- Header Info End --> */}
                        <div class="header-btn-2 d-none d-xl-block">
                            <a class="btn" href="mailto:info@lancolatech.co.ke" target="_blank">Email Us!</a>
                        </div>
                        {/* <!-- Header Toggle Start --> */}
                        <div class="header-toggle d-lg-none">
                            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        {/* <!-- Header Toggle End --> */}
                    </div>
                    {/* <!-- Header Meta End  --> */}

                </div>
                {/* <!-- Header Wrap End  --> */}

            </div>
        </div>
  )
}
