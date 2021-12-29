import React, { Component } from "react";
import Head from "next/head";

export function ListTicket(): JSX.Element {

    return (
        <>
        
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">

                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Spider Man Noway Home</h5>
                        <small>24/9/2021</small>
                    </div>
                    <p className="mb-1">Thành tiền: 250000VND</p>
                    <small>ID: 192381231123123.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Jumanji</h5>
                        <small>24/9/2021</small>
                    </div>
                    <p className="mb-1">Thành tiền: 120000VND</p>
                    <small>ID: 98213871231311.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Doctor Sleep</h5>
                        <small>24/9/2021</small>
                    </div>
                    <p className="mb-1">Thành tiền: 60000VND</p>
                    <small>ID: 8727347187123.</small>
                </a>
            </div>
        </>
    );
};

export default ListTicket;