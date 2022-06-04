import React from 'react'

export default function Home() {
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
                <a href="./"><img src="assets/images/logo.png" alt=""></a>
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
                {/* <!-- Header Search Start --> */}
                {/* <!-- Header Search End --> */}

                {/* <!-- Header Cart Start --> */}
                
                {/* <!-- Header Cart End --> */}
                {/* <!-- Header Info Start --> */}
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
{/* <!-- Header End --> */}

{/* <!-- Offcanvas Start--> */}
<div class="offcanvas offcanvas-start" id="offcanvasExample">
    <div class="offcanvas-header">
        {/* <!-- Offcanvas Logo Start --> */}
        <div class="offcanvas-logo">
            <a href="./"><img src="assets/images/logo-white.png" alt=""></a>
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


{/* <!-- Hero Start --> */}
<div class="section tech-hero-section-2 d-flex align-items-center" style="background-image: url(assets/images/hero-2.jpg);">
    <div class="shape-1"></div>
    <div class="shape-2"></div>
    <div class="shape-3"></div>
    <div class="shape-4"></div>
    <div class="shape-5"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                {/* <!-- Hero Content Start --> */}
                <div class="hero-content">
                    <h3 class="sub-title" data-aos-delay="600" data-aos="fade-up">Unlocking Potential & Oppotunities</h3>
                    <h2 class="title" data-aos="fade-up" data-aos-delay="800">A Company focused on top technology</h2>
                    <div class="hero-btn" data-aos="fade-up" data-aos-delay="1000">
                        <a class="btn" href="/about.html">Read More</a>
                    </div>
                </div>
                {/* <!-- Hero Content End --> */}
            </div>
        </div>
    </div>
</div>
{/* <!-- Hero End --> */}
<div class="section service-section">
    <div class="container">
        <div class="service-wrap">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Service Item Start --> */}
                    <div class="service-item text-center">
                        <div class="shape-1"></div>
                        <div class="shape-2">
                            <img src="assets/images/service/s-shape-2.png" alt="">
                        </div>
                        <div class="service-icon">
                            <img src="assets/images/service/service-1.png" alt="">
                        </div>
                        <div class="service-content">
                            <h3 class="title"><a href="bulk-sms.html">Bulk <br> SMS</a></h3>
                            <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                        </div>
                    </div>
                    {/* <!-- Service Item End --> */}
                </div>
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Service Item Start --> */}
                    <div class="service-item text-center">
                        <div class="shape-1"></div>
                        <div class="shape-2">
                            <img src="assets/images/service/s-shape-2.png" alt="">
                        </div>
                        <div class="service-icon">
                            <img src="assets/images/service/service-2.png" alt="">
                        </div>
                        <div class="service-content">
                            <h3 class="title"><a href="management-systems.html">Management <br>  Systems</a></h3>
                            <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                        </div>
                    </div>
                    {/* <!-- Service Item End --> */}
                </div>
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Service Item Start --> */}
                    <div class="service-item text-center">
                        <div class="shape-1"></div>
                        <div class="shape-2">
                            <img src="assets/images/service/s-shape-2.png" alt="">
                        </div>
                        <div class="service-icon">
                            <img src="assets/images/service/service-3.png" alt="">
                        </div>
                        <div class="service-content">
                            <h3 class="title"><a href="computer-solutions.html">Computer <br> Solutions</a></h3>
                            <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                        </div>
                    </div>
                    {/* <!-- Service Item End --> */}
                </div>
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Service Item Start --> */}
                    <div class="service-item text-center">
                        <div class="shape-1"></div>
                        <div class="shape-2">
                            <img src="assets/images/service/s-shape-2.png" alt="">
                        </div>
                        <div class="service-icon">
                            <img src="assets/images/service/service-4.png" alt="">
                        </div>
                        <div class="service-content">
                            <h3 class="title"><a href="digital-marketing.html">Digital <br> Marketing</a></h3>
                            <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                        </div>
                    </div>
                    {/* <!-- Service Item End --> */}
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Service-2 Start --> */}

{/* <!-- Service-2 End --> */}

{/* <!-- About-2 Start --> */}

{/* <!-- About-2 End --> */}

{/* <!-- Video Start --> */}
<div class="section video-section" style="background-image: url(assets/images/video-img.jpg);">
    <div class="container">
        {/* <!-- Video Wrap Start --> */}
        <div class="video-wrap">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                    {/* <!-- Video Content Start --> */}
                    <div class="video-content text-center">
                        <h2 class="title">We provide truly prominent IT solutions for your success</h2>
                        {/* <!-- <div class="video-play">
                            <a class="popup-video" href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U">
                                <i class="fas fa-play"></i>
                                <span>Watch Intro</span>
                            </a>
                        </div> --> */}
                    </div>
                    {/* <!-- Video Content End --> */}
                </div>
            </div>
        </div>
        {/* <!-- Video Wrap End --> */}
    </div>
</div>
{/* <!-- Video End --> */}

