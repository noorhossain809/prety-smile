import React, { useContext,useState } from "react";
import loginimg from "../../../images/loginbg.png";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { useHistory, useLocation } from "react-router-dom"
import {
  Alert,
  Button,
  Collapse,
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Skeleton,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import AuthProvider from "../../../context/AuthProvider/AuthProvider";
import useAuth from "../../../hooks/useAuth";
import CloseIcon from '@mui/icons-material/Close';

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
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const history = useHistory();
  const location = useLocation();
  
const handleGoogleSignIn = () => {
    // const provider = new GoogleAuthProvider(db);
    // const auth = getAuth();
    // // const provider = new firebase.auth.GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const { email } = result.user;
    //     const signedInUser = { email };
    //     setLoggedInUser(signedInUser);
        
    //     history.replace(from);
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    //   });

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

    //   let isFieldValid = true;
    // if (e.target.name === "email") {
    //   isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    // }
    // if (e.target.name === "password") {
    //   const isPasswordValid = e.target.value.length > 6;
    //   const isPasswordHasValid = /\d{1}/.test(e.target.value);
    //   isFieldValid = isPasswordValid && isPasswordHasValid;
    // }
    // if (isFieldValid) {
    //   const newUserInfo = { ...loginData };
    //   newUserInfo[e.target.name] = e.target.value;
    //   setLoginData(newUserInfo);
    //   console.log(newUserInfo, setLoginData);
    // }
  }

  const handleLogin = (e) => {
    login(loginData.email, loginData.password, history, location);
    e.preventDefault();
  }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-5 shadow p-5">
          <h3
            className="text-center mb-4"
            style={{ fontSize: 22, color: "#9e9e9e" }}
          >
            Login
          </h3>
          <div className="form-group"></div>
            <form onSubmit={handleLogin}>
            <div className="form-group">
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
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
              <label
                htmlFor=""
                className="text-danger mb-4"
                style={{ fontSize: 16, fontWeight: "600", letterSpacing: 0.3 }}
              >
                Forgot your password?
              </label>
            </div>
            <div>
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
            </div>
           
           
           
            <p className="text-center mt-5">or</p>
            <div className="mt-5">
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
            </div>
            <div className="mt-5">
              <p className="text-black text-center">
                New member?{" "}
                <Link to="/register" style={{ color: "#e91e63" }}>
                  Register
                </Link>{" "}
                here
              </p>
              
            </div>
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
           
        </div>
        
        <div className="col-md-7 d-none d-md-block">
          <img className="" src={loginimg} alt="" />
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
