import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../slicers/authSlice';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(() => {
    if (location.pathname === '/login') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname]);
  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/login', formData);
      console.log(response)
      const { token, user } = response.data;
      dispatch(login({ user, token }));
      localStorage.setItem('token', token);
      handleClose(); 
    } catch (error) {
      toast.error('Login failed:', error.response?.data?.message || error.message);
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
        >
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{ sx: { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{ sx: { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
