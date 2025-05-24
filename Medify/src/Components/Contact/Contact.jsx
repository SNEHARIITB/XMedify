import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Button, TextField, Typography, Box } from '@mui/material';

import mobile from "../../assets/mobileouter.png";
import apple from "../../assets/apple_store.png";
import google from "../../assets/google_play.png";

const Contact = () => {
  const [phone, setPhone] = useState('');

  const handleSendSMS = () => {
    if (phone.trim()) {
      alert(`SMS link sent to ${phone}`);
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <Box className={styles.imageContainer}>
        <img src={mobile} alt="Medify App Preview" />
      </Box>
      <div className={styles.textContainer}>
        <Typography variant="h5" className={styles.heading}>
          Download the 
          <br />
          <span className={styles.highlight}>Medify</span> App
        </Typography>
        <Typography variant="body1" className={styles.subtext} gutterBottom>
          Get the link to download the app
        </Typography>
        <Box className={styles.inputRow}>
          <TextField
            fullWidth
            placeholder="+91 phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.phoneInput}
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            color="primary"
            
            onClick={handleSendSMS}
            className={styles.smsButton}
          >
            Send SMS
          </Button>
        </Box>
        <Box className={styles.storeBadges}>
          <img src={google} alt="Google Play" />
          <img src={apple} alt="App Store" />
        </Box>
      </div>
    </div>
  );
};

export default Contact;
