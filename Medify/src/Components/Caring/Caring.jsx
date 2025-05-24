import React from "react";
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Container } from "@mui/material";

import Caring_02 from "../../assets/Caring_02.png";
import Caring_01 from "../../assets/Caring_01.png";
import styles from "./Caring.module.css";
import Caring_phone from "../../assets/Caring_phone.svg";

const CaringSection = () => {
  return (
    <Box sx={{ backgroundColor: "hsla(218, 100%, 95%, 1)" ,height: "598px"}}>

      <Container>
        
        <Grid container spacing={2}>

          <Grid size={{ xs: 6, md:  6, lg: 6}}>

            <Box className={styles.imagebox}>
              {/* <Box>
                <Typography>
                  <img src={Caring_phone} className={styles.phone} alt="doctor1"/>
                  Free Consultation
                </Typography>
                <Typography>
                  Consultation with the best
                </Typography>
              </Box> */}
              <img src={Caring_01} className={styles.img1} alt="doctor1"/>
              {/* <img src={Caring_02} className={styles.img2} alt="doctor2"/> */}
            </Box>

          </Grid>

          <Grid size={{ xs: 6, md:  6, lg: 6}}>

              <Typography variant="h6" color="primary" gutterBottom>
                HELPING PATIENTS FROM AROUND THE GLOBE!
              </Typography>
              <Typography variant="h4" gutterBottom sx={{color: "black"}}>
                <strong>Patient </strong><strong style={{ color: "#00AEEF" }}>Caring</strong>
              </Typography>
              <Typography variant="body1" sx={{py:2,color: "black"}}>
                Our goal is to deliver quality care in a courteous, respectful, and compassionate manner. 
                We hope you will allow us to care for you and to be the first and best choice for healthcare.
              </Typography>

              <List sx={{color: "black"}}>
                {[
                  "Stay Updated About Your Health",
                  "Check Your Results Online",
                  "Manage Your Appointments"
                ].map((text, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {/* <CheckCircleIcon sx={{ color: "#00AEEF" }} /> */}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>

          </Grid>

        </Grid>


      </Container>



    </Box>
  );
};

export default CaringSection;
