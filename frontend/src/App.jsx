import React from 'react';
import { Box, Container } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import Footer from './components/Footer';
import LoginModal from './components/LogIn';
import SignUpModal from './components/SignUp';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
    <Container>
      <Box sx={{padding:{sm:'1% 2%',md:'1% 6%'}}}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUpModal/>} />
      <Route path="/login" element={<LoginModal/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
      </Box>
    </Container>
    </Router>
  );
}

export default App;
