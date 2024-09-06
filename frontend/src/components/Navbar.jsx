import React from 'react';
import { Box, Container, Typography, IconButton, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MenuContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    '& li': {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '16px',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',  
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex', 
    },
}));

const HeaderSpan = styled('span')(({ theme }) => ({
    color: 'orange',
    fontWeight: 'bold',
    fontSize: '1.5em',
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    [theme.breakpoints.up('md')]: {
      gap: '15px',
    },
}));

const Navbar = () => {
  return (
    <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
    }}>
        <Typography
      sx={{
        fontWeight: 'bold',
        color: 'black',
        fontSize: {
          xs: '20px',
          sm: '24px',
          md: '28px',
        },
        letterSpacing: '1px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        fontFamily: 'Montserrat, sans-serif',
        lineHeight: '1.2',
      }}>
          <HeaderSpan>Q</HeaderSpan>uick<HeaderSpan>B</HeaderSpan>ite
        </Typography>
        
        <MenuContainer component="ul">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>About Us</li>
        </MenuContainer>

        <IconContainer>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
        </IconContainer>
    </Container>
  );
}

export default Navbar;
