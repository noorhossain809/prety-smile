import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faCalendarAlt, faUserPlus,faHouse, faHouseUser, faGripVertical } from '@fortawesome/free-solid-svg-icons';
 import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
 import { UserContext } from '../../../App';
import AuthProvider from '../../../context/AuthProvider/AuthProvider';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AuthProvider)
    const [isDoctor, setIsDoctor] = useState(false);

    // useEffect( () => {
    //      fetch('http://localhost:5000/isDoctor', {
    //          method: 'POST',
    //          headers: {'content-type': 'application/json'},
    //          body: JSON.stringify({email: loggedInUser.email})
    //      })
    //      .then(res => res.json())
    //      .then(data => setIsDoctor(data))
    // }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-10 py-5 px-4" style={{ height:'100vh'}}>
            <ul className="list-unstyled mt-4 container">
            <li className="">
                 
                 <Link to="/home" >
                        <p className="text-white "><FontAwesomeIcon icon={faHouseUser} />Home</p> 
                    </Link>
                 
                </li>
            <li>
                    <Link to="/dashboard" className="text-white">
                        <p><FontAwesomeIcon icon={faGripVertical} /> Dashboard</p> 
                    </Link>
                </li>
                <li>
                    <Link to="/allAppointments" className="text-white">
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Appointment</p>
                    </Link>
                </li>
                <li>
                    <Link to="/adddoctor" className="text-white">
                     <p><FontAwesomeIcon icon={faUserPlus} /> Add Doctor</p></Link>
                </li>
               <div>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                     <p><FontAwesomeIcon icon={faUsers} /> Patients</p></Link>
                </li>
                
                <li>
                    <Link to="/prescriptions" className="text-white">
                     <p><FontAwesomeIcon icon={faFileAlt} /> Prescriptions</p></Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white">
                         <p><FontAwesomeIcon icon={faCog} /> Setting</p></Link>
                </li>
                </div>
                
            </ul>
            <div className="log container">
                <Link to="/" className="text-white"> <p><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p></Link>
            </div>
        </div>
    );
};

export default Sidebar;