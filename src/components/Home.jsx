import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: "linear-gradient(135deg, #1976d2 60%, #90caf9 100%)"
    }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', maxWidth: 600 }}>
        <img
          src="https://www.svgrepo.com/show/354095/hospital-building.svg"
          alt="Hospital"
          style={{ width: 120, marginBottom: 16 }}
        />
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
          Welcome to Health Medicare
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your trusted partner for hospital and healthcare management.
        </Typography>
        <img
          src="https://www.svgrepo.com/show/354101/ambulance.svg"
          alt="Ambulance"
          style={{ width: 80, marginBottom: 8 }}
        />
        <Typography variant="h6" sx={{ color: '#d32f2f', mb: 1 }}>
          24x7 HelpLine: <b>1800-123-4567</b>
        </Typography>
        <Typography variant="body2" sx={{ color: '#388e3c' }}>
          Ambulance Service Available
        </Typography>
      </Paper>
    </Box>
  );
}