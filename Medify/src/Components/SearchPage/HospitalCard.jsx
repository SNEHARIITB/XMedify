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
  Tabs,
  Tab,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const appointmentSlots = {
  Morning: ['10:30 AM', '11:00 AM'],
  Afternoon: ['12:30 PM', '02:00 PM'],
  Evening: ['05:00 PM', '05:30 PM', '06:00 PM'],
};

const days = ['Today', 'Tomorrow', 'Next'];

const HospitalCard = ({ name, city, state }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedDayIndex(newValue);
    setSelectedSlot(null);
  };

  // When swiper slide changes, update the selected tab/day
  const handleSlideChange = (swiper) => {
    setSelectedDayIndex(swiper.activeIndex);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slotType, time) => {
    const booking = {
      "Hospital Name": name,
      city,
      state,
      slotType,
      time,
      day: days[selectedDayIndex],
      date: getDateFromDay(days[selectedDayIndex]),
    };

    setSelectedSlot(time);

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    alert(`Booked ${time} on ${booking.day} at ${name}`);
  };

  function getDateFromDay(dayLabel) {
    const today = new Date();
    switch (dayLabel) {
      case 'Today':
        return today.toLocaleDateString();
      case 'Tomorrow':
        { const t = new Date(today);
        t.setDate(t.getDate() + 1);
        return t.toLocaleDateString(); }
      case 'Next':
        { const n = new Date(today);
        n.setDate(n.getDate() + 2);
        return n.toLocaleDateString(); }
      default:
        return today.toLocaleDateString();
    }
  }

  return (
    <Card variant="outlined" sx={{ width: '100%', mb: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" component="h3" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {city}, {state}
          </Typography>
          {/* <Typography variant="caption" color="textSecondary" sx={{ mt: 0.5 }}>
            {days[selectedDayIndex]}
          </Typography> */}
          <p className="dayLabel">{days[selectedDayIndex]}</p>

        </Box>
        <Button
          variant="contained"
          size="small"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="appointment-slots"
        >
          {expanded ? 'Hide Slots' : 'Book FREE Center Visit'}
        </Button>
      </CardContent>

      {expanded && (
        <>
          {/* Tabs for day selection */}
          <Tabs
            value={selectedDayIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            {days.map((day) => (
              <Tab key={day} label={day} />
            ))}
          </Tabs>

          {/* Swiper for swipe gesture on day selection */}
          <Swiper
            onSlideChange={handleSlideChange}
            slidesPerView={1}
            style={{ padding: '1rem 0' }}
            initialSlide={selectedDayIndex}
          >
            {days.map((day, idx) => (
              <SwiperSlide key={day}>
                <AccordionDetails sx={{ p: 2 }}>
                  {Object.entries(appointmentSlots).map(([slotType, times]) => (
                    <Box key={slotType} mb={2}>
                      {/* <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        {slotType}
                      </Typography> */}
                      <p className="slotTypeLabel">{slotType}</p>

                      <Grid container spacing={1}>
                        {times.map((time) => (
                          <Grid key={`${slotType}-${time}`}>
                            <Chip
                              label={time}
                              color={selectedSlot === time && selectedDayIndex === idx ? 'secondary' : 'primary'}
                              variant="outlined"
                              clickable
                              onClick={() => handleSlotSelect(slotType, time)}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  ))}
                </AccordionDetails>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </Card>
  );
};

export default HospitalCard;
