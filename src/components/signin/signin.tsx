import React from "react";

import Head from "next/head";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Signin = () => {
    return (
        <>
            <Head>
                <div>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="assets/css/as-alert-message.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="assets/css/style-starter.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="assets/css/sign-in.css"
                    />
                </div>
            </Head>
            <div
                className="container_signup_signin"
                id="container_signup_signin"
            >
                <div className="form-container sign-up-container">
                    <form
                        name="sign-up-form"
                        action="#"
                        onSubmit="return signUpValidateForm()"
                    >
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-google-plus-g" />
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input
                            name="sign-up-name"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            name="sign-up-email"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            name="sign-up-passwd"
                            type="password"
                            placeholder="Password"
                        />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form
                        name="sign-in-form"
                        style={{ color: "var(--theme-title)" }}
                        action="/"
                    >
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a
                                href="#"
                                className="social"
                                style={{ color: "var(--theme-title)" }}
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a
                                href="#"
                                className="social"
                                style={{ color: "var(--theme-title)" }}
                            >
                                <i className="fab fa-google-plus-g" />
                            </a>
                            <a
                                href="#"
                                className="social"
                                style={{ color: "var(--theme-title)" }}
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input
                            name="sign-in-email"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            name="sign-in-passwd"
                            type="password"
                            placeholder="Password"
                        />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                login details
                            </p>
                            <button className="ghost" id="signIn">
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register and book your tickets now!!!</p>
                            <button className="ghost" id="signUp">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="text/javascript"
                src="assets/js/as-alert-message.min.js"
            />
            <script src="assets/js/jquery-3.3.1.min.js" />
            <script src="assets/js/theme-change.js" />
        </>
    );
};
