import React from "react";
import styles from "./Footer.module.css";
import { Box, Typography, IconButton, Link, Grid, Container } from "@mui/material";

import medifylogo from "../../assets/medifylogo.svg";

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer} >
      <Container className={styles.container} >

        <Grid container spacing={2} className={styles.content}>

          <Grid size={{ xs: 12, md: 5, lg: 4 }} className={styles.iconsection}>
            
            <Box className={styles.logoSection}>
              {/* <Typography variant="h6" >
                <span role="img" aria-label="shield">🛡️</span> Medify
              </Typography> */}
              <img src={medifylogo} className={styles.logo} alt="" />
            </Box>

            <Box className={styles.socialIcons}>

            </Box>

          </Grid>


          <Grid container spacing={4} className={styles.linksContainer} size={{ xs: 12, md: 7, lg: 8 }}>

            <Grid size={{ xs: 6, lg: 4 }}>
              {["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"].map((text, idx) => (
                <Link href="#" key={idx} className={styles.link}>› {text}</Link>   
              ))}
            </Grid>
  
            
            <Grid size={{ xs: 6, lg: 4 }}>
                {["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"].map((text, idx) => (
                <Link href="#"  key={idx + 5} className={styles.link}>› {text}</Link>
                ))}
            </Grid>

            <Grid size={{ xs: 6, lg: 4 }}>
              {["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"].map((text, idx) => (
                <Link href="#" key={idx} className={styles.link}>› {text}</Link>
              ))}
            </Grid>
            
          </Grid>




        </Grid>

        <Box className={styles.copy}>
          <Typography variant="body2">
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
