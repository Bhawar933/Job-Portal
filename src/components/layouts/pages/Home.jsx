import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <React.Fragment>
      {
        <div>
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
            {/* slider Area Start*/}
            <div className="slider-area ">
              {/* Mobile Menu */}
              <div className="slider-active">
                <div
                  className="single-slider slider-height d-flex align-items-center"
                  style={{ background: "URL('assets/img/hero/h1_hero.jpg')" }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-9 col-md-10">
                        <div className="hero__caption">
                          <h1>Find the most exciting startup jobs</h1>
                        </div>
                      </div>
                    </div>
                    {/* Search Box */}
                    <div className="row">
                      <div className="col-xl-8">
                        {/* form */}
                        <form action="#" className="search-box">
                          <div className="input-form">
                            <input
                              type="text"
                              placeholder="Job Tittle or keyword"
                            />
                          </div>
                          <div className="select-form">
                            <div className="select-itms">
                              <select name="select" id="select1">
                                <option value>Location BD</option>
                                <option value>Location PK</option>
                                <option value>Location US</option>
                                <option value>Location UK</option>
                              </select>
                            </div>
                          </div>
                          <div className="search-form">
                            <a >Find job</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slider Area End*/}
            {/* Our Services Start */}
            <div className="our-services section-pad-t30">
              <div className="container">
                {/* Section Tittle */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-tittle text-center">
                      <span>FEATURED TOURS Packages</span>
                      <h2>Browse Top Categories </h2>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-contnet-center">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-tour" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Design &amp; Creative</p>
                        </h5>
                        <span>(653)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-cms" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Design &amp; Development</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-report" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Sales &amp; Marketing</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-app" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Mobile Application</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-helmet" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Construction</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-high-tech" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Information Technology</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-real-estate" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Real Estate</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-content" />
                      </div>
                      <div className="services-cap">
                        <h5>
                          <p href="">Content Writer</p>
                        </h5>
                        <span>(658)</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* More Btn */}
                {/* Section Button */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="browse-btn2 text-center mt-50">
                      <p href="" className="border-btn2">
                        Browse All Sectors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Our Services End */}
            {/* Online CV Area Start */}
            <div
              className="online-cv cv-bg section-overly pt-90 pb-120"
              data-background="assets/img/gallery/cv_bg.jpg"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="cv-caption text-center">
                      <p className="pera1">FEATURED TOURS Packages</p>
                      <p className="pera2">
                        {" "}
                        Make a Difference with Your Online Resume!
                      </p>
                      <a href="#" className="border-btn2 border-btn4">
                        Upload your cv
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Online CV Area End*/}
            {/* Featured_job_start */}
            <section className="featured-job-area feature-padding">
              <div className="container">
                {/* Section Tittle */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-tittle text-center">
                      <span>Recent Job</span>
                      <h2>Featured Jobs</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/* single-job-content */}
                    <div className="single-job-items mb-30">
                      <div className="job-items">
                        <div className="company-img">
                          <a >
                            <img src="assets/img/icon/job-list1.png" alt="" />
                          </a>
                        </div>
                        <div className="job-tittle">
                          <p href="">
                            <h4>Digital Marketer</h4>
                          </p>
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
                      <div className="items-link f-right">
                        <a >Full Time</a>
                        <span>7 hours ago</span>
                      </div>
                    </div>
                    {/* single-job-content */}
                    <div className="single-job-items mb-30">
                      <div className="job-items">
                        <div className="company-img">
                          <a>
                            <img src="assets/img/icon/job-list2.png" alt="" />
                          </a>
                        </div>
                        <div className="job-tittle">
                          <p href="">
                            <h4>Digital Marketer</h4>
                          </p>
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
                      <div className="items-link f-right">
                        <a >Full Time</a>
                        <span>7 hours ago</span>
                      </div>
                    </div>
                    {/* single-job-content */}
                    <div className="single-job-items mb-30">
                      <div className="job-items">
                        <div className="company-img">
                          <a >
                            <img src="assets/img/icon/job-list3.png" alt="" />
                          </a>
                        </div>
                        <div className="job-tittle">
                          <p href="">
                            <h4>Digital Marketer</h4>
                          </p>
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
                      <div className="items-link f-right">
                        <a >Full Time</a>
                        <span>7 hours ago</span>
                      </div>
                    </div>
                    {/* single-job-content */}
                    <div className="single-job-items mb-30">
                      <div className="job-items">
                        <div className="company-img">
                          <a >
                            <img src="assets/img/icon/job-list4.png" alt="" />
                          </a>
                        </div>
                        <div className="job-tittle">
                          <p href="">
                            <h4>Digital Marketer</h4>
                          </p>
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
                      <div className="items-link f-right">
                        <a >Full Time</a>
                        <span>7 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured_job_end */}
            {/* How  Apply Process Start*/}
            <div
              className="apply-process-area apply-bg pt-150 pb-150"
              data-background="assets/img/gallery/how-applybg.png"
            >
              <div className="container">
                {/* Section Tittle */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-tittle white-text text-center">
                      <span>Apply process</span>
                      <h2> How it works</h2>
                    </div>
                  </div>
                </div>
                {/* Apply Process Caption */}
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-process text-center mb-30">
                      <div className="process-ion">
                        <span className="flaticon-search" />
                      </div>
                      <div className="process-cap">
                        <h5>1. Search a job</h5>
                        <p>
                          Sorem spsum dolor sit amsectetur adipisclit, seddo
                          eiusmod tempor incididunt ut laborea.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-process text-center mb-30">
                      <div className="process-ion">
                        <span className="flaticon-curriculum-vitae" />
                      </div>
                      <div className="process-cap">
                        <h5>2. Apply for job</h5>
                        <p>
                          Sorem spsum dolor sit amsectetur adipisclit, seddo
                          eiusmod tempor incididunt ut laborea.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-process text-center mb-30">
                      <div className="process-ion">
                        <span className="flaticon-tour" />
                      </div>
                      <div className="process-cap">
                        <h5>3. Get your job</h5>
                        <p>
                          Sorem spsum dolor sit amsectetur adipisclit, seddo
                          eiusmod tempor incididunt ut laborea.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* How  Apply Process End*/}
            {/* Testimonial Start */}
            <div className="testimonial-area testimonial-padding">
              <div className="container">
                {/* Testimonial contents */}
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-8 col-lg-8 col-md-10">
                    <div className="h1-testimonial-active dot-style">
                      {/* Single Testimonial */}
                      <div className="single-testimonial text-center">
                        {/* Testimonial Content */}
                        <div className="testimonial-caption ">
                          {/* founder */}
                          <div className="testimonial-founder  ">
                            <div className="founder-img mb-30">
                              <img
                                src="assets/img/testmonial/testimonial-founder.png"
                                alt=""
                              />
                              <span>Margaret Lawson</span>
                              <p>Creative Director</p>
                            </div>
                          </div>
                          <div className="testimonial-top-cap">
                            <p>
                              “I am at an age where I just want to be fit and
                              healthy our bodies are our responsibility! So
                              start caring for your body and it will care for
                              you. Eat clean it will care for you and workout
                              hard.”
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Single Testimonial */}
                      <div className="single-testimonial text-center">
                        {/* Testimonial Content */}
                        <div className="testimonial-caption ">
                          {/* founder */}
                          <div className="testimonial-founder  ">
                            <div className="founder-img mb-30">
                              <img
                                src="assets/img/testmonial/testimonial-founder.png"
                                alt=""
                              />
                              <span>Margaret Lawson</span>
                              <p>Creative Director</p>
                            </div>
                          </div>
                          <div className="testimonial-top-cap">
                            <p>
                              “I am at an age where I just want to be fit and
                              healthy our bodies are our responsibility! So
                              start caring for your body and it will care for
                              you. Eat clean it will care for you and workout
                              hard.”
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Single Testimonial */}
                      <div className="single-testimonial text-center">
                        {/* Testimonial Content */}
                        <div className="testimonial-caption ">
                          {/* founder */}
                          <div className="testimonial-founder  ">
                            <div className="founder-img mb-30">
                              <img
                                src="assets/img/testmonial/testimonial-founder.png"
                                alt=""
                              />
                              <span>Margaret Lawson</span>
                              <p>Creative Director</p>
                            </div>
                          </div>
                          <div className="testimonial-top-cap">
                            <p>
                              “I am at an age where I just want to be fit and
                              healthy our bodies are our responsibility! So
                              start caring for your body and it will care for
                              you. Eat clean it will care for you and workout
                              hard.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial End */}
            {/* Support Company Start*/}
            <div className="support-company-area support-padding fix">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="right-caption">
                      {/* Section Tittle */}
                      <div className="section-tittle section-tittle2">
                        <span>What we are doing</span>
                        <h2>24k Talented people are getting Jobs</h2>
                      </div>
                      <div className="support-caption">
                        <p className="pera-top">
                          Mollit anim laborum duis au dolor in voluptate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillum.
                        </p>
                        <p>
                          Mollit anim laborum.Duis aute irufg dhjkolohr in re
                          voluptate velit esscillumlore eu quife nrulla
                          parihatur. Excghcepteur signjnt occa cupidatat non
                          inulpadeserunt mollit aboru. temnthp incididbnt ut
                          labore mollit anim laborum suis aute.
                        </p>
                        <a className="btn post-btn">
                          Post a job
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="support-location-img">
                      <img src="assets/img/service/support-img.jpg" alt="" />
                      <div className="support-img-cap text-center">
                        <p>Since</p>
                        <span>1994</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Support Company End*/}
            {/* Blog Area Start */}
            <div className="home-blog-area blog-h-padding">
              <div className="container">
                {/* Section Tittle */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-tittle text-center">
                      <span>Our latest blog</span>
                      <h2>Our recent news</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30">
                      <div className="blog-img-cap">
                        <div className="blog-img">
                          <img src="assets/img/blog/home-blog1.jpg" alt="" />
                          {/* Blog date */}
                          <div className="blog-date text-center">
                            <span>24</span>
                            <p>Now</p>
                          </div>
                        </div>
                        <div className="blog-cap">
                          <p>| Properties</p>
                          <h3>
                            <a href="/single-blog">
                              Footprints in Time is perfect House in Kurashiki
                            </a>
                          </h3>
                          <a href="#" className="more-btn">
                            Read more »
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30">
                      <div className="blog-img-cap">
                        <div className="blog-img">
                          <img src="assets/img/blog/home-blog2.jpg" alt="" />
                          {/* Blog date */}
                          <div className="blog-date text-center">
                            <span>24</span>
                            <p>Now</p>
                          </div>
                        </div>
                        <div className="blog-cap">
                          <p>| Properties</p>
                          <h3>
                            <a href="/single-blog">
                              Footprints in Time is perfect House in Kurashiki
                            </a>
                          </h3>
                          <a href="#" className="more-btn">
                            Read more »
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Area End */}
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
                              Heaven frucvitful doesn't cover lesser dvsays
                              appear creeping seasons so behold.
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
                              Address :Your address goes here, your demo
                              address.
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
                          Copyright © All rights reserved | This template is
                          made with{" "}
                          <i className="fa fa-heart" aria-hidden="true" /> by{" "}
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
      }
    </React.Fragment>
  );
};

export default Home;
