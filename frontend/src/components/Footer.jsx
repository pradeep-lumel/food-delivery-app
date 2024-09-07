import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box id="About Us"
      sx={{ 
        backgroundColor: '#212121', 
        color: '#fff', 
        py: 4, 
        borderRadius: '10px 10px 0 0',  // Rounded top corners
        boxShadow: '0px -3px 10px rgba(0, 0, 0, 0.3)',  // Adds shadow for subtle elevation
        mt: 4  // Adds margin-top to separate from other content
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company dedicated to providing the best services and products. Our mission is to make your life easier with our innovative solutions.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ my: 0.5 }}>
              Home
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ my: 0.5 }}>
              About
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ my: 0.5 }}>
              Services
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ my: 0.5 }}>
              Contact
            </Link>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: support@company.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 (234) 567-8900
            </Typography>

            {/* Social Media Icons */}
            <Box mt={2}>
              <IconButton aria-label="Facebook" color="inherit" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit" href="https://instagram.com">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit" href="https://linkedin.com">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
