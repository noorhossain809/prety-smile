import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AllAppointments from './components/AllApointments/AllAppointments';
import Prescriptions from './components/Prescriptions/Prescriptions';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp/SignUp';
import AuthProvider from './context/AuthProvider/AuthProvider';



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
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
        <Route path="/dashboard">
        <Dashboard></Dashboard>
        </Route>
        <Route path="/doctor/patients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/allAppointments">
          <AllAppointments></AllAppointments>
        </Route>
        <Route path="/prescriptions">
          <Prescriptions></Prescriptions>
        </Route>
        <Route path="/adddoctor">
          <AddDoctor></AddDoctor>
        </Route>
        
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
