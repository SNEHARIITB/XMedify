import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Caring_01 from "../../assets/Caring_01.png";

const doctors = [
  {
    name: "Dr. Ahmad Khan",
    specialty: "Neurologist",
    image: {Caring_01}, // Replace with actual image
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopaedics",
    image: {Caring_01},
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: {Caring_01},
  },
];

const MedicalSpecialists = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Our Medical Specialist
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          py: 2,
        }}
      >
        {doctors.map((doc, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 200,
              flexShrink: 0,
              textAlign: "center",
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={doc.image}
              alt={doc.name}
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {doc.name}
              </Typography>
              <Typography variant="body2" color="primary">
                {doc.specialty}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MedicalSpecialists;
