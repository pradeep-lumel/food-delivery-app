import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
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
import { useDispatch, useSelector } from 'react-redux';
import { setFoodOrderedCount } from '../slicers/FoodDisplaySlice';
const PromoCodeLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1),
  fontSize: '0.8rem',
}));

const Cart = () => {
  const foodOrderedCountMap = useSelector(state => state.foodDisplay.foodOrderedCount);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsTotal, setCartItemTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const items = Object.keys(foodOrderedCountMap)
      .filter((key) => foodOrderedCountMap[key] > 0)
      .map((key, idx) => ({
        title: key,
        quantity: foodOrderedCountMap[key],
        id: idx + 1,
        price: 10,
      }));

    setCartItems(items);
  }, [foodOrderedCountMap]);

  useEffect(() => {
    const calculateTotal = () => {
      const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setCartItemTotal(totalSum);
    }
    calculateTotal();
  }, [cartItems]);

  const navigate = useNavigate();

  // Handle removing an item
  const handleRemove = (item) => {
    // const updatedCartItems = cartItems.filter(it => it.title !== item.title);
    // setCartItems(updatedCartItems);
    dispatch(setFoodOrderedCount({ foodName: item.title, count: -(item.quantity) }))
  };

  return (
    cartItems.length<=0?
    <Alert 
    severity="error" 
    sx={{ 
      marginTop: '5%', 
      padding: '20px', 
      width: '50%', 
      marginX: 'auto', 
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
      borderRadius: '8px', 
      fontSize: '1.2rem', 
      textAlign: 'center', 
    }}
  >
    <AlertTitle sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Cart is Empty</AlertTitle>
    Please select some items to cart — <strong>check it out!</strong>
  </Alert>
     :<Container>
      {cartItems.length>=1 && <TableContainer sx={{ marginTop: '2%', overflowX: 'auto' }} component={Paper}>
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
              item.quantity >= 1 && <TableRow key={item.id}>
                <TableCell sx={{ padding: '8px' }}>{item.id}</TableCell>
                <TableCell sx={{ padding: '8px' }}>{item.title}</TableCell>
                <TableCell sx={{ padding: '8px' }}>${item.price}</TableCell>
                <TableCell sx={{ padding: '8px' }}>{item.quantity}</TableCell>
                <TableCell sx={{ padding: '8px' }}>${(item.price * item.quantity).toFixed(2)}</TableCell>
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
      }

      <HeadingTypo sx={{ marginTop: '3%' }}>Cart Totals</HeadingTypo>
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
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>${cartItemsTotal.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ padding: '8px' }}>Delivery Fee</TableCell>
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ padding: '8px', fontWeight: '800' }}>Total</TableCell>
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>${(cartItemsTotal + 5).toFixed(2)}</TableCell>
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
              <InputAdornment position="start">
                <PromoCodeLabel>PROMO CODE</PromoCodeLabel>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => { }} color="primary">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder='Enter here...'
        />
      </Stack>
      <Button
        onClick={() => navigate('/order')}
        sx={{ bgcolor: 'darkOrange', color: 'white', fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '500' }}
      >
        PROCEED TO CHECKOUT
      </Button>
    </Container>
  );
};

export default Cart;
