import React from 'react';
import { Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

const RotatedButton = () => {
  const theme = useTheme();
  const isMdOrLower = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is medium or lower
  const router = useRouter();
    const handleClick = ()=>{
        router.push(`/appointment`);
    }
  return (
    <Box
      sx={{
        position: 'fixed',
        right: isMdOrLower ? 0 : 0, // Align container to the right edge for all sizes
        bottom: isMdOrLower ? 0 : 'auto', // Position at the bottom for md and smaller screens
        top: isMdOrLower ? 'auto' : '50%', // Adjust top positioning for larger screens
        left: isMdOrLower ? 0 : 'auto', // Span full width for smaller screens
        transform: isMdOrLower ? 'none' : 'translateY(-50%)', // Center container vertically for larger screens
        display: 'flex',
        justifyContent: isMdOrLower ? 'center' : 'center',
        alignItems: 'center',
        zIndex: 1200, // Ensure it’s on top of other elements
        width: isMdOrLower ? '100%' : 'auto', // Full width for smaller screens
        height: isMdOrLower ? 'auto' : 'auto', // Adjust height as necessary
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 'auto', // Adjust based on button size
          width: isMdOrLower?'100%':'auto', // Adjust based on button size
          transform: isMdOrLower?'rotate(0deg)':'rotate(270deg)', // Rotate the button
          transformOrigin: 'center',
          marginRight: isMdOrLower ? 0 : '-70px', // Remove margin for smaller screens
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '16px',
            minWidth: 'auto',
            minHeight: 'auto',
            borderRadius: 0, // Adjust if necessary
            width: isMdOrLower ? '100%' : '100%', // Full width for smaller screens
          }}
          fullWidth
          onClick={()=>{handleClick()}}
        >
            Get appointment
        </Button>
      </Box>
    </Box>
  );
};

export default RotatedButton;
