
import Top from "../Top/Top";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import React, { useEffect, useState } from 'react';
import styles from './BookingPage.module.css';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Chip
} from '@mui/material';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const filteredBookings = bookings.filter((booking) =>
    (booking.hospitalName || '').toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <>

    <Top/>

    <NavBar/>

    <Typography variant="h1" component="h1" className={styles.header}>My Bookings</Typography>

    <Box className={styles.container}>
      

      <Box className={styles.searchContainer}>
        <TextField
          variant="outlined"
          placeholder="Search By Hospital"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchField}
        />
        <Button variant="contained" className={styles.searchButton}>
          Search
        </Button>
      </Box>

      <Grid container spacing={2} className={styles.cardsWrapper}>
        {filteredBookings.map((booking, index) => (
          <Grid size={{xs : 12, md : 8}} key={index}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <Box className={styles.hospitalInfo}>
                  <div className={styles.hospitalIcon} />
                  <Box>
                    {/* <Typography variant="h3"  component="h3" className={styles.hospitalName}>
                      {booking.hospital.toLowerCase()}
                    </Typography> */}
                    <h3 className={styles.hospitalName}>{booking.hospital.toLowerCase()}</h3>
                    <Typography variant="body2">
                      <strong>{booking.city}, {booking.state}</strong>
                    </Typography>
                    <Typography variant="body2">
                      {booking.center} + {booking.additionalCenters} more
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.tagsContainer}>
                  <Chip label={booking.time} color="primary" />
                  <Chip label={booking.date} color="success" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Right Side Promo Card */}
        <Grid size={{xs : 12, md : 8}}>
          <Card className={styles.promoCard}>
            <CardContent>
              <Typography variant="body1" color="textSecondary">
                This World Oral Health Day,
              </Typography>
              <Typography variant="h6" color="primary">
                Get a FREE Appointment* with Top Dentists.
              </Typography>
              <Chip label="LIMITED PERIOD OFFER" color="info" size="small" />
              <Typography variant="caption" color="textSecondary" mt={1}>
                *T&C apply. Valid with schedules for Freedom+ registered users
              </Typography>
              <Typography variant="body2" color="primary">
                #BeSensitiveToOralHealth
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

    <Contact/>

    <Footer/>
    </>

  );
};

export default BookingPage;
