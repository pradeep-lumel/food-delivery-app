import React from 'react';
import { Card, CardMedia, CardContent, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { HeadingTypo, SubtitleTypo } from '../utils/Typo';

const GoldTypography = styled(Typography)(({ theme }) => ({
  fontSize: {
    xs: '14px',  // Small screens
    sm: '18px'   // Medium screens and up
  },
  color: 'orange',
  fontWeight: 'bold',
}));

const FoodCard = ({ id, name, image, price, description, category }) => {
  return (
    <Card 
      sx={{ 
        width: {
          xs: 200,  
          sm: 200,  
        }, 
        height: {
          xs: 150,  
          sm: 260,  
        },
        padding: '2px', 
        margin: '10px'
      }}
    >
      <CardMedia
        sx={{ 
          height: {
            xs: 120, 
            sm: 150,  
          }, 
          borderRadius: '4px 4px 0 0' 
        }}
        image={image}
        title={name}
      />
      <CardContent sx={{ margin: '-5px', padding: '8px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <HeadingTypo sx={{ fontSize: { xs: '10px', sm: '12px' } }}>{name}</HeadingTypo>
          <GoldTypography
          sx={{display:{sm:'flex',md:'none'},
          fontSize:'10px'}}
          >{`$${price}`}</GoldTypography>
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
        <GoldTypography
        sx={{display:{xs:'none',md:'flex'}}}
        >{`$${price}`}</GoldTypography>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
