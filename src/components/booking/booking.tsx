/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import axios from "axios";
import { redirect } from "next/dist/next-server/server/api-utils";
// window.addEventListener("onClick", timeFunction, false);

const timeFunction = () => {
    document.getElementById("screen-next-btn").disabled = false;
};
const payment = () => {
    axios(
        {
            method: "post",
            url: "http://https://nailweb.herokuapp.com/payment",
            data: {
                amount: localStorage.getItem('amount'),
            },
        },
        { withCredentials: true },
    ).then((res) => window.location.assign(res.data));
};
export function Booking(): JSX.Element {
    return (
        <>
            <Head>
                <div>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <title>Ticket Booking</title>
                </div>

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/style-starter.css"
                />
                <link
                    rel="stylesheet"
                    href="https://npmcdn.com/flickity@2/dist/flickity.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/progress.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/ticket-booking.css"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/e-ticket.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/payment.css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="container" id="progress-container-id">
                <div className="row">
                    <div className="col">
                        <div className="px-0 pt-4 pb-0 mt-3 mb-3">
                            <form id="form">
                                <ul
                                    id="progressbar"
                                    className="progressbar-class"
                                >
                                    <li className="active" id="step1">
                                        Show timing selection
                                    </li>
                                    <li id="step2" className="not_active">
                                        Seat Selection
                                    </li>
                                    <li id="step3" className="not_active">
                                        Payment
                                    </li>
                                    <li id="step4" className="not_active">
                                        E-Ticket
                                    </li>
                                </ul>
                                <br />
                                <fieldset>
                                    <div id="screen-select-div">
                                        <ul className="time-ul">
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 1
                                                </div>
                                                <div className="time-btn">
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        1:05 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        4:00 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        9:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 2
                                                </div>
                                                <div className="time-btn">
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        3:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 3
                                                </div>
                                                <div className="time-btn">
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        9:05 AM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        10:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 4
                                                </div>
                                                <div className="time-btn">
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        9:05 AM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        11:00 AM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        3:00 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        7:00 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        10:00 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        11:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 5
                                                </div>
                                                <div className="time-btn">
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        9:05 AM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        12:00 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        1:00 PM
                                                    </button>
                                                    <button
                                                        className="screen-time"
                                                        onClick={timeFunction}
                                                    >
                                                        3:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <input
                                        id="screen-next-btn"
                                        type="button"
                                        name="next-step"
                                        className="next-step"
                                        defaultValue="Continue Booking"
                                        disabled
                                    />
                                </fieldset>
                                <fieldset>
                                    <div>
                                        <iframe
                                            id="seat-sel-iframe"
                                            style={{
                                                boxShadow:
                                                    "0 14px 12px 0 var(--theme-border), 0 10px 50px 0 var(--theme-border)",
                                                width: "800px",
                                                height: "550px",
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                            }}
                                            src="seat_selection/seat_sel.html"
                                        />
                                    </div>
                                    <br />
                                    <input
                                        type="button"
                                        name="next-step"
                                        className="next-step"
                                        defaultValue="Proceed to Payment"
                                    />
                                    <input
                                        type="button"
                                        name="previous-step"
                                        className="previous-step"
                                        defaultValue="Back"
                                    />
                                </fieldset>
                                <fieldset>
                                    {/* Payment Page */}
                                    <div id="payment_div">
                                        <div className="payment-row">
                                            <div className="col-75">
                                                <div className="payment-container">
                                                    <div className="payment-row">
                                                        <div className="col-50">
                                                            <h3 id="payment-h3">
                                                                Payment
                                                            </h3>
                                                            <div className="payment-row payment">
                                                                <div className="col-45 payment">
                                                                    <img
                                                                        className="logo"
                                                                        src="assets/images/MoMoLogo.png"
                                                                        style={{
                                                                            width: "40%",
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="payment-row">
                                                                <div className="col-50">
                                                                    <input
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="button"
                                        className="next-step pay-btn"
                                        defaultValue="Confirm Payment"
                                        onClick={payment}
                                    />
                                    <input
                                        type="button"
                                        className="cancel-pay-btn"
                                        defaultValue="Cancel Payment"
                                        // onClick={location.href}'index.html';"
                                    />
                                </fieldset>
                                <fieldset>
                                    <h2>E-Ticket</h2>
                                    <div className="ticket-body">
                                        <div className="ticket">
                                            <div className="holes-top" />
                                            <div className="title">
                                                <p className="cinema">
                                                    MyShowz Entertainment
                                                </p>
                                                <p className="movie-title">
                                                    Movie Name
                                                </p>
                                            </div>
                                            <div className="poster">
                                                <img
                                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
                                                    alt="Movie: Only God Forgives"
                                                />
                                            </div>
                                            <div className="info">
                                                <table className="info-table ticket-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>SCREEN</th>
                                                            <th>ROW</th>
                                                            <th>SEAT</th>
                                                        </tr>
                                                        <tr>
                                                            <td className="bigger">
                                                                18
                                                            </td>
                                                            <td className="bigger">
                                                                H
                                                            </td>
                                                            <td className="bigger">
                                                                24
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="info-table ticket-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>PRICE</th>
                                                            <th>DATE</th>
                                                            <th>TIME</th>
                                                        </tr>
                                                        <tr>
                                                            <td>RS.12.00</td>
                                                            <td>4/13/21</td>
                                                            <td>19:30</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="holes-lower" />
                                            <div className="serial">
                                                <table className="barcode ticket-table">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "black",
                                                                }}
                                                            />
                                                            <td
                                                                style={{
                                                                    backgroundColor:
                                                                        "white",
                                                                }}
                                                            />
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="numbers ticket-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>1</td>
                                                            <td>7</td>
                                                            <td>3</td>
                                                            <td>7</td>
                                                            <td>5</td>
                                                            <td>4</td>
                                                            <td>4</td>
                                                            <td>4</td>
                                                            <td>5</td>
                                                            <td>4</td>
                                                            <td>1</td>
                                                            <td>4</td>
                                                            <td>7</td>
                                                            <td>8</td>
                                                            <td>7</td>
                                                            <td>3</td>
                                                            <td>4</td>
                                                            <td>1</td>
                                                            <td>4</td>
                                                            <td>5</td>
                                                            <td>2</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="button"
                                        name="previous-step"
                                        className="home-page-btn"
                                        defaultValue="Browse to Home Page"
                                        // onClick={location.href='index.html'}
                                    />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://npmcdn.com/flickity@2/dist/flickity.pkgd.js" />
            <script
                type="text/javascript"
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
            />
            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
            />
            <script src="assets/js/theme-change.js" />

            <script type="text/javascript" src="assets/js/ticket-booking.js" />
        </>
    );
}
export default Booking;
