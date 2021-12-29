import React from "react";

import { Header, Footer } from "@components";
import Movie from "../src/components/movie/index";
const Film: React.FC = () => {
    return (
        <>
            <Header />
            <Movie />
            <Footer />
        </>
    );
};

export default Film;
