import { Box, Button, Card, CardActions, CardContent, CardMedia, Container ,Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { CustomDivider, HeadingTypo, SubtitleTypo } from '../utils/Typo'; 
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
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
 const {activeFoodCategory:activeFood,foodOrderedCount}=useSelector(state=>state.foodDisplay)
 console.log(foodOrderedCount);
 const [specificCategoryList, setSpecificCategoryList] = useState([])
 useEffect(()=>{
    const filteredList=food_list.filter((item)=>{
    return item.category==activeFood
  })
  if(filteredList.length==0)setSpecificCategoryList(food_list)
  else setSpecificCategoryList(filteredList)
 },[activeFood])
  return (
    <Container>
      <HeadingTypo>Top Dishes Near You {activeFood!=='' && '-'} {activeFood}</HeadingTypo>
      <FoodDisplayBox>
        {specificCategoryList && specificCategoryList.map((item,_id)=>(
            <FoodCard  key={_id} {...item}/>
        ))}
      </FoodDisplayBox>
    </Container>
  );
};
