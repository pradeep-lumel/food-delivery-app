import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeadingTypo, SubtitleTypo } from '../utils/Typo'
import { menu_list } from '../../public/Food_images/assets/assets'
import { setActiveFoodCategory } from '../slicers/FoodDisplaySlice'

const ExploreMenu = () => {
    const activeId=useSelector(state=>state.foodDisplay.activeFoodCategory)
    console.log(activeId)
    const dispatch=useDispatch()
  return (
    <Container>
        <HeadingTypo>Explore Our Menu </HeadingTypo>
        <SubtitleTypo sx={{marginTop:'10px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />  Vitae ratione suscipit accusamus dolore laborum quam fugit quo magni iure minus!</SubtitleTypo>
        <Box 
             sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'auto',
                overflowY: 'hidden',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
                width: '100%',
                margin:'20px 10px',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                padding: '0'
              }}
        >
        {
        menu_list.map((item,_id)=>(
           <Box key={_id} 
           sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
           >
            <img 
              src={`${item.menu_image}`} 
              alt={item.menu_name} 
              style={{ 
                width: '100px',
                margin: '15px 20px',
                height: 'auto',
                borderRadius: '50%',
                boxShadow:activeId===item.menu_name?'1px 2px 20px green ':'',
                padding:'2px', 
                transition: 'border 0.3s ease', 
              }} 
              onClick={()=>dispatch(setActiveFoodCategory(item.menu_name))}
            />
            <SubtitleTypo sx={{marginTop:'15px'}}>{item.menu_name}</SubtitleTypo>
           </Box>
        ))
        }
        </Box>
    </Container>
  )
}

export default ExploreMenu