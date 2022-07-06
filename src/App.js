import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import React from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp/SignUp';
import AuthProvider from './context/AuthProvider/AuthProvider';
import DashboardHome from './components/Dashboard/Dashboard/DashboardHome/DashboardHome';




function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <SignUp></SignUp>
        </Route>
        <PrivateRoute path="/appointment">
          <Appointment></Appointment>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
        <DashboardHome></DashboardHome>
        </PrivateRoute>
          <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
