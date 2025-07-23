import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #7b1fa2 60%, #ce93d8 100%)",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center", maxWidth: 700 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#7b1fa2" }}>
          About Our Hospital
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Health Medicare is a comprehensive hospital management system designed to streamline operations, enhance patient care, and provide real-time access to
          hospital facilities and resources. Our platform supports hospital administration, doctor management, patient records, facility tracking, billing, and
          more.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We are committed to delivering high-quality healthcare services with advanced technology, ensuring seamless communication between patients, doctors,
          and hospital staff. Our 24x7 helpline and ambulance services guarantee immediate assistance in emergencies.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our mission is to make healthcare accessible, efficient, and patient-centric. Thank you for trusting Health Medicare for your medical needs.
        </Typography>
        {/* <img
          src="https://www.svgrepo.com/show/354095/hospital-building.svg"
          alt="Hospital"
          style={{ width: 100, marginTop: 16 }}
        /> */}
      </Paper>
    </Box>
  );
}
