// // import "./App.css";

// // function App() {
// //   return (
// //     <>
      
// //     </>
// //   );
// // }

// // export default App;


// import React from 'react';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import About from './components/About';

function App() {
  const [page, setPage] = useState('home');
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Healthhub-dev
          </Typography>
          <Button color="inherit" onClick={() => setPage('home')}>Home</Button>
          <Button color="inherit" onClick={() => setPage('dashboard')}>Dashboard</Button>
          <Button color="inherit" onClick={() => setPage('about')}>About Us</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'right', padding: '8px', fontSize: '14px', color: '#555', background: '#f5f5f5' }}>
        {`Date: ${formattedDate} | Time: ${formattedTime}`}
      </Box>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'dashboard' && <Dashboard />}
    </Box>
  );
}

export default App;