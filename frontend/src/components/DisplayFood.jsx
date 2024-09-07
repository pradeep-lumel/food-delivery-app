import { Box, Button, Card, CardActions, CardContent, CardMedia, Container ,Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomDivider, HeadingTypo, SubtitleTypo } from '../utils/Typo'; 
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import FoodCard from './FoodCard';
import { food_list } from '../../public/Food_images/assets/assets';

const FoodDisplayBox = styled(Box)(({ theme }) => ({
  maxHeight:'maxContent',
  overflow: 'hidden',
  flexShrink: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '16px',
  width: '100%',
}));

export const DisplayFood = () => {
 
  return (
    <Container>
      <HeadingTypo>Top Dishes Near You</HeadingTypo>
      <FoodDisplayBox>
        {food_list && food_list.map((item)=>(
            <FoodCard  {...item}/>
        ))}
      </FoodDisplayBox>
    </Container>
  );
};
