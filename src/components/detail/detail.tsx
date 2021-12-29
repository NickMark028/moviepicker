import React, { Component } from "react";
import Head from "next/head";

export function Detail() {
    const getName = () => {
        if (process.browser) {
            localStorage.setItem("movieName", "Comando3");
        }
    };
    getName();

    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content" id="mymodalcontent">
                <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLongTitle">
                        DETAILS
                    </h4>
                </div>
                <div className="modal-body" id="dynamic-content">
                    <img
                        src="assets/images/commando3.png"
                        className="img-fluid modalimg"
                        alt
                    />
                    <p></p>
                    <h3>Release Date&nbsp;:29 November 2019</h3>
                    <h3>Venue&nbsp;:Cg Road </h3>
                    <p />
                    <h4>About Movie</h4>
                    <p>
                        Commando 3 is a 2019 Indian Hindi-language action
                        thriller film directed by Aditya Datt and produced by
                        Vipul Amrutlal Shah, Reliance Entertainment.The film is
                        the sequel of Commando: A One Man Army (2013) and
                        Commando 2: The Black Money Trail (2017). The third
                        installment of Commando film series, the film features
                        Vidyut Jammwal, Adah Sharma, and Angira Dhar in lead
                        roles, with Gulshan Devaiah portraying the
                        antagonist.Jammwal reprises his role as the commando
                        Karan, who goes undercover with encounter specialist
                        Bhavana Reddy for an anti-terrorist mission in London.
                    </p>
                    <h4>Star Cast</h4>
                    <p>
                        Vidyut Jammwal as Commando Karanveer Singh Dogra (Karan)
                        <br />
                        Adah Sharma as Inspector Bhavna Reddy
                        <br />
                        Angira Dhar as British Intelligence Agent Mallika Sood
                        <br />
                        Gulshan Devaiah as Buraq Ansari
                        <br />
                    </p>
                </div>
                <div className="bookbtn">
                    <button
                        style={{ marginLeft: "13rem" }}
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                            (window.location.href =
                                "http://localhost:3000/booking")
                        }
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
}
