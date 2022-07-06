import React, { useState } from "react";
import loginimg from "../../../images/loginbg.png";
import "firebase/auth";

import { useHistory, useLocation } from "react-router-dom"
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
import { Link } from "react-router-dom";
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

const Login = (props) => {
  const { classes } = props;
  
  const {user, isLoading, login, authError,GoogleSign} = useAuth()
  const [loginData, setLoginData] = useState({})


  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }

const history = useHistory();
const location = useLocation();
  
const handleGoogleSignIn = () => {
       GoogleSign(location, history)
  };

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

  const handleInputChange = e => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData }
       newLoginData[field] = value;
       setLoginData(newLoginData)

  }

  const handleLogin = (e) => {
    login(loginData.email, loginData.password, history, location);
    e.preventDefault();
  }

  return (
    <Container>
      <Grid container spacing={2} sx={{alignItems: 'center', mb:5, p:3}} style={{ height: "100vh" }}>
        <Grid xs={12} sm={12} md={5} >
        <Paper elevation={3} sx={{p:5}}>
        <Typography variant="subtitle1" className="">
                
                <KeyboardBackspaceIcon /> <Link to="/home" style={{ color: "#e91e63" }}>
                   Back to home
                 </Link>
               </Typography>
           <Typography
             variant="h5"
             textAlign="center"
             style={{ color: "#9e9e9e" }}
            
           >
             Login
           </Typography>
             <form onSubmit={handleLogin}>
             <Box className="form-group">
               <FormControl sx={{ width: "100%" }} variant="standard">
                 <InputLabel htmlFor="standard-adornment-amount" sx={{ m: 1 }}>
                   Email
                 </InputLabel>
                 <Input
                 onBlur={handleInputChange}
                 name="email"
                   label="Email"
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
                         {values.showPassword ? <VisibilityOff /> : <Visibility />}
                       </IconButton>
                     </InputAdornment>
                   }
                 />
               </FormControl>
             </Box>
             <Box className="form-group">
               <label
                 htmlFor=""
                 className="text-danger mb-4"
                 style={{ fontSize: 16, fontWeight: "600", letterSpacing: 0.3 }}
               >
                 Forgot your password?
               </label>
             </Box>
             <Box>
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
                 Login
               </Button>
             </Box>
            
            
            
             <Typography variant="subtitle2" textAlign="center" sx={{mt:4}}>or</Typography>
             <Box className="mt-5">
               <Button
                 onClick={handleGoogleSignIn}
                 variant="contained"
                 sx={{
                   color: "#fff",
                   fontWeight: "medium",
                   textTransform: "capitalize",
                   letterSpacing: 0.5,
                   fontSize: 18,
                   width: "100%",
                   backgroundColor: "#e91e63",
                 }}
               >
                 Continue With Google
               </Button>
             </Box>
             <Box className="mt-3">
               <Typography variant="subtitle2" textAlign="center" className="text-black">
                 New member?{" "}
                 <Link to="/register" style={{ color: "#e91e63" }}>
                   Register
                 </Link>{" "}
                 here
               </Typography>
               
             </Box>
             {isLoading && (
            <Skeleton variant="rectangular" width={210} height={118} />
           )}
           {user?.email &&  
        
        <Alert severity="success">user login successfully!</Alert>
         
       }
       {authError && 
         <Alert severity="error" sx={{ width: '100%' }}>
           {authError}
         </Alert>
       }
             </form>
        </Paper>
     </Grid>
        
        <Grid md={7} className=" d-none d-md-block">
          <img className="" src={loginimg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
