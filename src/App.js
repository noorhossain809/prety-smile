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
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard">
        <Dashboard></Dashboard>
        </Route>
        <Route path="/allpatients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/adddoctor">
          <AddDoctor></AddDoctor>
        </Route>
        
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
