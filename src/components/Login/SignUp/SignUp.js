import React, { useState } from "react";
import loginimg from "../../../images/loginbg.png";
import {
  Alert,
  Box,
  Button, 
  Container, 
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const styles = {
  root: {
    background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
    border: 0,
    borderRadius: 5,
    // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 38,
    padding: "0 25px",
  },
};

const SignUp = (props) => {
  const { classes } = props;
  const [users, setUsers] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [loginData, setLoginData] = useState({});
  const { register, isLoading, user, authError} = useAuth();

  const history = useHistory();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const isPasswordHasValid = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && isPasswordHasValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...loginData };
      newUserInfo[e.target.name] = e.target.value;
      setLoginData(newUserInfo);
      console.log(newUserInfo);
    }
  };
  const [newUser, setNewUser] = useState(false);

  const handleFormSubmit = (e) => {
    if (newUser && users.email && users.password) {
    }
    register(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

return (
    <Container >
      <Grid container spacing={2} sx={{alignItems: 'center', mb:5, p:3}} style={{ height: "100vh" }}>
        <Grid xs={12} sm={12} md={5}>
        <Paper elevation={3} sx={{p:5}}>
        <Typography variant="subtitle1" >
                
                <KeyboardBackspaceIcon /> <Link to="/home" style={{ color: "#e91e63" }}>
                   Back to home
                 </Link>
               </Typography>
               <Typography
             variant="h5"
             textAlign="center"
             style={{ color: "#9e9e9e" }}
           >
             Register
           </Typography>
          {!isLoading && (
            <form onSubmit={handleFormSubmit}>
              <Box className="form-group" sx={{mt:4}}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount" sx={{ m: 1 }}>
                    Name
                  </InputLabel>
                  <Input
                  onBlur={handleInputChange}
                    label="User name"
                    name="name"
                    variant="standard"
                    color="success"
                    focused
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box className="form-group">
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount" sx={{ m: 1 }}>
                    Email
                  </InputLabel>
                  <Input
                    onBlur={handleInputChange}
                    name="email"
                    variant="standard"
                    color="success"
                    focused
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box className="form-group">
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount" sx={{ m: 1 }}>
                    Password
                  </InputLabel>
                  <Input
                    onBlur={handleInputChange}
                    name="password"
                    color="success"
                    id="standard-adornment-amount"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <Box sx={{mt:5}}>
                <Button
                  value="submit"
                  type="submit"
                  className={classes.root}
                  sx={{
                    color: "#fff",
                    fontWeight: "medium",
                    textTransform: "capitalize",
                    letterSpacing: 0.5,
                    fontSize: 18,
                    width: "100%",
                  }}
                >
                  Submit
                </Button>
              </Box>
              <Box sx={{mt:5}}>
            <Typography variant="subtitle2" textAlign="center" className="text-black">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#e91e63" }}>
                Login
              </Link>{" "}
              here
            </Typography>
          </Box>
            </form>
          )}
          {isLoading && (
           <Skeleton variant="rectangular" width={210} height={118} />
          )}
           {user.email &&  
       <Alert severity="success">user register successfully!</Alert>
      }
      {authError && 
        <Alert severity="error" sx={{ width: '100%' }}>
          {authError}
        </Alert>
      }
        </Paper>
        
        </Grid>
       
        <Grid md={7} className=" d-none d-md-block">
          <img className="" src={loginimg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SignUp);
