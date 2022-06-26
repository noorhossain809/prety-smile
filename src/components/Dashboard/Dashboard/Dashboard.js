import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import { Paper } from '@mui/material';
import './Dashboard.css'
import TableData from './TablesData';
import AuthProvider from '../../../context/AuthProvider/AuthProvider';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AuthProvider)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date)

        }

        // useEffect( () => {
        //     fetch('http://localhost:5000/appointmentByDate', {
        //     method: 'POST',
        //     headers: {'content-type': 'application/json'},
        //     body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        // })
        // .then(res => res.json())
        // .then(data => setAppointments(data))
        // }, [selectedDate])

    
    return (
        <section>
           <div>
           <div style={containerStyle} className="d-flex">
                <div className=""  style={{ width: '20%' }}>
                     <Sidebar></Sidebar>
                </div>
             
                <div className="">
                    <h2 className="mt-4 mx-4">Dashboard</h2>
                <div className="d-flex mt-4">
                <Paper elevation={3} sx={{borderRadius: 8,}}  className="main-card mt-4">
                    <div className="d-flex cards py-3 text-white">
                    <h1>09</h1>
                    <div className="text">
                        <p className="pending">Pending</p>
                        <p >Appointments</p>
                    </div>
                    </div>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 8}} className="main-card mt-4">
                    <div className="d-flex cardInfo py-3 text-white" style={{backgroundColor:'#2196f3'}}>
                    <h1>19</h1>
                    <div className="text">
                        <p className="pending">Today's <br /> Appointments</p>
                        
                    </div>
                    </div>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 8}} className="main-card mt-4">
                    <div className="d-flex cardInfo py-3 text-white" style={{backgroundColor: '#4caf50'}}>
                    <h1>34</h1>
                    <div className="text">
                        <p className="pending">Total <br /> Appointments</p>
                    </div>
                    </div>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 8}} className="main-card mt-4">
                    <div className="d-flex cardInfo py-3 text-white" style={{backgroundColor: '#ff9800'}}>
                    <h1>78</h1>
                    <div className="text">
                        <p className="pending">Total <br /> Patients</p>
                        
                    </div>
                    </div>
                </Paper>
 
                </div>
                <div className="mt-4 mx-4">
            <TableData />
            </div>
                </div>
                {/* <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div> */}
                
            </div>
           </div>
           
        </section>
    );
};

export default Dashboard;