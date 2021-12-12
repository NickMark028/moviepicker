import React from "react";

import { Booking } from "../src/components/booking/booking";
import { Header } from "@components";

const Book: React.FC = () => {
    return (
        <>
            <Header />

            <Booking />
        </>
    );
};

export default Book;
