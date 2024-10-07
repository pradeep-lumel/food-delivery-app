import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import Footer from './components/Footer';
import LoginModal from './components/LogIn';
import SignUpModal from './components/SignUp';
import Cart from './components/Cart';
import Order from './components/Order';
import MyOrders from './components/MyOrders'
import {useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from './utils/axiosInstance';
import { login } from './slicers/authSlice';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if (token) {
      const fetchUserDetails = async () => {
        try {
          const response = await axiosInstance.get('/user/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch(login({ user: response.data.user, token }));
        } catch (error) {
          console.error('Failed to fetch user details:', error);
          // localStorage.removeItem('token');
        }
      };
      fetchUserDetails();
    }
  },[dispatch])
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
      <Route path='/order' element={<Order/>}/>
      <Route path='/my-orders' element={<MyOrders/>}/>
      </Routes>
      <Footer/>
      </Box>
    </Container>
    <ToastContainer/>
    </Router>
  );
}

export default App;
