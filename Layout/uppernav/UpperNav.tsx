import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const UpperNav = () => {
  const [iconColor, setIconColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor(prevColor => (prevColor === 'white' ? '#ff0000' : 'white'));
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar position="static" sx={{ background: "#03045e", p: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="call" size='large' sx={{ fontSize: "1.5rem", mr: 1 }}>
              <CallIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ mr: { xs: 0, lg: 4 }, fontSize: { xs: '1rem', lg: '1.25rem' } }}>
              +0123-8743-2322
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="email" size='large' sx={{ display: { xs: 'none', xl: 'block' } }}>
              <MailIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ display: { xs: 'none', md: 'flex' }, fontSize: { xs: '1rem', lg: '1.25rem' } }}>
              thehospital56@gmail.com
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              color="inherit" 
              aria-label="ambulence" 
              sx={{ display: { xs: 'block', md: 'flex' }}}
            
            >
              <LocalShippingIcon sx={{ color: iconColor }}  />
            </IconButton>
            <Typography variant="h6" color="inherit"  component="div" sx={{ fontSize: { xs: '1rem', lg: '1.25rem' } }}>
              : +91-9236-000-032
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UpperNav;
