    import { Box, Button, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material'
    import React from 'react'
    import { HeadingTypo } from '../utils/Typo'

    const Order = () => {
    return (
        <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        justifyContent="space-between" 
        alignItems="start" 
        spacing={2}
        >
        {/* Delivery Information Box */}
        <Box 
            sx={{ 
            p: 2, 
            width: { xs: '100%', md: '50%' }, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            }}
        >
            <HeadingTypo>Delivery Information</HeadingTypo>
            <Stack spacing={2} component="form" sx={{ width: { xs: '100%', sm: '90%', md: '100%' }, alignItems: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    label="First Name" 
                    variant="outlined" 
                    fullWidth 
                    required 
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    label="Last Name" 
                    variant="outlined" 
                    fullWidth 
                    required 
                />
                </Grid>
            </Grid>

            {/* Address Line 1 */}
            <TextField 
                label="Address Line 1" 
                variant="outlined" 
                fullWidth 
                sx={{marginLeft:'15px !important'}}
                required 
            />

            {/* Address Line 2 */}
            <TextField 
                label="Address Line 2" 
                variant="outlined" 
                sx={{marginLeft:'15px !important'}}
                fullWidth 
            />

            {/* City and State/Province in the same row */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    label="City" 
                    variant="outlined" 
                    fullWidth 
                    required 
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    label="State/Province" 
                    variant="outlined" 
                    fullWidth 
                    required 
                />
                </Grid>
            </Grid>

            {/* Postal Code and Phone Number in the same row */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    label="Postal Code" 
                    variant="outlined" 
                    fullWidth 
                    required 
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    label="Phone Number" 
                    variant="outlined" 
                    fullWidth 
                    required 
                />
                </Grid>
            </Grid>
            </Stack>
        </Box>

        <Box sx={{ p: 2, width: { xs: '100%', md: '50%' },display:'flex',flexDirection:'column',alignItems:'center' }}>
            <HeadingTypo sx={{marginBottom:'3%'}}>Cart Totals</HeadingTypo>
            <TableContainer sx={{ width: '100%' }} component={Paper}>
            <Table>
                <TableBody>
                <TableRow>
                    <TableCell sx={{ padding: '8px' }}>Sub total</TableCell>
                    <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$54</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ padding: '8px' }}>Delivery Fee</TableCell>
                    <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ padding: '8px', fontWeight: '800' }}>Total</TableCell>
                    <TableCell sx={{ padding: '8px', textAlign: 'right' }}>$108</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
            <Button onClick={()=>navigate('/order')} sx={{bgcolor:'darkOrange',marginTop:'3%',color:'white',fontSize:'12px',color:'black',fontFamily:'Montserrat',fontWeight:'500'}}>PROCEED TO PAYMENT</Button>
            </Box>
        </Stack>
    );
    }

    export default Order;
