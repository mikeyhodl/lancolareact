import React from 'react'

export default function About() {
  return (
    <div>
        <div class="offcanvas offcanvas-start" id="offcanvasExample">
            <div class="offcanvas-header">
                {/* <!-- Offcanvas Logo Start --> */}
                <div class="offcanvas-logo">
                    <a href="./"><img src="assets/images/logo-white.png" alt=""/></a>
                </div>
                {/* <!-- Offcanvas Logo End --> */}
                <button type="button" class="close-btn" data-bs-dismiss="offcanvas"><i class="flaticon-close"></i></button>
            </div>

            {/* <!-- Offcanvas Body Start --> */}
            <div class="offcanvas-body">
                <div class="offcanvas-menu">
                    <ul class="main-menu">
                        <li class="active-menu">
                            <a href="./">Home</a>
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
                        </li>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- Offcanvas Body End --> */}
        </div>
        {/* <!-- Offcanvas End --> */}
        {/* <!-- Page Banner End --> */}

        {/* <!-- About Start --> */}
        <div class="section about-section section-padding">
            <div class="container">
                {/* <!-- About Wrap Start --> */}
                <div class="about-wrap">
                    <div class="row">
                        <div class="col-lg-6">
                            {/* <!-- About Thumb Wrap Start --> */}
                            <div class="about-thumb-wrap">
                                <div class="about-thumb-small">
                                    <img src="assets/images/about-1.jpg" alt=""/>
                                </div>
                                <div class="about-thumb-big">
                                    <img src="assets/images/about-2.jpg" alt=""/>
                                </div>
                                <div class="about-thumb-shape">
                                    <img src="assets/images/ab-shape.png" alt=""/>
                                </div>
                                {/* <!-- <div class="play-btn">
                                    <a class="popup-video" href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U"><i class="fas fa-play"></i></a>
                                </div> --> */}
                            </div>
                            {/* <!-- About Thumb Wrap End --> */}
                        </div>
                        <div class="col-lg-6">
                            {/* <!-- About Content Start --> */}
                            <div class="about-content">
                                <div class="section-title">
                                    <h3 class="sub-title">Who We Are</h3>
                                    <h2 class="title">A company with a mission of providing IT solutions to all our clients irrespective of
                                        their sizes.</h2>
                                </div>
                                <p><strong>LancolaTech Company</strong> was established in response to a growing niche market for IT
                                    solution within diverse sectors including government, non-governmental rganizations,
                                    cooperatives, and state corporations, private industrial and commercial corporations; Among other
                                    consumers of products and services.</p>
                                
                            </div>
                            {/* <!-- About Content End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- About Wrap End --> */}
            </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Service Start --> */}
        <div class="section service-section service-section-5">
            <div class="container">
                <div class="service-wrap">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            {/* <!-- Service Item Start --> */}
                            <div class="service-item about-service-item text-center">
                                <div class="shape-1"></div>
                                <div class="shape-2">
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-1.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="#">Mission</a></h3>
                                    <p>To provide practical innovative and cutting edgesolutions to our clients diverse supply chain requirements by delivering quality value efficiencies in our products and services.</p>
                                </div>
                            </div>
                            {/* <!-- Service Item End --> */}
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            {/* <!-- Service Item Start --> */}
                            <div class="service-item about-service-item text-center">
                                <div class="shape-1"></div>
                                <div class="shape-2">
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-2.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="#">Vision</a></h3>
                                    <p>To be an outstanding brand and market leader provider in “IT Solutions provision “of quality services synonymous with reliability, integrity and success.</p>
                                </div>
                            </div>
                            {/* <!-- Service Item End --> */}
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            {/* <!-- Service Item Start --> */}
                            <div class="service-item about-service-item text-center">
                                <div class="shape-1"></div>
                                <div class="shape-2">
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-3.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="#">Our Objectives</a></h3>
                                    <p><ul>
                                        <li>To exceed customer expectations through continuous improvement in quality, service productivity and time compression.</li>
                                        <li>To build long term partnership with our clients.</li>
                                    </ul> </p>
                                </div>
                            </div>
                            {/* <!-- Service Item End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!--  Skill Start --> */}
        <div class="section skill-section skill-section-2">
            <div class="container">
                <div class="skill-wrap">
                    {/* <!--  Skill Content Wrap Start --> */}
                    <div class="skill-content-wrap">
                        <div class="row align-items-center">
                            <div class="col-lg-5">
                                {/* <!--  Skill Content Left Start --> */}
                                <div class="skill-content-left">
                                    <div class="experience">
                                        <h2 class="number">6+</h2>
                                        <span>Years of experience</span>
                                    </div>
                                    <h3 class="title">We run all kinds of <span>IT services</span> that vow your success</h3>
                                </div>
                                {/* <!--  Skill Content Left End --> */}
                            </div>
                            <div class="col-lg-7">
                                {/* <!--  Skill Content Right Start --> */}
                                <div class="skill-content-right">
                                    <h3 class="title">Accelerate innovation with world-class tech teams We’ll match you to an entire remote technology</h3>
                                    <div class="skill-bar-wrap">
                                        {/* <!--  Skill Item Start  --> */}
                                        <div class="skill-item">
                                            <div class="skill-header">
                                                <h5 class="skill-title">IT Managment</h5>
                                                <span class="skill-percentage">
                                                <span class="counter">90</span>
                                                %
                                                </span>
                                            </div>
                                            <div class="skill-bar">
                                                <div class="bar-inner">
                                                    <div class="progress-line" data-width="90"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--  Skill Item End  --> */}
                                        {/* <!--  Skill Item Start  --> */}
                                        <div class="skill-item">
                                            <div class="skill-header">
                                                <h5 class="skill-title">Data Security</h5>
                                                <span class="skill-percentage">
                                                <span class="counter">90</span>
                                                %
                                                </span>
                                            </div>
                                            <div class="skill-bar">
                                                <div class="bar-inner">
                                                    <div class="progress-line" data-width="90"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--  Skill Item End  --> */}
                                        {/* <!--  Skill Item Start  --> */}
                                        <div class="skill-item">
                                            <div class="skill-header">
                                                <h5 class="skill-title">Solutions</h5>
                                                <span class="skill-percentage">
                                                <span class="counter">95</span>
                                                %
                                                </span>
                                            </div>
                                            <div class="skill-bar">
                                                <div class="bar-inner">
                                                    <div class="progress-line" data-width="90"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--  Skill Item End  --> */}
                                    </div>
                                </div>
                                {/* <!--  Skill Content Right End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!--  Skill Content Wrap End --> */}
                </div>
            </div>
        </div>
        {/* <!--  Skill End --> */}

        {/* <!-- Counter Start --> */}
        <div class="section counter-section" style="background-image: url(assets/images/bg/counter-bg.jpg);">
            <div class="container">
                <div class="counter-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            {/* <!-- Counter Item Start --> */}
                            <div class="counter-item text-center">
                                <div class="counter-icon">
                                    <img src="assets/images/counter/counter-1.png" alt=""/>
                                </div>
                                <div class="counter-text">
                                    <span>
                                    <span class="counter">10</span>+
                                    </span>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                            {/* <!-- Counter Item End --> */}
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            {/* <!-- Counter Item Start --> */}
                            <div class="counter-item text-center">
                                <div class="counter-icon">
                                    <img src="assets/images/counter/counter-2.png" alt=""/>
                                </div>
                                <div class="counter-text">
                                    <span>
                                    <span class="counter">100</span>+
                                    </span>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            {/* <!-- Counter Item End --> */}
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            {/* <!-- Counter Item Start --> */}
                            <div class="counter-item text-center">
                                <div class="counter-icon">
                                    <img src="assets/images/counter/counter-3.png" alt=""/>
                                </div>
                                <div class="counter-text">
                                    <span>
                                    <span class="counter">50</span>+
                                    </span>
                                    <p>Websites Designed </p>
                                </div>
                            </div>
                            {/* <!-- Counter Item End --> */}
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            {/* <!-- Counter Item Start --> */}
                            <div class="counter-item text-center">
                                <div class="counter-icon">
                                    <img src="assets/images/counter/counter-4.png" alt=""/>
                                </div>
                                <div class="counter-text">
                                    <span>
                                    <span class="counter">100</span>+
                                    </span>
                                    <p>Clients Supoort Done</p>
                                </div>
                            </div>
                            {/* <!-- Counter Item End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Counter End --> */}

        {/* <!-- Testimonial Start --> */}
        
        {/* <!-- Testimonial End --> */}

        {/* <!-- Brand Logo Start --> */}
        <div class="section Brand-section Brand-section-2">
            <div class="container">
                {/* <!-- Brand Wrapper Start --> */}
                <div class="brand-wrapper brand-wrapper-2 text-center">
                    <h3 class="brand-title">Trusted by <span>Multiple</span> companies</h3>

                    {/* <!-- Brand Active Start --> */}
                    <div class="brand-active">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-1.jpg" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-2.png" alt="Brand" height="75" width="75"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-3.png" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-4.png" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-5.png" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-6.png" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-7.jpg" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-8.png" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                                {/* <!-- Single Brand Start --> */}
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-9.png" alt="Brand"/>
                                </div>
                                <div class="swiper-slide single-brand">
                                    <img src="assets/images/brand/brand-10.png" alt="Brand"/>
                                </div>
                                {/* <!-- Single Brand End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Brand Active End --> */}
                </div>
                {/* <!-- Brand Wrapper End --> */}
            </div>
        </div>
    </div>
  )
}
