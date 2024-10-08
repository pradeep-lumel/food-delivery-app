import React, { useEffect, useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, 
  Stack,
  Container,
  Box,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { HeadingTypo } from '../utils/Typo';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const PromoCodeLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1),
  fontSize: '0.8rem',
}));

const Cart = () => {
  const [cartItems,setCartItems]=useState([]);
  const [cartItemsTotal,setCartItemTotal]=useState(0);
  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const res=await axiosInstance.get('http://localhost:5000/api/v1/all-cart')
      const cartDetails=res.data;
      const fetchedCartItems=cartDetails.cartItems;
      setCartItems(fetchedCartItems);
    } catch (error) {  
      console.error('Failed to fetch cart items:', error);
    } 
   }
   fetchData();
  },[cartItems])
  
  useEffect(()=>{
    const calculateTotal= ()=>{
      const totalSum=cartItems.reduce((sum,item)=>sum+ item.price * item.quantity ,0);
      setCartItemTotal(totalSum);
    }
    calculateTotal()
  },[cartItems])

  const navigate=useNavigate()
  

  const handleRemove = async (item) => {
    try {
      console.log(item._id);
      await axiosInstance.delete(`http://localhost:5000/api/v1/cart/${item._id}`);
      toast.success(`Item "${item.title}" deleted successfully`);
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error(`Failed to delete item "${item.title}"`);
    }
  };
  
  return (
    <Container>
      <TableContainer sx={{ marginTop: '2%', overflowX: 'auto' }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ padding: '8px' }}>{item.id}</TableCell>
                <TableCell sx={{ padding: '8px' }}>{item.title}</TableCell>
                <TableCell sx={{ padding: '8px' }}>${item.price}</TableCell>
                <TableCell sx={{ padding: '8px' }}>{item.quantity}</TableCell>
                <TableCell sx={{ padding: '8px' }}>${item.price * item.quantity}</TableCell>
                <TableCell sx={{ padding: '8px' }}>
                  <IconButton onClick={() => handleRemove(item)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <HeadingTypo sx={{marginTop:'3%'}}>Cart Totals</HeadingTypo>
      <Stack 
        spacing={2} 
        direction={{ xs: 'column', md: 'row' }} 
        justifyContent="space-between" 
        sx={{ marginTop: '2%', marginBottom: '3%', alignItems: { xs: 'flex-start', md: 'center' } }}
      >
        <TableContainer sx={{ width: { xs: '100%', md: '45%' }, marginBottom: { xs: '2%', md: 0 } }} component={Paper}>
          <Table>
            <TableBody>
                <TableRow>
                  <TableCell sx={{ padding: '8px' }}>Sub total</TableCell>
                  <TableCell sx={{ padding: '8px', textAlign: 'right' }}>{cartItemsTotal}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell sx={{ padding: '8px'}}>Delivery Fee</TableCell>
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$5</TableCell>
                </TableRow>
                <TableRow>
                <TableCell sx={{ padding: '8px',fontWeight:'800'}}>Total</TableCell>
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>${cartItemsTotal+5}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TextField
          sx={{ width: { xs: '100%', md: '40%' } }}
          label="If you have a promo code enter it here"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <PromoCodeLabel>PROMO CODE</PromoCodeLabel>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => {}} color="primary">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder='Enter here...'
        />
      </Stack>
      <Button onClick={()=>navigate('/order')} sx={{bgcolor:'darkOrange',color:'white',fontSize:'10px',color:'black',fontFamily:'Montserrat',fontWeight:'500'}}>PROCEED TO CHECKOUT</Button>
    </Container>
  );
};

export default Cart;
