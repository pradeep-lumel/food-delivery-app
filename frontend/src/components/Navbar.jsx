import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-scroll';

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
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      position: 'sticky',
      top: 0, 
      zIndex: 1100, 
      backgroundColor: '#fff', 
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
      borderRadius:'10px'
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
        }}
      >
        <HeaderSpan>Q</HeaderSpan>uick<HeaderSpan>B</HeaderSpan>ite
      </Typography>

      <MenuContainer component="ul">
        {['Home', 'Menu', 'Testimonials', 'About Us'].map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => {
              handleTabClick(tab);
              if (tab !== 'Home') {
                // Ensure you have an element with the id corresponding to the tab
                document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Link 
              to={tab}
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
            >
              {tab}
            </Link>
          </li>
        ))}
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
};

export default Navbar;
