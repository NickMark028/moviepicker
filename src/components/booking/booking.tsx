import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
export const e = () => {
    const prevId = "1";

    window.onload = () => {
        document.getElementById("screen-next-btn").disabled = true;
    };

    const timeFunction = () => {
        document.getElementById("screen-next-btn").disabled = false;
    };

    const myFunction = (id) => {
        (document.getElementById(prevId).style.background =
            "rgb(243, 235, 235)"),
            (document.getElementById(id).style.background = "#df0e62"),
            (prevId = id);
    };
};

export class Booking extends Component {
    render() {
        return (
            <>
                <Head>
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
                                            <h2>Show time Selection</h2>
                                            <div
                                                className="carousel carousel-nav"
                                                data-flickity='{"contain": true, "pageDots": false }'
                                            >
                                                <div
                                                    className="carousel-cell"
                                                    id={1}
                                                >
                                                    <div className="date-numeric">
                                                        13
                                                    </div>
                                                    <div className="date-day">
                                                        Today
                                                    </div>
                                                </div>
                                                <div
                                                    className="carousel-cell"
                                                    id={2}
                                                >
                                                    <div className="date-numeric">
                                                        14
                                                    </div>
                                                    <div className="date-day">
                                                        Tomorrow
                                                    </div>
                                                </div>
                                                <div
                                                    className="carousel-cell"
                                                    id={3}
                                                >
                                                    <div className="date-numeric">
                                                        15
                                                    </div>
                                                    <div className="date-day">
                                                        Monday
                                                    </div>
                                                </div>
                                                <div
                                                    className="carousel-cell"
                                                    id={4}
                                                >
                                                    <div className="date-numeric">
                                                        16
                                                    </div>
                                                    <div className="date-day">
                                                        Tuesday
                                                    </div>
                                                </div>
                                                <div
                                                    className="carousel-cell"
                                                    id={5}
                                                >
                                                    <div className="date-numeric">
                                                        17
                                                    </div>
                                                    <div className="date-day">
                                                        Wednesday
                                                    </div>
                                                </div>
                                                <div
                                                    className="carousel-cell"
                                                    id={6}
                                                >
                                                    <div className="date-numeric">
                                                        18
                                                    </div>
                                                    <div className="date-day">
                                                        Thursday
                                                    </div>
                                                </div>
                                                <div
                                                    className="carousel-cell"
                                                    id={7}
                                                >
                                                    <div className="date-numeric">
                                                        19
                                                    </div>
                                                    <div className="date-day">
                                                        Friday
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="time-ul">
                                                <li className="time-li">
                                                    <div className="screens">
                                                        Screen 1
                                                    </div>
                                                    <div className="time-btn">
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            1:05 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            4:00 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
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
                                                            onClick={
                                                                e.timeFunction
                                                            }
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
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            9:05 AM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
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
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            9:05 AM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            11:00 AM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            3:00 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            7:00 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            10:00 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
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
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            9:05 AM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            12:00 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
                                                        >
                                                            1:00 PM
                                                        </button>
                                                        <button
                                                            className="screen-time"
                                                            onClick={
                                                                e.timeFunction
                                                            }
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
                                                                    <div className="col-50 payment">
                                                                        <label
                                                                            htmlFor="card"
                                                                            className="method card"
                                                                        >
                                                                            <div className="icon-container">
                                                                                <i
                                                                                    className="fa fa-cc-visa"
                                                                                    style={{
                                                                                        color: "navy",
                                                                                    }}
                                                                                />
                                                                                <i
                                                                                    className="fa fa-cc-amex"
                                                                                    style={{
                                                                                        color: "blue",
                                                                                    }}
                                                                                />
                                                                                <i
                                                                                    className="fa fa-cc-mastercard"
                                                                                    style={{
                                                                                        color: "red",
                                                                                    }}
                                                                                />
                                                                                <i
                                                                                    className="fa fa-cc-discover"
                                                                                    style={{
                                                                                        color: "orange",
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="radio-input">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="card"
                                                                                />
                                                                                Pay
                                                                                RS.200.00
                                                                                with
                                                                                credit
                                                                                card
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-50 payment">
                                                                        <label
                                                                            htmlFor="paypal"
                                                                            className="method paypal"
                                                                        >
                                                                            <div className="icon-container">
                                                                                <i
                                                                                    className="fa fa-paypal"
                                                                                    style={{
                                                                                        color: "navy",
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="radio-input">
                                                                                <input
                                                                                    id="paypal"
                                                                                    type="radio"
                                                                                    defaultChecked
                                                                                />
                                                                                Pay
                                                                                $30.00
                                                                                with
                                                                                PayPal
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="payment-row">
                                                                    <div className="col-50">
                                                                        <label htmlFor="cname">
                                                                            Cardholder's
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="cname"
                                                                            name="cardname"
                                                                            placeholder="Firstname Lastname"
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className="col-50">
                                                                        <label htmlFor="ccnum">
                                                                            Credit
                                                                            card
                                                                            number
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="ccnum"
                                                                            name="cardnumber"
                                                                            placeholder="xxxx-xxxx-xxxx-xxxx"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="payment-row">
                                                                    <div className="col-50">
                                                                        <label htmlFor="expmonth">
                                                                            Exp
                                                                            Month
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="expmonth"
                                                                            name="expmonth"
                                                                            placeholder="September"
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className="col-50">
                                                                        <div className="payment-row">
                                                                            <div className="col-50">
                                                                                <label htmlFor="expyear">
                                                                                    Exp
                                                                                    Year
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    id="expyear"
                                                                                    name="expyear"
                                                                                    placeholder="yyyy"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className="col-50">
                                                                                <label htmlFor="cvv">
                                                                                    CVV
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    id="cvv"
                                                                                    name="cvv"
                                                                                    placeholder="xxx"
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
                                            </div>
                                        </div>
                                        <input
                                            type="button"
                                            name="next-step"
                                            className="next-step pay-btn"
                                            defaultValue="Confirm Payment"
                                        />
                                        <input
                                            type="button"
                                            name="previous-step"
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
                                                                <td>
                                                                    RS.12.00
                                                                </td>
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

                <script
                    type="text/javascript"
                    src="assets/js/ticket-booking.js"
                />
            </>
        );
    }
}
export default Booking;
