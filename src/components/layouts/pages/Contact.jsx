import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <React.Fragment>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Job board HTML-5 Template </title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
        {/* CSS here */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/price_rangs.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
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
                    <h2>Contact us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
        {/* ================ contact section start ================= */}
        <section className="contact-section">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              <div
                id="map"
                style={{
                  height: "480px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    backgroundColor: "rgb(229, 227, 223)",
                  }}
                >
                  <div
                    className="gm-style"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      left: "0px",
                      top: "0px",
                      height: "100%",
                      width: "100%",
                      padding: "0px",
                      borderWidth: "0px",
                      margin: "0px",
                    }}
                  >
                    <div
                      tabIndex={0}
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        padding: "0px",
                        borderWidth: "0px",
                        margin: "0px",
                        cursor:
                          'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                        touchAction: "pan-x pan-y",
                      }}
                    >
                      <div
                        style={{
                          zIndex: 1,
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          width: "100%",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: 100,
                            width: "100%",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              zIndex: 0,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                zIndex: 991,
                                transform: "matrix(1, 0, 0, 1, -100, -189)",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  left: "0px",
                                  top: "0px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-256px",
                                  top: "0px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-256px",
                                  top: "-256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "0px",
                                  top: "-256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "256px",
                                  top: "-256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "256px",
                                  top: "0px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "256px",
                                  top: "256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "0px",
                                  top: "256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-256px",
                                  top: "256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-512px",
                                  top: "256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-512px",
                                  top: "0px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-512px",
                                  top: "-256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "512px",
                                  top: "-256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "512px",
                                  top: "0px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "512px",
                                  top: "256px",
                                  width: "256px",
                                  height: "256px",
                                }}
                              >
                                <div
                                  style={{ width: "256px", height: "256px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: 101,
                            width: "100%",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: 102,
                            width: "100%",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: 103,
                            width: "100%",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              zIndex: -1,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                zIndex: 991,
                                transform: "matrix(1, 0, 0, 1, -100, -189)",
                              }}
                            >
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "0px",
                                  top: "0px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "-256px",
                                  top: "0px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "-256px",
                                  top: "-256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "0px",
                                  top: "-256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "256px",
                                  top: "-256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "256px",
                                  top: "0px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "256px",
                                  top: "256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "0px",
                                  top: "256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "-256px",
                                  top: "256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "-512px",
                                  top: "256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "-512px",
                                  top: "0px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "-512px",
                                  top: "-256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "512px",
                                  top: "-256px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "512px",
                                  top: "0px",
                                }}
                              />
                              <div
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  overflow: "hidden",
                                  position: "absolute",
                                  left: "512px",
                                  top: "256px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: 0,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              zIndex: 991,
                              transform: "matrix(1, 0, 0, 1, -100, -189)",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: "0px",
                                top: "0px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i302!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=70038"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "256px",
                                top: "0px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i302!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=84496"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "256px",
                                top: "256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i303!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=107953"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "0px",
                                top: "256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i303!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=93495"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "-256px",
                                top: "256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i303!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=85128"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "-512px",
                                top: "256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i303!4i256!2m3!1e0!2sm!3i476185504!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=46831"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "-512px",
                                top: "0px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i302!4i256!2m3!1e0!2sm!3i476184952!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=10814"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "-512px",
                                top: "-256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i301!4i256!2m3!1e0!2sm!3i476184952!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=118428"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "512px",
                                top: "-256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i301!4i256!2m3!1e0!2sm!3i476185636!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=43995"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "512px",
                                top: "0px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i302!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=905"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "512px",
                                top: "256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i303!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=24362"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "-256px",
                                top: "0px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i302!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=61671"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "-256px",
                                top: "-256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=38214"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "0px",
                                top: "-256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=46581"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "256px",
                                top: "-256px",
                                width: "256px",
                                height: "256px",
                                transition: "opacity 200ms linear 0s",
                              }}
                            >
                              <img
                                draggable="false"
                                alt=""
                                role="presentation"
                                src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=94061"
                                style={{
                                  width: "256px",
                                  height: "256px",
                                  userSelect: "none",
                                  border: "0px",
                                  padding: "0px",
                                  margin: "0px",
                                  maxWidth: "none",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="gm-style-pbc"
                        style={{
                          zIndex: 2,
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          padding: "0px",
                          borderWidth: "0px",
                          margin: "0px",
                          left: "0px",
                          top: "0px",
                          opacity: 0,
                        }}
                      >
                        <p className="gm-style-pbt" />
                      </div>
                      <div
                        style={{
                          zIndex: 3,
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          padding: "0px",
                          borderWidth: "0px",
                          margin: "0px",
                          left: "0px",
                          top: "0px",
                          touchAction: "pan-x pan-y",
                        }}
                      >
                        <div
                          style={{
                            zIndex: 4,
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: "100%",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              zIndex: 104,
                              width: "100%",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              zIndex: 105,
                              width: "100%",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              zIndex: 106,
                              width: "100%",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              zIndex: 107,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <iframe
                      aria-hidden="true"
                      frameBorder={0}
                      style={{
                        zIndex: -1,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0px",
                        left: "0px",
                        border: "none",
                      }}
                      src="about:blank"
                    />
                    <div
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                        zIndex: 1000000,
                        position: "absolute",
                        left: "0px",
                        bottom: "0px",
                      }}
                    >
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://maps.google.com/maps?ll=-31.197,150.744&z=9&t=m&hl=en-US&gl=US&mapclient=apiv3"
                        title="Open this area in Google Maps (opens a new window)"
                        style={{
                          position: "static",
                          overflow: "visible",
                          float: "none",
                          display: "inline",
                        }}
                      >
                        <div
                          style={{
                            width: "66px",
                            height: "26px",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            alt=""
                            src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png"
                            draggable="false"
                            style={{
                              position: "absolute",
                              left: "0px",
                              top: "0px",
                              width: "66px",
                              height: "26px",
                              userSelect: "none",
                              border: "0px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "15px 21px",
                        border: "1px solid rgb(171, 171, 171)",
                        fontFamily: "Roboto, Arial, sans-serif",
                        color: "rgb(34, 34, 34)",
                        boxSizing: "border-box",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 16px",
                        zIndex: 10000002,
                        display: "none",
                        width: "300px",
                        height: "180px",
                        position: "absolute",
                        left: "315px",
                        top: "150px",
                      }}
                    >
                      <div
                        style={{
                          padding: "0px 0px 10px",
                          fontSize: "16px",
                          boxSizing: "border-box",
                        }}
                      >
                        Map Data
                      </div>
                      <div style={{ fontSize: "13px" }}>
                        Map data ©2019 Google
                      </div>
                      <button
                        draggable="false"
                        title="Close"
                        aria-label="Close"
                        type="button"
                        className="gm-ui-hover-effect"
                        style={{
                          background: "none",
                          display: "block",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          cursor: "pointer",
                          userSelect: "none",
                          top: "0px",
                          right: "0px",
                          width: "37px",
                          height: "37px",
                        }}
                      >
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                          style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "13px",
                            height: "13px",
                            margin: "12px",
                          }}
                        />
                      </button>
                    </div>
                    <div
                      className="gmnoprint"
                      style={{
                        zIndex: 1000001,
                        position: "absolute",
                        right: "166px",
                        bottom: "0px",
                        width: "121px",
                      }}
                    >
                      <div
                        draggable="false"
                        className="gm-style-cc"
                        style={{
                          userSelect: "none",
                          height: "14px",
                          lineHeight: "14px",
                        }}
                      >
                        <div
                          style={{
                            opacity: "0.7",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                          }}
                        >
                          <div style={{ width: "1px" }} />
                          <div
                            style={{
                              backgroundColor: "rgb(245, 245, 245)",
                              width: "auto",
                              height: "100%",
                              marginLeft: "1px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            paddingRight: "6px",
                            paddingLeft: "6px",
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: "10px",
                            color: "rgb(68, 68, 68)",
                            whiteSpace: "nowrap",
                            direction: "ltr",
                            textAlign: "right",
                            verticalAlign: "middle",
                            display: "inline-block",
                          }}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                              display: "none",
                            }}
                          >
                            Map Data
                          </a>
                          <span>Map data ©2019 Google</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="gmnoscreen"
                      style={{
                        position: "absolute",
                        right: "0px",
                        bottom: "0px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: "11px",
                          color: "rgb(68, 68, 68)",
                          direction: "ltr",
                          textAlign: "right",
                          backgroundColor: "rgb(245, 245, 245)",
                        }}
                      >
                        Map data ©2019 Google
                      </div>
                    </div>
                    <div
                      className="gmnoprint gm-style-cc"
                      draggable="false"
                      style={{
                        zIndex: 1000001,
                        userSelect: "none",
                        height: "14px",
                        lineHeight: "14px",
                        position: "absolute",
                        right: "95px",
                        bottom: "0px",
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                        }}
                      >
                        <div style={{ width: "1px" }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: "1px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: "6px",
                          paddingLeft: "6px",
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: "10px",
                          color: "rgb(68, 68, 68)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block",
                        }}
                      >
                        <a
                          href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                          target="_blank"
                          rel="noopener"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "rgb(68, 68, 68)",
                          }}
                        >
                          Terms of Use
                        </a>
                      </div>
                    </div>
                    <button
                      draggable="false"
                      title="Toggle fullscreen view"
                      aria-label="Toggle fullscreen view"
                      type="button"
                      className="gm-control-active gm-fullscreen-control"
                      style={{
                        background: "none rgb(255, 255, 255)",
                        border: "0px",
                        margin: "10px",
                        padding: "0px",
                        position: "absolute",
                        cursor: "pointer",
                        userSelect: "none",
                        borderRadius: "2px",
                        height: "40px",
                        width: "40px",
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                        overflow: "hidden",
                        top: "0px",
                        right: "0px",
                      }}
                    >
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: "18px", width: "18px" }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: "18px", width: "18px" }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: "18px", width: "18px" }}
                      />
                    </button>
                    <div
                      draggable="false"
                      className="gm-style-cc"
                      style={{
                        userSelect: "none",
                        height: "14px",
                        lineHeight: "14px",
                        position: "absolute",
                        right: "0px",
                        bottom: "0px",
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                        }}
                      >
                        <div style={{ width: "1px" }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: "1px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: "6px",
                          paddingLeft: "6px",
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: "10px",
                          color: "rgb(68, 68, 68)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block",
                        }}
                      >
                        <a
                          target="_blank"
                          rel="noopener"
                          title="Report errors in the road map or imagery to Google"
                          href="https://www.google.com/maps/@-31.197,150.744,9z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                          style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: "10px",
                            color: "rgb(68, 68, 68)",
                            textDecoration: "none",
                            position: "relative",
                          }}
                        >
                          Report a map error
                        </a>
                      </div>
                    </div>
                    <div
                      className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                      draggable="false"
                      controlwidth={40}
                      controlheight={81}
                      style={{
                        margin: "10px",
                        userSelect: "none",
                        position: "absolute",
                        bottom: "95px",
                        right: "40px",
                      }}
                    >
                      <div
                        className="gmnoprint"
                        controlwidth={40}
                        controlheight={81}
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "0px",
                        }}
                      >
                        <div
                          draggable="false"
                          style={{
                            userSelect: "none",
                            boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                            borderRadius: "2px",
                            cursor: "pointer",
                            backgroundColor: "rgb(255, 255, 255)",
                            width: "40px",
                            height: "81px",
                          }}
                        >
                          <button
                            draggable="false"
                            title="Zoom in"
                            aria-label="Zoom in"
                            type="button"
                            className="gm-control-active"
                            style={{
                              background: "none",
                              display: "block",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              overflow: "hidden",
                              width: "40px",
                              height: "40px",
                              top: "0px",
                              left: "0px",
                            }}
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                          </button>
                          <div
                            style={{
                              position: "relative",
                              overflow: "hidden",
                              width: "30px",
                              height: "1px",
                              margin: "0px 5px",
                              backgroundColor: "rgb(230, 230, 230)",
                              top: "0px",
                            }}
                          />
                          <button
                            draggable="false"
                            title="Zoom out"
                            aria-label="Zoom out"
                            type="button"
                            className="gm-control-active"
                            style={{
                              background: "none",
                              display: "block",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              overflow: "hidden",
                              width: "40px",
                              height: "40px",
                              top: "0px",
                              left: "0px",
                            }}
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="gmnoprint"
                        controlwidth={40}
                        controlheight={40}
                        style={{ display: "none", position: "absolute" }}
                      >
                        <div style={{ width: "40px", height: "40px" }}>
                          <button
                            draggable="false"
                            title="Rotate map 90 degrees"
                            aria-label="Rotate map 90 degrees"
                            type="button"
                            className="gm-control-active"
                            style={{
                              background: "none rgb(255, 255, 255)",
                              display: "none",
                              border: "0px",
                              margin: "0px 0px 32px",
                              padding: "0px",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              width: "40px",
                              height: "40px",
                              top: "0px",
                              left: "0px",
                              overflow: "hidden",
                              boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                              borderRadius: "2px",
                            }}
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ height: "18px", width: "18px" }}
                            />
                          </button>
                          <button
                            draggable="false"
                            title="Tilt map"
                            aria-label="Tilt map"
                            type="button"
                            className="gm-tilt gm-control-active"
                            style={{
                              background: "none rgb(255, 255, 255)",
                              display: "block",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              width: "40px",
                              height: "40px",
                              top: "0px",
                              left: "0px",
                              overflow: "hidden",
                              boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                              borderRadius: "2px",
                            }}
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ width: "18px" }}
                            />
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{ width: "18px" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    fontWeight: 500,
                    fontFamily: "Roboto, sans-serif",
                    padding: "15px 25px",
                    boxSizing: "border-box",
                    top: "5px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    borderRadius: "5px",
                    left: "50%",
                    maxWidth: "375px",
                    position: "absolute",
                    transform: "translateX(-50%)",
                    width: "calc(100% - 10px)",
                    zIndex: 1,
                  }}
                >
                  <div>
                    <img
                      alt=""
                      src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                      draggable="false"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        border: "0px",
                        height: "17px",
                        verticalAlign: "middle",
                        width: "52px",
                        userSelect: "none",
                      }}
                    />
                  </div>
                  <div style={{ lineHeight: "20px", margin: "15px 0px" }}>
                    <span
                      style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: "14px" }}
                    >
                      This page can't load Google Maps correctly.
                    </span>
                  </div>
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            lineHeight: "16px",
                            verticalAlign: "middle",
                          }}
                        >
                          <a
                            href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors"
                            target="_blank"
                            rel="noopener"
                            style={{
                              color: "rgba(0, 0, 0, 0.54)",
                              fontSize: "12px",
                            }}
                          >
                            Do you own this website?
                          </a>
                        </td>
                        <td style={{ textAlign: "right" }}>
                          <button className="dismissButton">OK</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="message"
                          id="message"
                          cols={30}
                          rows={9}
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Message'"
                          placeholder=" Enter Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="name"
                          id="name"
                          type="text"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter your name'"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="email"
                          id="email"
                          type="email"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Subject'"
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      className="button button-contactForm boxed-btn"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home" />
                  </span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet" />
                  </span>
                  <div className="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email" />
                  </span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ contact section end ================= */}
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
                          <form className="subscribe_form relative mail_part">
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

export default Contact;
