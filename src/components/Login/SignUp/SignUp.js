import React, { useContext, useState } from "react";
import loginimg from "../../../images/loginbg.png";
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
  Snackbar,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
    
  };

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-5 shadow p-5">
          <h3
            className="text-center mb-4"
            style={{ fontSize: 22, color: "#9e9e9e" }}
          >
            Register
          </h3>
          {!isLoading && (
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
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
              </div>
              <div className="form-group">
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
              </div>

              <div className="mt-5">
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
              <div className="mt-5">
            <p className="text-black text-center">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#e91e63" }}>
                Login
              </Link>{" "}
              here
            </p>
          </div>
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
        </div>
       
        <div className="col-md-7 d-none d-md-block">
          <img className="" src={loginimg} alt="" />
        </div>
      </div>
    </div>
  );
};
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SignUp);
