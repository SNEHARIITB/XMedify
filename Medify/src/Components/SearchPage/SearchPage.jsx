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
import { useEffect, useState } from "react";
import axios from 'axios';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Box,
  Chip,
  TextField,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import HospitalCard from './HospitalCard';

import styles from "./SearchPage.module.css"

 
const SearchPage = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const state = params.get("state");
  const city = params.get("city");
  //const category = params.get("category");


  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const [statesData, setStatesData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [errors, setError] = useState(null);







  useEffect(() => {

    const fetchHospitals = async () => {
      try{
        const response = await axios(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        setHospitals(response.data);
        console.log("response.data", response.data);
      }
      catch(error){
        console.log(error);
      }
    }

    fetchHospitals();


  },[]);


    useEffect(() => {
    const fetchState = async () => {
      setLoadingStates(true);
      try {
        const response = await axios("https://meddata-backend.onrender.com/states");
        setStatesData(response.data);
      } catch (error) {
        setError("Failed to fetch states");
        console.error(error);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchState();
  }, []);

  useEffect(() => {
    if (!stateSelected) return;

    const fetchCity = async () => {
      setLoadingCities(true);
      try {
        const response = await axios(`https://meddata-backend.onrender.com/cities/${stateSelected}`);
        setCityData(response.data);
      } catch (error) {
        setError("Failed to fetch cities");
        console.error(errors,error);
      } finally {
        setLoadingCities(false);
      }
    };

    fetchCity();
  }, [stateSelected]);



  const handleSearch = async (e) => {
    e.preventDefault(); // prevent form reload
    try {
      const response = await axios(`https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${citySelected}`);
      setHospitals(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Failed to fetch hospitals", error);
    }
  };


  return (
    <>
      <Top/>
      <NavBar/>

      <Box sx={{height: "110px", backgroundColor: "hsla(205, 100%, 58%, 1)"}}></Box>

      
      <Box className={styles.searchbox}>
        <TextField
          select
          variant="outlined"
          size="small"
          className={styles.input}
          onChange={(e) => setStateSelected(e.target.value)}
          value={stateSelected}
          label="State"
        >
          {loadingStates ? (
            <MenuItem disabled>Loading States...</MenuItem>
          ) : (
            statesData.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))
          )}

        </TextField>

        <TextField
          select
          variant="outlined"
          size="small"
          className={styles.input}
          onChange={(e) => setCitySelected(e.target.value)}
          value={citySelected}
          label="City"
        >
          {loadingCities ? (
            <MenuItem disabled>Loading Cities...</MenuItem>
          ) : (
            cityData.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))
          )}

        </TextField>

        <Button variant="contained" type="submit" className={styles.searchButton} onClick={handleSearch}>
          Search
        </Button>

      </Box>


      <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', mt: 4 }}>
        {hospitals.map((hospital, index) => (
          <HospitalCard key={index} name={hospital["Hospital Name"]} city={hospital.City} state={hospital.State}/>
        ))}
      
      </Box>

      <Faq/>
      <Contact/>
      <Footer/>

    </>

  );
};

export default SearchPage;




