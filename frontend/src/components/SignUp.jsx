import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const SignUpModal = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:5000/api/v1/all-users');
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (location.pathname === '/signup') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // TODO: Implement the Axios POST request for sign-up
    handleClose();
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
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{ sx: { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
          />
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
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
            Sign Up
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
