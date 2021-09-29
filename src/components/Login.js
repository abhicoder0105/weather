import React from "react";
import {
  Typography,
  Container,
  CssBaseline,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  const classes = useStyles();
  const history = useHistory();  
  const user = useSelector(state => state.allUser)
  console.log(user);    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) =>(
    Object.entries(errors).length === 0 && errors.constructor === Object
      ? history.push("/location")
      : errors
      )
  console.log("errors", errors); 

  return (
    <>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm" justify="center" className={classes.container}>
          <Typography variant="h6" align="center" color="textprimary" paragraph>
            Log In
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <TextField
              {...register("email", {
                required: "Email is required",
                minLength: { value: 8, message: "this is too short" },
              })}
              id="outlined-basic"
              label="Email"
              color={errors.email ? "warning" : "primary"}
              type="string"
              fullWidth
              helperText={errors.email ? errors.email.message : ""}
              className={classes.textField}
            />
            <TextField
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "Password is too short" },
              })}
              id="outlined-basic"
              fullWidth
              label="Password"
              color={errors.password ? "warning" : "primary"}
              type="string"
              helperText={errors.password ? errors.password.message : ""}
              className={classes.textField}
            />
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"  
                onClick={handleSubmit(onSubmit)}           
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid container margin={1}>
            <Typography>Don't Have Account ?</Typography>
            <Link to="/signup">Sign Up</Link>
          </Grid>
        </Container>
      </form>
    </>
  );
};

export default Login;
