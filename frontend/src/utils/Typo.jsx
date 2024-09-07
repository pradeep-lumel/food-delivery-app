import { styled } from "@mui/material";
import { Typography } from "@mui/material";

export const HeadingTypo = styled(Typography)(({ theme }) => ({
  fontSize: '25px',
  fontWeight: 600,
  fontFamily: 'Montserrat, sans-serif',
  color: 'black',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

export const SubtitleTypo = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: 'Montserrat, sans-serif',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8px',
    },
  }));

 export const CustomDivider = styled('div')(({ theme }) => ({
    width: '90%',
    border: '1px solid lightGray',
    margin: '25px 0',
    [theme.breakpoints.down('sm')]:{
      margin:'10px 0px '
    }
  }));