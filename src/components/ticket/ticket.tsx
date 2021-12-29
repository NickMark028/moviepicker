/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import axios from "axios";
import { redirect } from "next/dist/next-server/server/api-utils";
// window.addEventListener("onClick", (e) => handleClick(e,"Screen 1 10:00 AM"), false);

export function Ticket() {
    const getScreen = () => {
        if (process.browser) {
            return localStorage.getItem("screen");
        }
    };
    const getSeats = () => {
        if (process.browser) {
            return localStorage
                .getItem("seats")!
                .match(/.{1,7}/g)
                ?.join("\n");
        }
    };
    const getShowTime = () => {
        if (process.browser) {
            return localStorage.getItem("showtime");
        }
    };
    const getPrice = () => {
        if (process.browser) {
            return localStorage.getItem("price");
        }
    };
    const getName = () => {
        if (process.browser) {
            return localStorage.getItem("movieName");
        }
    };
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/e-ticket.css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <fieldset>
                    <h2>E-Ticket</h2>
                    <div className="ticket-body">
                        <div className="ticket">
                            <div className="holes-top" />
                            <div className="title">
                                <p className="cinema">MyShowz Entertainment</p>
                                <p className="movie-title">
                                    Movie Name: {getName}
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
                                            <th>SEAT</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td className="bigger">
                                                {getScreen()}
                                            </td>
                                            <td className="bigger">
                                                {getSeats()}
                                            </td>
                                            <td className="bigger"></td>
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
                                            <td>{getPrice() + " VND"}</td>
                                            <td>4/13/21</td>
                                            <td>{getShowTime()}</td>
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
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "black",
                                                }}
                                            />
                                            <td
                                                style={{
                                                    backgroundColor: "white",
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
                        onClick={() =>
                            (window.location.href = "http://localhost:3000/")
                        }
                    />
                </fieldset>
            </div>
        </>
    );
}
export default Ticket;
