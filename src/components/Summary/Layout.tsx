import { Box, Container } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";

type Props = {
    children: string | JSX.Element | JSX.Element[] 
  }

  const Footer = () => {
    return (
      <Box
        sx={{
          minHeight: '30px',
          backgroundColor: '#003366',
          color: 'white',
          border: '3px solid #003366',
          marginBottom:"2px"
        }}
      >
        <div style={{textAlign:"center",fontWeight:"bold"}}>AI Consulting Inc, &copy; {new Date().getFullYear()}</div>
      </Box>
    );
  };

const Layout = ({children}:Props) => {

    return (
        <>
        <Container maxWidth="xl">
           <NavBar></NavBar>
        </Container>
        <Container maxWidth="xl">
            {children}
        </Container>
        <Container maxWidth="xl">
        <Footer />
        </Container>
        </>
        
    )
}

export default Layout;