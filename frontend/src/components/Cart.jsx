import React from 'react';
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

const PromoCodeLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1),
  fontSize: '0.8rem',
}));

const Cart = () => {
  const cartItems = [
    { id: 1, title: 'Item 1', price: 10, quantity: 1 },
    { id: 2, title: 'Item 2', price: 20, quantity: 2 },
  ];
  const navigate=useNavigate()
  const handleRemove = (id) => {
    console.log('Remove item with id:', id);
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
                  <IconButton onClick={() => handleRemove(item.id)}>
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
                  <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$54</TableCell>
                </TableRow>
                <TableRow>
                <TableCell sx={{ padding: '8px'}}>Delivery Fee</TableCell>
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$5</TableCell>
                </TableRow>
                <TableRow>
                <TableCell sx={{ padding: '8px',fontWeight:'800'}}>Total</TableCell>
                <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$108</TableCell>
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
                <IconButton onClick={() => {}} color="primary">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Button onClick={()=>navigate('/order')} sx={{bgcolor:'darkOrange',color:'white',fontSize:'10px',color:'black',fontFamily:'Montserrat',fontWeight:'500'}}>PROCEED TO CHECKOUT</Button>
    </Container>
  );
};

export default Cart;
