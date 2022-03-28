import React, { useContext } from 'react';
import loginimg from '../../../images/loginbg.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          
          const {email} = result.user;
          const signedInUser = {email};
          setLoggedInUser(signedInUser);
          
          history.replace(from);
      
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
        }
       
    
  
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-md-6 shadow p-5">
                <div className="form-group">
                    <label htmlFor="">User Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="text-danger">Forgot your password?</label>
                </div>
                <div>
                    <button style={{backgroundColor:'#1cc7c1', color:'white'}} className="text-primary" type="submit">SUBMIT</button>
                </div>
                <div className="mt-5">
                    <button onClick={handleGoogleSignIn}>Continue With Google</button>
                </div>

            </div>
            <div className="col-md-6 d-none d-md-block">
                <img className="img-fluid" src={loginimg} alt="" />
            </div>
        </div>
        </div>

    );
};

export default Login;