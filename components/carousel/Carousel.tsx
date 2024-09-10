import React, { useState, useCallback } from 'react';
import Slider from 'react-slick';
import { Box, Stack, Typography, useTheme, Button } from '@mui/material';
import styles from '@/styles/fade.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data
const slides = [
  {
    imgSrc: '/images/first.jpg',
    heading: 'We Provide Doctors you can Trust!',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias.',
  },
  {
    imgSrc: '/images/second.jpg',
    heading: 'Unbelievable Nursing Facility',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias.',
  },
  {
    imgSrc: '/images/third.jpg',
    heading: 'Proper Ventilation',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias.',
  },
];

const Carousel: React.FC = () => {
  const theme = useTheme();
  const [animate, setAnimate] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: () => {
      setAnimate(true); // Reset animation state before slide changes
    }
  };

  const handleAnimationEnd = useCallback(() => {
    setAnimate(false); // Reset animation state after animation ends
  }, []);

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            backgroundImage: `url(${slide.imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: {xs:'400px',lg:'600px'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 255, 0.6)', // Bluish background with transparency
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              color: theme.palette.common.white,
              textAlign: 'center',
              p: 6,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                animation: animate ? `${styles['zoomInRight']} 1s ease-out` : 'none',
                transition: 'animation 1s',
              }}
            >
              {slide.heading}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                animation: animate ? `${styles['zoomInRight']} 1s ease-out` : 'none',
                transition: 'animation 1s',
              }}
            >
              {slide.paragraph}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                animation: animate ? `${styles['zoomInDown']} 1s ease-out` : 'none',
                transition: 'animation 1s',
              }}
              onAnimationEnd={handleAnimationEnd} // Reset animation state after animation ends
            >
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'lightgray',
                    background: 'white',
                    color: 'black',
                  },
                }}
              >
                Know More
              </Button>
              <Button variant="contained" color="success">
                Get Appointment
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default Carousel;
