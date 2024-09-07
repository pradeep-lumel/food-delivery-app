import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@mui/styles';
import { HeadingTypo } from '../utils/Typo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
  },
  media: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  card: {
    margin: theme.spacing(1),
  },
}));

const Carousel = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,    
  };

  return (
    <div className={classes.root} id="Testimonials">
      <HeadingTypo sx={{display:'flex',justifyContent:'center'}}>Testimonial</HeadingTypo>
      <Slider {...settings}>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image='../../public/Food_images/assets/food_1.png' // Make sure the path is correct
              title="Slide 1"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Slide 1 Title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description for Slide 1
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image='../../public/Food_images/assets/food_1.png' // Make sure the path is correct
              title="Slide 2"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Slide 2 Title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description for Slide 2
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
