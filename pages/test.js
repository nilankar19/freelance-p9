import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Container, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white'}}>
      <Toolbar>
        {/* Logo on the left */}
        <Box component="div" sx={{ width: '148px', height: '48px' }}>
            <img src="Frame.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
          </Box>
        {/* Render nav links */}
        {!isMobile && (
          <>
            {/* Three text nav in the middle with space */}
            <Container maxWidth="sm" sx={{color:"black"}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
              <Typography variant="h6" component="div" sx={{ fontSize:"1rem",cursor:'pointer', textAlign: 'center' }}>
                <Link href={'/'}>Home</Link>
              </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="h6" component="div" sx={{ fontSize:"1rem",cursor:'pointer', textAlign: 'center' }}>
              <Link href={'/product'}>Our Product</Link>
              </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="h6" component="div" sx={{ fontSize:"1rem",cursor:'pointer', textAlign: 'center' }}>
              <Link href={'/about'}>About TAPDATA</Link>
              </Typography>
              </Grid>
              </Grid>
            </Container>
            {/* Two on the right */}
            <Typography variant="h6" component="div" sx={{color:"black", marginRight:"0.2rem",cursor:'pointer',fontSize:"1rem", textAlign: 'right' }}>
             Login
            </Typography>
            <Typography variant="h6" component="div" sx={{color:"black", marginLeft:"0.5rem",paddingLeft:'0',cursor:'pointer',fontSize:"1rem", textAlign: 'right' }}>
             |
            </Typography>
            <Typography variant="h6" component="div" sx={{color:"black", marginLeft:"0.5rem",marginRight:"0.3rem", paddingLeft:'0',cursor:'pointer',fontSize:"0.8rem", textAlign: 'right' }}>
             CreateAccount
            </Typography>
            <Box
                    component={"img"}
                    alt="profession"
                    src="Vector.png"
                ></Box>

          </>
        )}
        {/* Render menu icon */}
        {isMobile && (
          <IconButton color="inherit" onClick={toggleDrawer} sx={{color:'black', marginLeft:'60%'}}>
            <MenuIcon />
          </IconButton>
        )}
        {/* Render drawer */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}   sx={{
            backgroundColor: 'rgb(214, 219, 220)',
            width: '100%',
            '& .MuiDrawer-paper': {
              width: '100%',
            },
          }}>
          {/* Close button icon */}
          <IconButton color="inherit" onClick={closeDrawer} sx={{ position: 'absolute', top: 0, right: 0 }}>
            <CloseIcon />
          </IconButton>
          <List sx={{ width: '100%',marginTop:'40%' }}>
            {/* Three text nav in the middle with space */}
            <ListItem >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'blue',fontSize:"2rem", textAlign: 'center' }}>
               Home
              </Typography>
            </ListItem>
            <ListItem >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'600', textAlign: 'center' }}>
                Our Product
              </Typography>
            </ListItem>
            <ListItem >
              <Typography variant="h6" component="div" sx={{
 flexGrow: 1, fontWeight:'600', textAlign: 'center' }}>
                ABOUT TAPDATA
              </Typography>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
