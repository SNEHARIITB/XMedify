import React from "react";
import styles from "./Info.module.css";

import { Box, Container,Grid } from "@mui/material";
import Hospitalpng from "../../assets/Hospital.png";
import Drugstorepng from "../../assets/Drugstore.png";
import Framepng from "../../assets/Frame.png";
import Carepng from "../../assets/Care.png";

const stats = [
  {
    icon: Carepng,//<FavoriteIcon style={{ color: "#0070f3", fontSize: 30 }} />,
    number: "5000+",
    label: "Happy Patients",
    bg: "#e6f1ff",
  },
  {
    icon: Hospitalpng, //<LocalHospitalIcon style={{ color: "#f97373", fontSize: 30 }} />,
    number: "200+",
    label: "Hospitals",
    bg: "#ffecec",
  },
  {
    icon: Drugstorepng,// <ScienceIcon style={{ color: "#f5b70a", fontSize: 30 }} />,
    number: "1000+",
    label: "Laboratories",
    bg: "#fff8e6",
  },
  {
    icon: Framepng,//<MedicalServicesIcon style={{ color: "#34c89b", fontSize: 30 }} />,
    number: "700+",
    label: "Expert Doctors",
    bg: "#eafff4",
  },
];

const InfoStats = () => {
  return (
    <Box className={styles.wrapper}>

      <Container>
        <Grid container spacing={2}>

          <Grid size={{xs: 6, md: 6, lg: 6}} className={styles.textSection}>
            <p className={styles.subheading}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
            <h2 className={styles.heading}>Our Families</h2>
            <p className={styles.description}>
              We will work with you to develop individualised care plans, including
              management of chronic diseases. If we cannot assist, we can provide
              referrals or advice about the type of practitioner you require. We
              treat all enquiries sensitively and in the strictest confidence.
            </p>
          </Grid>
          <Grid container size={{xs: 6, md: 6, lg: 6}} className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Grid size={{xs: 6, md: 6, lg: 6}} key={index} className={styles.statCard} sx={{ backgroundColor: stat.bg }}>
                <img src={stat.icon} alt={stat.label} style={{ width: 50, height: 50 }} />
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Container>

    </Box>
  );
};

export default InfoStats;
