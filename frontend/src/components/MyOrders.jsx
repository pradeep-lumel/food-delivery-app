import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { HeadingTypo } from '../utils/Typo'
import WidgetsIcon from '@mui/icons-material/Widgets';

const MyOrders = () => {
  // Dummy data for orders
  const orders = [
    { id: 1, date: '2024-09-10', total: '$54', status: 'Delivered' },
    { id: 2, date: '2024-09-08', total: '$108', status: 'Pending' },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <HeadingTypo sx={{ marginBottom: { xs: '2%', sm: '3%' } }}>My Orders</HeadingTypo>

      {orders.map((order) => (
        <Paper
          key={order.id}
          sx={{
            p: { xs: 1, sm: 2 }, 
            mb: { xs: 1, sm: 2 },
            borderRadius: 1,
            border: '1px solid gray',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'start', sm: 'center' },
            gap: { xs: 1, sm: 2 }, 
          }}
        >
            <Typography 
              variant="h6" 
              sx={{ fontSize: { xs: '14px', sm: '16px' } }} 
            >
             <WidgetsIcon sx={{color:'brown'}}/>
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              Date: {order.date}
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              Total: {order.total}
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              Status: {order.status}
            </Typography>
          <Button
            sx={{
              bgcolor: 'lightsalmon',
              color: 'black',
              fontSize: { xs: '10px', sm: '12px' }, 
              fontWeight: '700',
              fontFamily: 'Montserrat',
              mt: { xs: 0, sm: 0 }, 
            }}
          >
            Track Order
          </Button>
        </Paper>
      ))}
    </Box>
  );
}

export default MyOrders;
