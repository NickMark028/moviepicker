import React from "react";
import Head from "next/head";
export const Header: React.FC = () => {
    return (
        <>
            <Head>
                <div>
                    <link
                        rel="stylesheet"
                        href="assets/css/style-starter.css"
                    />
                    <link
                        href="//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap"
                        rel="stylesheet"
                    />
                </div>
            </Head>
            ;
            <header id="site-header" className="w3l-header fixed-top">
                {/*/nav*/}
                <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                    <div className="container">
                        <h1>
                            <a
                                className="navbar-brand"
                                href="http://localhost:3000/"
                            >
                                <span
                                    className="fa fa-play icon-log"
                                    aria-hidden="true"
                                />
                                MyShowz{" "}
                            </a>
                        </h1>
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa icon-expand fa-bars" />
                            <span className="fa icon-close fa-times" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="http://localhost:3000/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        href="http://localhost:3000/movie"
                                    >
                                        Movies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/history">
                                        History
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="Contact_Us.html"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="search-right">
                                <a
                                    href="#search"
                                    className="btn search-hny mr-lg-3 mt-lg-0 mt-4"
                                    title="search"
                                >
                                    Search{" "}
                                    <span
                                        className="fa fa-search ml-3"
                                        aria-hidden="true"
                                    />
                                </a>
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <form
                                            action="#"
                                            method="post"
                                            className="search-box"
                                        >
                                            <input
                                                type="search"
                                                placeholder="Search your Keyword"
                                                name="search"
                                                required="required"
                                                autofocus
                                            />
                                            <button
                                                type="submit"
                                                className="btn"
                                            >
                                                <span
                                                    className="fa fa-search"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </form>
                                        <div className="browse-items">
                                            <h3 className="hny-title two mt-md-5 mt-4">
                                                Browse all:
                                            </h3>
                                            <ul className="search-items">
                                                <li>
                                                    <a href="movies.html">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Drama
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Family
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Thriller
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Commedy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Romantic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Tv-Series
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Horror
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Drama
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Family
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Thriller
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Commedy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Romantic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Tv-Series
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="movies.html">
                                                        Horror
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="close" href="#close">
                                        ×
                                    </a>
                                </div>
                            </div>
                            <div
                                className="Login_SignUp"
                                id="login"
                                style={{
                                    fontSize: "2rem",
                                    display: "inline-block",
                                    position: "relative",
                                }}
                            >
                                <a className="nav-link" href="sign_in.html">
                                    <i className="fa fa-user-circle-o" />
                                </a>
                            </div>
                        </div>
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label
                                        className="theme-switch"
                                        htmlFor="checkbox"
                                    >
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            <i className="gg-sun" />
                                            <i className="gg-moon" />
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
