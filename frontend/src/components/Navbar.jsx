import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, IconButton, styled, Button, Avatar, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slicers/authSlice';
import { toast } from 'react-toastify';
 
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
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { isAuth, user: userObj } = useSelector((state) => state.authentication);
  const foodCountMap= useSelector((state) => state.foodDisplay.foodOrderedCount);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    toast.info('please login to have a Quick Bite');
    setTimeout(() => {
      handleClose();
    }, 1000); 
    navigate('/');
  };
 
  useEffect(() => {}, [isAuth]);
 
  const calcBadge=()=>{
    let cartedFoodCount=0;
    Object.keys(foodCountMap).forEach((key)=>{
      if(foodCountMap[key]!=0)cartedFoodCount++;
    })
    return cartedFoodCount
  }

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '10px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1100,
      backgroundColor: '#fff',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px'
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
        <div onClick={() => navigate('/')}>
          <HeaderSpan>Q</HeaderSpan>uick<HeaderSpan>B</HeaderSpan>ite
        </div>
      </Typography>
 
      <MenuContainer component="ul">
        <li onClick={() => navigate('/')}>Home</li>
        {['Menu', 'Testimonials', 'About Us'].map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => {
              handleTabClick(tab);
              if (tab !== 'Home') {
                document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ pointerEvents: !isHome && tab !== 'Home' ? 'none' : 'auto', color: !isHome && tab !== 'Home' ? 'gray' : 'inherit' }}
          >
            <ScrollLink
              to={tab}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {tab}
            </ScrollLink>
          </li>
        ))}
      </MenuContainer>
 
      <IconContainer>
        <IconButton sx={{ display: { xs: 'none', md: 'flex' } }} color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton onClick={() => navigate('/cart')} sx={{ display: { xs: 'none', md: 'flex' } }} color="inherit">
        <Badge badgeContent={calcBadge()} color="warning"> 
      <ShoppingCartIcon />
    </Badge>
        </IconButton>
        {isAuth ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar sx={{ height: '30px', width: '30px' }} />
            <Typography sx={{ display: { xs: 'none', md: 'block' }, fontFamily: 'Montserrat, sans-serif' }}>
              {userObj?.user?.name}
            </Typography>
            <Box
              component="img"
              src="../../public/Food_images/assets/logout_icon.png"
              alt="logout"
              height="25"
              onClick={handleLogout}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
        ) : (
          <Button
            sx={{
              bgcolor: 'orange',
              fontSize: '0.75rem',
              padding: '6px 12px',
              fontFamily: 'Montserrat, sans-serif',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '4px',
            }}
            size="small"
            variant="contained"
          >
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Login
            </Link>
            /
            <Link
              to="/signup"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Signup
            </Link>
          </Button>
        )}
      </IconContainer>
    </Container>
  );
};
 
export default Navbar;