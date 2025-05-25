import React from "react";

import Top from "./Components/Top/Top";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/HeroSection/Hero";
import AddArea from "./Components/AddArea/AddArea";
import Specialisation from "./Components/Specialisation/Specialisation";
import Specialist from "./Components/Specialist/Specialist";
import CaringSection from "./Components/Caring/Caring";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import InfoStats from "./Components/Info/Info";
import Faq from "./Components/FAQ/FAQ";
import BlogNews from "./Components/News/News";
import SearchBox from "./Components/SearchBox/SearchBox";

export default function LandingPage(){

    return(
        <>
        <Top/>

        <Hero />
        <SearchBox />
        <AddArea/>
        <Specialisation/>
        <Specialist/>
        <CaringSection/>
        <BlogNews/>
        <InfoStats/>

        <Faq/>
        <Contact/>
        <Footer/>
        </>
    );
}