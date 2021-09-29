import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Wall = styled("div")(({ theme }) => ({
  borderRadius: "10px",
  borderColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "100%",
  marginTop: "50px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: "20px",
  display: "block",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));

const Home = () => {
  return (
    <>
      <Wall>
        <h1>Welcome to Weather App</h1>
      </Wall>
      <Wall>
        <StyledButton variant="contained">
          <StyledLink to="/signup">Singup</StyledLink>
        </StyledButton>
      </Wall>
    </>
  );
};

export default Home;
