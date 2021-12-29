import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <footer className="w3l-footer">
            <section className="footer-inner-main">
                <div className="footer-hny-grids py-5">
                    <div className="container py-lg-4">
                        <div className="text-txt">
                            <div className="right-side">
                                <div className="row footer-about">
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="movie">
                                            <img
                                                className="img-fluid"
                                                src="assets/images/banner1.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="movie">
                                            <img
                                                className="img-fluid"
                                                src="assets/images/banner2.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="movie">
                                            <img
                                                className="img-fluid"
                                                src="assets/images/banner3.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="movie">
                                            <img
                                                className="img-fluid"
                                                src="assets/images/banner4.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="row footer-links">
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Movies</h6>
                                        <ul>
                                            <li>
                                                <a href="#">Movies</a>
                                            </li>
                                            <li>
                                                <a href="#">Videos</a>
                                            </li>
                                            <li>
                                                <a href="#">English Movies</a>
                                            </li>
                                            <li>
                                                <a href="#">Tailor</a>
                                            </li>
                                            <li>
                                                <a href="#">Upcoming Movies</a>
                                            </li>
                                            <li>
                                                <a href="Contact_Us.html">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Information</h6>
                                        <ul>
                                            <li>
                                                <a href="index.html">Home</a>{" "}
                                            </li>
                                            <li>
                                                <a href="about.html">About</a>{" "}
                                            </li>
                                            <li>
                                                <a href="#">Tv Series</a>{" "}
                                            </li>
                                            <li>
                                                <a href="#">Blogs</a>{" "}
                                            </li>
                                            <li>
                                                <a href="sign_in.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="Contact_Us.html">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Locations</h6>
                                        <ul>
                                            <li>
                                                <a href="movie">Asia</a>
                                            </li>
                                            <li>
                                                <a href="movie">France</a>
                                            </li>
                                            <li>
                                                <a href="movie">Taiwan</a>
                                            </li>
                                            <li>
                                                <a href="movie">
                                                    United States
                                                </a>
                                            </li>
                                            <li>
                                                <a href="movie">Korea</a>
                                            </li>
                                            <li>
                                                <a href="movie">
                                                    United Kingdom
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Newsletter</h6>
                                        <form
                                            action="#"
                                            className="subscribe mb-3"
                                            method="post"
                                        >
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email Address"
                                                required
                                            />
                                            <button>
                                                <span className="fa fa-envelope-o" />
                                            </button>
                                        </form>
                                        <p>
                                            Enter your email and receive the
                                            latest news, updates and special
                                            offers from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="below-section">
                    <div className="container">
                        <div className="copyright-footer">
                            <div className="columns text-lg-left">
                                <p>© 2021 MyShowz. All rights reserved</p>
                            </div>
                            <ul className="social text-lg-right">
                                <li>
                                    <a href="#facebook">
                                        <span
                                            className="fa fa-facebook"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#linkedin">
                                        <span
                                            className="fa fa-linkedin"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#twitter">
                                        <span
                                            className="fa fa-twitter"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#google">
                                        <span
                                            className="fa fa-google-plus"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button onclick="topFunction()" id="movetop" title="Go to top">
                    <span className="fa fa-arrow-up" aria-hidden="true" />
                </button>
            </section>
        </footer>
    );
};
