import React, { useState } from 'react';
import {
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Box,
} from '@mui/material';

const appointmentSlots = {
  Morning: ['10:30 AM', '11:00 AM'],
  Afternoon: ['12:30 PM', '02:00 PM'],
  Evening: ['05:00 PM', '05:30 PM', '06:00 PM'],
};

const HospitalCard = ({ name, city, state }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card variant="outlined" sx={{ width: '100%', mb: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" component="h3" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2">
            {city}, {state}
          </Typography>
          <p style={{ margin: 0, color: 'gray', fontSize: '0.9rem' }}>Today</p>
        </Box>
        <Button variant="contained" size="small" onClick={handleToggle}>
          {expanded ? 'Hide Slots' : 'Book FREE Center Visit'}
        </Button>
      </CardContent>

      {expanded && (
        <AccordionDetails>
          {Object.entries(appointmentSlots).map(([slotType, times]) => (
            <Box key={slotType} mb={2}>
              <p style={{ margin: '8px 0 4px', fontWeight: '600' }}>{slotType}</p>
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
      )}
    </Card>
  );
};

export default HospitalCard;
