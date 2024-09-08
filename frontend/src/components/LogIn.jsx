import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/login') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Redirect to home or any other page after closing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login Form Data:', formData);
    handleClose(); // Close the modal after submission
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
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
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
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log In
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
