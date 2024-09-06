import React from 'react';
import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <Container sx={{padding:{sm:'1% 2%',md:'1% 6%'}}}>
      <Navbar />
      <Home/>
    </Container>
  );
}

export default App;
