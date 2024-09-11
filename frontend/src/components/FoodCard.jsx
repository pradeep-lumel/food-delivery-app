import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Box, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { HeadingTypo, SubtitleTypo } from '../utils/Typo';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodOrderedCount } from '../slicers/FoodDisplaySlice';

const GoldTypography = styled(Typography)(({ theme }) => ({
  fontSize: {
    xs: '14px', 
    sm: '18px'   
  },
  color: 'orange',
  fontWeight: 'bold',
}));

const FoodCard = ({ name, image, price, description }) => {
  const quantity=useSelector(state=>state.foodDisplay.foodOrderedCount[name]??0);
  const dispatch=useDispatch();

  const handleIncrease = () => {
    dispatch(setFoodOrderedCount({foodName:name,count:1}))
  };

  const handleDecrease = () => {
    if (quantity > 0) dispatch(setFoodOrderedCount({foodName:name,count:-1}))
      if(quantity==1)setAddButtonClicked(!addButtonClicked);
  };
  useEffect(()=>{},[quantity])
  return (
    <Card 
      sx={{ 
        width: { xs: 200, sm: 200 }, 
        height: { xs: 150, sm: 260 }, 
        padding: '2px', 
        margin: '10px', 
        position: 'relative'
      }}
    >
      <CardMedia
        sx={{ 
          height: { xs: 120, sm: 150 }, 
          borderRadius: '4px 4px 0 0' 
        }}
        image={image}
        title={name}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '20%', md: '45%' }, 
          right: 10, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {quantity!=0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100px', 
              padding: '4px',
              borderRadius: '24px',
              background: 'linear-gradient(45deg, #fce4ec, #e1f5fe)', 
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <IconButton
              onClick={handleDecrease}
              size="small"
              sx={{
                backgroundColor: '#ffffff',
                color: '#f44336',
                '&:hover': {
                  backgroundColor: '#ffe0b2',
                },
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '50%',
                height: '25px',
                width: '25px',
              }}
            >
              <RemoveIcon sx={{ fontSize: '18px' }} />
            </IconButton>
            <Typography 
              sx={{ 
                fontSize: '14px', 
                fontWeight: 'bold',
                color: '#4caf50',
                mx: 1 
              }}
            >
              {quantity}
            </Typography>
            <IconButton
              onClick={handleIncrease}
              size="small"
              sx={{
                backgroundColor: '#ffffff',
                color: '#4caf50',
                '&:hover': {
                  backgroundColor: '#c8e6c9',
                },
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '50%',
                height: '25px',
                width: '25px',
              }}
            >
              <AddIcon sx={{ fontSize: '18px' }} />
            </IconButton>
          </Box>
        ) : (
          <IconButton
            onClick={handleIncrease}
            sx={{
              height: { xs: '30px' },
              width: { xs: '30px' },
              backgroundColor: '#ff9800',
              borderRadius: '50%',
              padding: 1,
              '&:hover': {
                backgroundColor: '#f57c00',
              },
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            color="primary"
          >
            <AddIcon sx={{ color: 'white' }} />
          </IconButton>
        )}
      </Box>
      <CardContent sx={{ margin: '-5px', padding: '8px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <HeadingTypo sx={{ fontSize: { xs: '10px', sm: '12px' } }}>{name}</HeadingTypo>
          <GoldTypography
            sx={{ display: { sm: 'flex', md: 'none' }, fontSize: '10px' }}
          >
            {`$${price}`}
          </GoldTypography>
          <Rating
            sx={{ fontSize: { xs: '8px', sm: '10px' } }}
            name="simple-controlled"
            value={2}
          />
        </Box>
        <SubtitleTypo 
          sx={{ 
            fontWeight: '100', 
            fontSize: { xs: '8px', sm: '10px' }, 
            marginTop: '5px',
            display: { xs: 'none', sm: 'block' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: { xs: 0, sm: 3 }
          }}
        >
          {description}
        </SubtitleTypo>
        <GoldTypography sx={{ display: { xs: 'none', md: 'flex' } }}>
          {`$${price}`}
        </GoldTypography>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
