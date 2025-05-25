import React from 'react';
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
} from '@mui/material';

const appointmentSlots = {
  Morning: ['10:30 AM', '11:00 AM'],
  Afternoon: ['12:30 PM', '02:00 PM'],
  Evening: ['05:00 PM', '05:30 PM', '06:00 PM'],
};

const HospitalCard = ({ name, city, state }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon="+">
        <Card variant="outlined" sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2">{city}, {state}</Typography>
            <Typography variant="caption">FREE Consultation • Available Today</Typography>
            {/* <Button variant="contained" size="small" sx={{ float: 'right', mt: -4 }}>
              Book FREE Center Visit
            </Button> */}
          </CardContent>
        </Card>
      </AccordionSummary>
      <AccordionDetails>
        {Object.entries(appointmentSlots).map(([slotType, times]) => (
          <Box key={slotType} mb={2}>
            <Typography variant="subtitle2" gutterBottom>{slotType}</Typography>
            <Grid container spacing={1}>
              {times.map((time, idx) => (
                <Grid key={idx}>
                  <Chip label={time} color="primary" variant="outlined" clickable />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default HospitalCard
