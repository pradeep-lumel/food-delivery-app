import React from 'react';
import { Box, Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Box sx={{padding:{sm:'1% 2%',md:'1% 6%'}}}>
      <Navbar />
      <Home/>
      </Box>
      <Footer/>
    </Container>
  );
}

export default App;
