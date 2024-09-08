import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@mui/styles';
import { HeadingTypo } from '../utils/Typo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
    boxShadow:'2px 1px 20px green',
    borderRadius:'10px'
  },
  media: {
    height: 200, 
    width: 200,   
    margin: 'auto', 
    borderRadius: '50%', 
    objectFit: 'cover', 
    [theme.breakpoints.down('sm')]: {
      height: 150,
      width: 150,
    },
  },
  card: {
    margin: theme.spacing(2),
    textAlign: 'center', 
  },
  comment: {
    fontStyle: 'italic', 
    marginTop: theme.spacing(2),
  },
}));

const Carousel = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className={classes.root} id="Testimonials">
      <HeadingTypo sx={{ display: 'flex', justifyContent: 'center' }}>
        Testimonial
      </HeadingTypo>
      <Slider {...settings}>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image='../../public/Food_images/assets/food_1.png'
              title="Slide 1"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                John Doe
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.comment}>
                "This food was absolutely delicious! Highly recommend trying it out."
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image='../../public/Food_images/assets/food_1.png'
              title="Slide 2"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Jane Smith
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.comment}>
                "The best food experience I have ever had! The flavors were spot on."
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