{/* <!-- Features-2 Start --> */}
<div class="section features-section-2 section-padding">
    <div class="container">
        {/* <!-- Features-2 Wrap Start --> */}
        <div class="features-wrap-2">
            <div class="section-title2 text-center">
                <h3 class="sub-title">focus on full innovation</h3>
                <h2 class="title">Designed for <span>IT Services</span></h2>
                <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
            </div>
            {/* <!-- Features-2 Item Wrap Start --> */}
            <div class="features-item-wrap">
                {/* <!-- Features Item Box Start --> */}
                <div class="features-item-box features-box-1">
                    <div class="features-item features-1">
                        <div class="features-icon">
                            <img src="assets/images/fer-1.png" alt="">
                        </div>
                        <div class="features-content">
                            <h3 class="title">Bulk SMS</h3>
                            <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                        </div>
                    </div>
                    <div class="features-item features-2">
                        <div class="features-icon">
                            <img src="assets/images/fear-4.png" alt="">
                        </div>
                        <div class="features-content">
                            <h3 class="title">Web Development</h3>
                            <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Features Item Box End --> */}
                {/* <!-- Features Item Box Start --> */}
                <div class="features-item-box features-box-2">
                    <div class="features-item features-3">
                        <div class="features-icon">
                            <img src="assets/images/fear-2.png" alt="">
                        </div>
                        <div class="features-content">
                            <h3 class="title">Digital marketing</h3>
                            <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                        </div>
                    </div>
                    <div class="features-item features-4">
                        <div class="features-icon">
                            <img src="assets/images/fear-5.png" alt="">
                        </div>
                        <div class="features-content">
                            <h3 class="title">Seo & Optimization</h3>
                            <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Features Item Box End --> */}
                {/* <!-- Features Item Box Start --> */}
                <div class="features-item-box features-box-3">
                    <div class="features-item features-5">
                        <div class="features-icon">
                            <img src="assets/images/fear-3.png" alt="">
                        </div>
                        <div class="features-content">
                            <h3 class="title">CCTV Installtions</h3>
                            <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                        </div>
                    </div>
                    <div class="features-item features-6">
                        <div class="features-icon">
                            <img src="assets/images/fear-6.png" alt="">
                        </div>
                        <div class="features-content">
                            <h3 class="title">Computer Accessories</h3>
                            <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Features Item Box End --> */}
            </div>
            {/* <!-- Features-2 Item Wrap End --> */}
        </div>
        {/* <!-- Features-2 Wrap End --> */}
    </div>
</div>
{/* <!-- Features-2 End --> */}

{/* <!-- Pricing Start --> */}

{/* <!-- Pricing End --> */}

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
                            <img src="assets/images/brand/brand-1.jpg" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-2.png" alt="Brand" height="75" width="75">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-3.png" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-4.png" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-5.png" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-6.png" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-7.jpg" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-8.png" alt="Brand">
                        </div>
                        {/* <!-- Single Brand End --> */}
                        {/* <!-- Single Brand Start --> */}
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-9.png" alt="Brand">
                        </div>
                        <div class="swiper-slide single-brand">
                            <img src="assets/images/brand/brand-10.png" alt="Brand">
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

{/* <!-- Cta Start --> */}
<div class="section cta-section-2" style="background-image: url(assets/images/bg/cta-2-bg.jpg);">
    <div class="container">
        {/* <!-- Cta Wrap Start --> */}
        <div class="cta-wrap-2">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    {/* <!-- Cta Content Start --> */}
                    <div class="cta-content">
                        <h3 class="title">Start your journey with us</h3>
                    </div>
                    {/* <!-- Cta Content End --> */}
                </div>
                <div class="col-lg-6">
                    {/* <!-- Cta Button Start --> */}
                    <div class="cta-btn">
                        <a class="btn" href="mailto:info@lancolatech.co.ke">Request A Quote</a>
                        <a class="btn btn-white" href="tel:254115588872">Call Us Now!</a>
                    </div>
                    {/* <!-- Cta Button End --> */}
                </div>
            </div>
        </div>
        {/* <!-- Cta Wrap End --> */}
    </div>
</div>
{/* <!-- Cta End --> */}




{/* <!-- Footer Section Start --> */}
<div class="section footer-section footer-section-2" style="background-image: url(assets/images/bg/footer-bg-2.jpg);">

    <div class="container">
        {/* <!-- Footer Widget Wrap Start --> */}
        <div class="footer-widget-wrap footer-widget-wrap-2">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget-about">
                        <a class="footer-logo" href="./"><img src="assets/images/logo.png" alt="Logo"></a>
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


{/* <!-- WhatsApp START--> */}
<script type="text/javascript">
(function () {
    var options = {
        whatsapp: "254115588872",
        facebook: "246152853989129",
        call_to_action: "",
        position: "left",
        button_color: "#54d6eb",
        pre_filled_message: "Hello! Lancola Tech Company Limited.",
        greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.",
    };
    var proto = document.location.protocol, host = "thedentalspecialistscentre.co.ke", url = proto + "//cdn." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
</script>

{/* <!-- WhatsApp END --> */}

{/* <!-- Main JS --> */}
<script src="assets/js/main.js"></script>
    </React.Fragment>
  )
}
