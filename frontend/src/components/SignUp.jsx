import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpModal = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/signup') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Redirect to home or any other page after closing
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign Up Form Data:', formData);
    handleClose(); // Close the modal after submission
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
          Sign Up
        </Typography>

        {/* Sign-up form inside the modal */}
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Sign Up
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
