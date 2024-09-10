import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const pages = [
  { page: 'Home', path: '/' },
  { page: 'Doctors', path: '/doctors' },
  { page: 'Blogs', path: '/blogs' },
  { page: 'Departments', path: '/departments' },
  { page: 'Contact Us', path: '/contact' },
  { page: 'Take an Appointment', path: '/appointment' },
];

const settings = [
  { page: 'Profile', path: '/profile' },
  { page: 'Dashboard', path: '/dashboard' },
  { page: 'Log Out', path: '/logout' },
];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);


  const [isClient, setIsClient] = useState(false);

  const { isLoggedIn, userImage } = useSelector((state: any) => state.auth || { isLoggedIn: false, userImage: '' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleMobileMenu = (newOpen: boolean) => () => {
    setMobileMenu(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {pages.map((page) => (
          <ListItem key={page.page} disablePadding component='div'>
            <Link href={page.path} style={{ textDecoration: "none", color: "black", width: "100%" }}>
              <ListItemButton>
                <ListItemText primary={page.page.toUpperCase()} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position='static' sx={{ background: "#00b4b8", width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" style={{ textDecoration: "none", marginRight: 2, display: 'flex', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>
            <Typography variant="h6" noWrap sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: "bolder", letterSpacing: '.3rem', color: '#03045e', textDecoration: 'none' }}>
              Medi
            </Typography>
            <Typography variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', textDecoration: 'none' }}>
              Tech
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="menu" onClick={toggleMobileMenu(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer open={mobileMenu} onClose={toggleMobileMenu(false)}>
              {DrawerList}
            </Drawer>
          </Box>
          <Link href="/" style={{ textDecoration: "none", marginRight: 2, display: 'flex', fontFamily: 'monospace', fontWeight: 700, color: 'inherit', flexGrow: 1 }}>
            <Typography variant="h6" noWrap sx={{ display: { xs: 'flex', md: 'none' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#03045e', textDecoration: 'none' }}>
              Medi
            </Typography>
            <Typography variant="h6" noWrap sx={{ display: { xs: 'flex', md: 'none' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
              Tech
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.page} href={page.path}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.page}
                </Button>
              </Link>
            ))}
          </Box>

          {isClient && isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src={userImage || "/static/images/avatar/2.jpg"} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem onClick={handleCloseUserMenu} key={setting.page}>
                    <Link href={setting.path}>
                      <Button sx={{ textAlign: 'center' }}>{setting.page}</Button>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) || (
            <Box sx={{ flexGrow: 0, display:'flex' }}>
              <Link  href='/auth/signin'>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Log In
                </Button>
              </Link>
              <Link  href='/auth/signup'>
                <Button sx={{ my: 2, color: 'white', display: {xs:'none', md:'block'} }}>
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
