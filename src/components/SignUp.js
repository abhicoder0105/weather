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
import {useDispatch} from 'react-redux';
import { setUser } from "../redux/actions/userActions";

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => (
     (Object.entries(errors).length === 0 && errors.constructor === Object ? (
       dispatch(setUser(data))      
       ): errors)
  );

 
  return (
    <>
      <CssBaseline />
      <form>
        <Container maxWidth="sm" justify="center" className={classes.container}>
          <Typography variant="h6" align="center" color="textprimary" paragraph>
            Sign Up
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <TextField
              {...register("firstName", { required: "First Name is required", 
              minLength:{value:4, message:"this is too short"} })}
              id="outlined-basic"
              label="First Name"
              color={errors.firstName ? "warning" : "primary"}
              type="string"
              helperText={errors.firstName ? errors.firstName.message : ""}
              className={classes.textField}
            />
            <TextField
              {...register("lastName", { required: "Last Name is required",
              minLength:{value:4, message:"this is too short"}  })}
              id="outlined-basic"
              label="Last Name"
              color={errors.lastName ? "warning" : "primary"}
              type="string"
              helperText={errors.lastName ? errors.lastName.message : ""}
              className={classes.textField}
            />
            <TextField
             {...register("email", { required: "Email is required",
             minLength:{value:8, message:"this is too short"}  })}
              id="outlined-basic"
              label="Email"
              color={errors.email ? "warning" : "primary"}
              type="string"
              helperText={errors.email ? errors.email.message : ""}
              className={classes.textField}
            />
            <TextField
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "Password is too short" },
              })}
              id="outlined-basic"
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
        </Container>
      </form>
    </>
  );
};

export default SignUp;
