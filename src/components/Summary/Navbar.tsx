import { AppBar, Box, Container, Toolbar, Typography,BottomNavigation } from "@mui/material";
import React from "react";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { Link } from "react-router-dom";

const NavBar = () => {

    return <>

<AppBar position="static" sx={{backgroundColor:'#003366'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <WysiwygIcon fontSize="large" ></WysiwygIcon> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'20px'
            }}
          >
             DOCUMENT PROCESSOR
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
   
    </>

}

export default NavBar;
