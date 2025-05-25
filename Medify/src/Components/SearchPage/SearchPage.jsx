import { useLocation } from "react-router-dom";

import Top from "../Top/Top";
import NavBar from "../NavBar/NavBar";
// import Hero from "./Components/HeroSection/Hero";
// import AddArea from "./Components/AddArea/AddArea";
// import Specialisation from "./Components/Specialisation/Specialisation";
// import Specialist from "./Components/Specialist/Specialist";
// import CaringSection from "./Components/Caring/Caring";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import Faq from "../FAQ/FAQ";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

// import SearchBox from "./Components/SearchBox/SearchBox";

export default function SearchPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const state = params.get("state");
  const city = params.get("city");
  const category = params.get("category");
  console.log(state);

  const [centers, setCenters] = useState([]);

  useEffect(() => {
    if(!state) return;

    const fetchMedicalCenters = async () => {
        try{
            const response = await axios(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
            setCenters(response.data);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }

    }
    fetchMedicalCenters();


  },[state]);
  console.log(centers)

  return (
    <>
        <Top/>
        <NavBar/>
        <Box sx={{height: "110px", backgroundColor: "hsla(205, 100%, 58%, 1)"}}></Box>
        <Box sx={{color: "black"}}>      <h2>Showing results for:</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Location:</strong> {city}, {state}</p></Box>
      {/* Fetch and render real data based on params here */}
              <Faq/>
              <Contact/>
              <Footer/>
    </>
  );
}
