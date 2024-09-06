import { Box, Container, styled, Button, Typography, Stack } from '@mui/material';
import React from 'react';

const OverlayContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '2%',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '0 10px',
  boxSizing: 'border-box',
}));

const OverlayText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '700',
  fontSize: '50px',
  fontFamily: 'Montserrat, sans-serif',
  padding: '10px',
  borderRadius: '8px',
  maxWidth: '80%',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));

const OverlaySpan = styled(Typography)(({ theme }) => ({
  display: 'none',
  color: 'white',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  marginTop: '10px',
  marginLeft:'10px',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const OverlayButton = styled(Button)(({ theme }) => ({
    marginTop: '15px',
    borderRadius: '20px',
    backgroundColor: 'lightgray',
    marginLeft:'10px',
    color: 'black',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px', 
    padding: '8px 16px', 
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
      padding: '6px 12px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      padding: '2px 6px',
    },
    '&:hover': {
      backgroundColor: 'gray',
    },
  }));
  
  

export const Home = () => {
  return (
    <Stack>
    <Container sx={{ position: 'relative', padding: '0' }}>
      <Box
        component="img"
        src="/Food_images/assets/header_img.png"
        alt="title_img"
        sx={{
            width: '100%',
            height: {
                xs: '180px',
                md: '400px',
            },
            marginTop: '15px',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        }}
        />
      <OverlayContainer>
        <OverlayText>
          Order your favourite <br /> food here!
        </OverlayText>
        <OverlaySpan>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi qui facere. Velit, quis odio molestiae deserunt culpa molestias omnis!  officia.</OverlaySpan>
        <OverlayButton>View more</OverlayButton>
      </OverlayContainer>
    </Container>
    {/* todo */}
    </Stack>
  );
};
