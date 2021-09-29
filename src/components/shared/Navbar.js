import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {Link} from 'react-router-dom';




const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: "20px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration:"none",
  color: "white",
}))

export default function SearchAppBar() {



  return (
    <>  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
       <StyledLink to="/">Weather</StyledLink> 
          </Typography>
          
          <StyledButton
            variant="contained"            
          >
            <StyledLink to="/login">Login</StyledLink>
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
