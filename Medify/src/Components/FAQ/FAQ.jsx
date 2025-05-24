import React from 'react';
import styles from './FAQ.module.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from '@mui/material';

import doctor from "../../assets/doctor-patient.jpg";

const faqData = [
  "Why choose our medical for your family?",
  "Why we are different from others?",
  "Trusted & experience senior care & love",
  "How to get appointment for emergency cases?",
];

const Faq = () => {
  return (
    <Container className={styles.faqWrapper}>
      <Box>
        <Typography className={styles.subheading}>
          Get your Answers
        </Typography>
      </Box>

      <Box>
        <Typography  className={styles.heading}>
          Frequently Asked Questions
        </Typography>
      </Box>

      <Box className={styles.content}>

        <Box className={styles.imageSection}>
          <img src={doctor} alt="Doctor with patient" />
          <div className={styles.happyBox}>
            <span className={styles.emoji}>😊</span>
            <div>
              <h4>84k+</h4>
              <p>Happy Patients</p>
            </div>
          </div>
        </Box>
        <Box className={styles.faqContent}>

          {faqData.map((question, index) => (
            <Accordion key={index} className={styles.accordion}>
              <AccordionSummary expandIcon="+">
                <Typography className={styles.question}>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

        </Box>

      </Box>

    </Container>
  );
};

export default Faq;
