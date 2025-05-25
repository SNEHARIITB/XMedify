import React from "react";

import Top from "../Top/Top";
import NavBar from "../NavBar/NavBar";

import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import SearchBox from "../SearchBox/SearchBox";

export default function LandingPage(){

    return(
        <>
        <Top/>
        <NavBar/>
        <SearchBox />

        <Contact/>
        <Footer/>
        </>
    );
}