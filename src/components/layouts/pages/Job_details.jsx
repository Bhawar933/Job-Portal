import React from "react";
import { Link } from "react-router";

const Job_details = () => {
  return (
    <React.Fragment>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Job board HTML-5 Template </title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/favicon.ico"
        />
        {/* CSS here */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/price_rangs.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* Preloader Start */}
        {/* <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle" />
              <div className="preloader-img pere-text">
                <img src="assets/img/logo/logo.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}
        {/* Preloader Start */}
        <header>
          {/* Header Start */}
          <div className="header-area header-transparrent">
            <div className="headder-top header-sticky">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-2">
                    {/* Logo */}
                    <div className="logo">
                      <a href="/">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="menu-wrapper">
                      {/* Main-menu */}
                      <div className="main-menu">
                        <nav className="d-none d-lg-block">
                          <ul id="navigation">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/job">Find a Jobs </Link>
                            </li>
                            <li>
                              <Link to="/about">About</Link>
                            </li>
                            <li>
                              <Link to="#">Page</Link>
                              <ul className="submenu">
                                <li>
                                  <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/single-blog">Blog Details</Link>
                                </li>
                                <li>
                                  <Link to="/elements">Elements</Link>
                                </li>
                                <li>
                                  <Link to="/job_details">job Details</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      {/* Header-btn */}
                      <div className="header-btn d-none f-right d-lg-block">
                        <a href="#" className="btn head-btn1">
                          Register
                        </a>
                        <a href="#" className="btn head-btn2">
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
        </header>
        <main>
          {/* Hero Area Start*/}
          <div className="slider-area ">
            <div
              className="single-slider section-overly slider-height2 d-flex align-items-center"
              data-background="assets/img/hero/about.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>UI/UX Designer</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End */}
          {/* job post company Start */}
          <div className="job-post-company pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-between">
                {/* Left Content */}
                <div className="col-xl-7 col-lg-8">
                  {/* job single */}
                  <div className="single-job-items mb-50">
                    <div className="job-items">
                      <div className="company-img company-img-details">
                        <a href="#">
                          <img src="assets/img/icon/job-list1.png" alt="" />
                        </a>
                      </div>
                      <div className="job-tittle">
                        <a href="#">
                          <h4>Digital Marketer</h4>
                        </a>
                        <ul>
                          <li>Creative Agency</li>
                          <li>
                            <i className="fas fa-map-marker-alt" />
                            Athens, Greece
                          </li>
                          <li>$3500 - $4000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* job single End */}
                  <div className="job-post-details">
                    <div className="post-details1 mb-50">
                      {/* Small Section Tittle */}
                      <div className="small-section-tittle">
                        <h4>Job Description</h4>
                      </div>
                      <p>
                        It is a long established fact that a reader will beff
                        distracted by vbthe creadable content of a page when
                        looking at its layout. The pointf of using Lorem Ipsum
                        is that it has ahf mcore or-lgess normal distribution of
                        letters, as opposed to using, Content here content here
                        making it look like readable.
                      </p>
                    </div>
                    <div className="post-details2  mb-50">
                      {/* Small Section Tittle */}
                      <div className="small-section-tittle">
                        <h4>Required Knowledge, Skills, and Abilities</h4>
                      </div>
                      <ul>
                        <li>System Software Development</li>
                        <li>
                          Mobile Applicationin iOS/Android/Tizen or other
                          platform
                        </li>
                        <li>
                          Research and code , libraries, APIs and frameworks
                        </li>
                        <li>
                          Strong knowledge on software development life cycle
                        </li>
                        <li>Strong problem solving and debugging skills</li>
                      </ul>
                    </div>
                    <div className="post-details2  mb-50">
                      {/* Small Section Tittle */}
                      <div className="small-section-tittle">
                        <h4>Education + Experience</h4>
                      </div>
                      <ul>
                        <li>
                          3 or more years of professional design experience
                        </li>
                        <li>Direct response email experience</li>
                        <li>Ecommerce website design experience</li>
                        <li>Familiarity with mobile and web apps preferred</li>
                        <li>Experience using Invision a plus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Right Content */}
                <div className="col-xl-4 col-lg-4">
                  <div className="post-details3  mb-50">
                    {/* Small Section Tittle */}
                    <div className="small-section-tittle">
                      <h4>Job Overview</h4>
                    </div>
                    <ul>
                      <li>
                        Posted date : <span>12 Aug 2019</span>
                      </li>
                      <li>
                        Location : <span>New York</span>
                      </li>
                      <li>
                        Vacancy : <span>02</span>
                      </li>
                      <li>
                        Job nature : <span>Full time</span>
                      </li>
                      <li>
                        Salary : <span>$7,800 yearly</span>
                      </li>
                      <li>
                        Application date : <span>12 Sep 2020</span>
                      </li>
                    </ul>
                    <div className="apply-btn2">
                      <a href="#" className="btn">
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <div className="post-details4  mb-50">
                    {/* Small Section Tittle */}
                    <div className="small-section-tittle">
                      <h4>Company Information</h4>
                    </div>
                    <span>Colorlib</span>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <ul>
                      <li>
                        Name: <span>Colorlib </span>
                      </li>
                      <li>
                        Web : <span> colorlib.com</span>
                      </li>
                      <li>
                        Email: <span>carrier.colorlib@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* job post company End */}
        </main>
        <footer>
          {/* Footer Start*/}
          <div className="footer-area footer-bg footer-padding">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-tittle">
                        <h4>About Us</h4>
                        <div className="footer-pera">
                          <p>
                            Heaven frucvitful doesn't cover lesser dvsays appear
                            creeping seasons so behold.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <p>
                            Address :Your address goes here, your demo address.
                          </p>
                        </li>
                        <li>
                          <a href="#">Phone : +8880 44338899</a>
                        </li>
                        <li>
                          <a href="#">Email : info@colorlib.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Important Link</h4>
                      <ul>
                        <li>
                          <a href="#"> View Project</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonial</a>
                        </li>
                        <li>
                          <a href="#">Proparties</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Newsletter</h4>
                      <div className="footer-pera footer-pera2">
                        <p>
                          Heaven fruitful doesn't over lesser in days. Appear
                          creeping.
                        </p>
                      </div>
                      {/* Form */}
                      <div className="footer-form">
                        <div id="mc_embed_signup">
                          <form
                            target="_blank"
                            action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                            method="get"
                            className="subscribe_form relative mail_part"
                          >
                            <input
                              type="email"
                              name="email"
                              id="newsletter-form-email"
                              placeholder="Email Address"
                              className="placeholder hide-on-focus"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = ' Email Address '"
                            />
                            <div className="form-icon">
                              <button
                                type="submit"
                                name="submit"
                                id="newsletter-submit"
                                className="email_icon newsletter-submit button-contactForm"
                              >
                                <img src="assets/img/icon/form.png" alt="" />
                              </button>
                            </div>
                            <div className="mt-10 info" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="row footer-wejed justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  {/* logo */}
                  <div className="footer-logo mb-20">
                    <a href="/">
                      <img src="assets/img/logo/logo2_footer.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="footer-tittle-bottom">
                    <span>5000+</span>
                    <p>Talented Hunter</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="footer-tittle-bottom">
                    <span>451</span>
                    <p>Talented Hunter</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  {/* Footer Bottom Tittle */}
                  <div className="footer-tittle-bottom">
                    <span>568</span>
                    <p>Talented Hunter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer-bottom area */}
          <div className="footer-bottom-area footer-bg">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-xl-10 col-lg-10 ">
                    <div className="footer-copy-right">
                      <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2">
                    <div className="footer-social f-right">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fas fa-globe" />
                      </a>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </footer>
        {/* JS here */}
        {/* All JS Custom Plugins Link Here here */}
        {/* Jquery, Popper, Bootstrap */}
        {/* Jquery Mobile Menu */}
        {/* Jquery Slick , Owl-Carousel Plugins */}
        {/* One Page, Animated-HeadLin */}
        {/* Scrollup, nice-select, sticky */}
        {/* contact js */}
        {/* Jquery Plugins, main Jquery */}
      </div>
    </React.Fragment>
  );
};
export default Job_details;
