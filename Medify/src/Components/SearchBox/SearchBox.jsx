import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.css";
import { TextField, Button, Typography, Grid, Paper, Box, Container } from "@mui/material";
import axios from 'axios';
import { MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Doctors", icon: "🧑‍⚕️" },
  { label: "Labs", icon: "🏥" },
  { label: "Hospitals", icon: "🏨" },
  { label: "Medical Store", icon: "💊" },
  { label: "Ambulance", icon: "🚑" },
];


export default function SearchBox() {
  const [selectedCategory, setSelectedCategory] = useState("Hospitals");
  const [usState, setUsState] = useState("");
  const [usCity, setUsCity] = useState("");
  const [statesData, setStatesData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


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
    if (!usState) return;

    const fetchCity = async () => {
      setLoadingCities(true);
      try {
        const response = await axios(`https://meddata-backend.onrender.com/cities/${usState}`);
        setCityData(response.data);
      } catch (error) {
        setError("Failed to fetch cities");
        console.error(error);
      } finally {
        setLoadingCities(false);
      }
    };

    fetchCity();
  }, [usState]);

  
  const handleSearch = () => {
  if (usState && usCity && selectedCategory) {
    const queryParams = new URLSearchParams({
      state: usState,
      city: usCity,
      category: selectedCategory,
    }).toString();

    navigate(`/search?${queryParams}`);
    //console.log(`Searching for ${selectedCategory} in ${usCity}, ${usState}`);
  } else {
    alert("Please select all fields.");
  }
};



//   console.log(statesData);

  return (
    <Container className={styles.container}>
     
      <div className={styles.searchRow}>
        <TextField
          select
          variant="outlined"
          size="small"
          className={styles.input}
          onChange={(e) => setUsState(e.target.value)}
          value={usState}
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
          onChange={(e) => setUsCity(e.target.value)}
          value={usCity}
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
      </div>

        {error && (
          <Typography variant="body2" color="error" style={{ marginTop: "8px" }}>
            {error}
          </Typography>
        )}
      
      <Typography variant="subtitle1" className={styles.subheading}>
        You may be looking for
      </Typography>

      
      <Grid container justifyContent="center" spacing={2}>
        {categories.map((item) => (
          <Grid  key={item.label}>
            <Paper
              elevation={selectedCategory === item.label ? 4 : 1}
              onClick={() => setSelectedCategory(item.label)}
              className={`${styles.categoryCard} ${
                selectedCategory === item.label ? styles.selected : ""
              }`}
            >
              <div className={styles.icon}>{item.icon}</div>
              <Typography variant="body2">{item.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
