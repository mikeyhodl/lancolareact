import './App.css';

function App() {
  return (
    <div className="App">
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
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-1.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="bulk-sms.html">Bulk <br/> SMS</a></h3>
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
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-2.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="management-systems.html">Management <br/>  Systems</a></h3>
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
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-3.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="computer-solutions.html">Computer <br/> Solutions</a></h3>
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
                                    <img src="assets/images/service/s-shape-2.png" alt=""/>
                                </div>
                                <div class="service-icon">
                                    <img src="assets/images/service/service-4.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title"><a href="digital-marketing.html">Digital <br/> Marketing</a></h3>
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
                                    <img src="assets/images/fer-1.png" alt=""/>
                                </div>
                                <div class="features-content">
                                    <h3 class="title">Bulk SMS</h3>
                                    <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                                </div>
                            </div>
                            <div class="features-item features-2">
                                <div class="features-icon">
                                    <img src="assets/images/fear-4.png" alt=""/>
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
                                    <img src="assets/images/fear-2.png" alt=""/>
                                </div>
                                <div class="features-content">
                                    <h3 class="title">Digital marketing</h3>
                                    <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                                </div>
                            </div>
                            <div class="features-item features-4">
                                <div class="features-icon">
                                    <img src="assets/images/fear-5.png" alt=""/>
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
                                    <img src="assets/images/fear-3.png" alt=""/>
                                </div>
                                <div class="features-content">
                                    <h3 class="title">CCTV Installtions</h3>
                                    <p>Accelerate innovation with world-class tech teams. Our all service offerings to enhance </p>
                                </div>
                            </div>
                            <div class="features-item features-6">
                                <div class="features-icon">
                                    <img src="assets/images/fear-6.png" alt=""/>
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
    </div>
  );
}

export default App;
