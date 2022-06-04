import React from 'react'

export default function 
() {
  return (
    <React.Fragment>
        <div class="main-wrapper">


{/* <!-- Preloader start --> */}
<div id="preloader">
    <div class="preloader">
        <span></span>
        <span></span>
    </div>
</div>
{/* <!-- Preloader End --> */}

{/* <!-- Header Start  --> */}
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
                    <a class="btn" href="mailto:info@lancolatech.co.ke">Email Us!</a>
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
{/* <!-- Header End --> */}

{/* <!-- Offcanvas Start--> */}
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
                                {/* <!--  Skill Item End  -->
                                <!--  Skill Item Start  --> */}
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
{/* <!-- Counter End -->

<!-- Testimonial Start -->

<!-- Testimonial End --> */}

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
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-2.png" alt="Brand" height="75" width="75"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-3.png" alt="Brand"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-4.png" alt="Brand"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-5.png" alt="Brand"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-6.png" alt="Brand"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-7.jpg" alt="Brand"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-8.png" alt="Brand"/>
                        </div>
                        {/* <!-- Single Brand End -->
                        <!-- Single Brand Start --> */}
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
{/* <!-- Brand Logo End --> */}

{/* <!-- Footer Section Start --> */}
<div class="section footer-section footer-section-2" style="background-image: url(assets/images/bg/footer-bg-2.jpg);">

    <div class="container">
        {/* <!-- Footer Widget Wrap Start --> */}
        <div class="footer-widget-wrap footer-widget-wrap-2">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget-about">
                        <a class="footer-logo" href="./"><img src="assets/images/logo.png" alt="Logo"/></a>
                        <div class="widget-info widget-info-2">
                            <ul>
                                <li>
                                    <div class="info-icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <div class="info-text">
                                        <span><a href="tel:254115588872">+254 115 588 872</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <i class="far fa-envelope-open"></i>
                                    </div>
                                    <div class="info-text">
                                        <span><a href="mailto:info@lancolatech.co.ke">info@lancolatech.co.ke</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <i class="flaticon-pin"></i>
                                    </div>
                                    <div class="info-text">
                                        <span>Grand Pri 3rd Floor Room 301, Eldoret</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                </div>
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget footer-widget-2">
                        <h4 class="footer-widget-title">Useful Links</h4>

                        <div class="widget-link">
                            <ul class="link">
                                <li><a href="terms-and-conditions.txt" target="_blank">Terms & Conditions</a></li>
                                <li><a href="about.html">About Company</a></li>
                                <li><a href="privacy-policy.html">Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                </div>
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget footer-widget-2">
                        <h4 class="footer-widget-title">Our Services</h4>

                        <div class="widget-link">
                            <ul class="link">
                                <li><a href="bulk-sms.html">Bulk SMS</a></li>
                                <li><a href="management-systems.html">Managment Systems</a></li>
                                <li><a href="computer-solutions.html">Computer Solutions</a></li>
                                <li><a href="digital-marketing.html">Digital Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                </div>
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget footer-widget-2">
                        <h4 class="footer-widget-title">Support</h4>

                        <div class="widget-link">
                            <ul class="link">
                                <li><a href="support.html">Support</a></li>
                                <li><a href="faqs.html">FAQS</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                </div>
            </div>
        </div>
        {/* <!-- Footer Widget Wrap End --> */}
    </div>

    {/* <!-- Footer Copyright Start --> */}
    <div class="footer-copyright-area footer-copyright-2">
        <div class="container">
            <div class="footer-copyright-wrap">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        {/* <!-- Footer Copyright Text Start --> */}
                        <div class="copyright-text">
                            <p> &copy; <script>document.write(new Date().getFullYear())</script> <a href="https://lancolatech.co.ke/" target="_blank">Lancola Tech Company</a></p>
                        </div>
                        {/* <!-- Footer Copyright Text End --> */}
                    </div>
                    <div class="col-lg-6 col-md-6">
                        {/* <!-- Footer Copyright Social Start --> */}
                        <div class="copyright-social">
                            <ul class="social">
                                <li><a href="https://www.facebook.com/Lancola-Tech-246152853989129" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- Footer Copyright Social End --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer Copyright End --> */}
</div>
{/* <!-- Footer Section End --> */}

{/* <!-- back to top start --> */}
<div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
</div>
{/* <!-- back to top end --> */}

</div>

{/* <!-- JS
============================================ --> */}
<script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
<script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>

{/* <!-- Bootstrap JS --> */}
<script src="assets/js/plugins/popper.min.js"></script>
<script src="assets/js/plugins/bootstrap.min.js"></script>

{/* <!-- Plugins JS --> */}
<script src="assets/js/plugins/swiper-bundle.min.js"></script>
<script src="assets/js/plugins/aos.js"></script>
<script src="assets/js/plugins/waypoints.min.js"></script>
<script src="assets/js/plugins/back-to-top.js"></script>
<script src="assets/js/plugins/jquery.counterup.min.js"></script>
<script src="assets/js/plugins/appear.min.js"></script>
<script src="assets/js/plugins/jquery.magnific-popup.min.js"></script>


{/* <!--====== Use the minified version files listed below for better performance and remove the files listed above ======--> */}


{/* <!-- Main JS --> */}
<script src="assets/js/main.js"></script>
    </React.Fragment>
  )
}
