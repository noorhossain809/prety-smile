import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([])
    
    // useEffect( () => {
    //     fetch('http://localhost:5000/appointments')
    //     .then(res => res.json())
    //     .then(data => setAppointments(data))
    // }, [])
    return (
        <div className="container-fluid row" style={{backgroundColor: "#F4FDFB"}}>
            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 p-4 pr-5 mt-4">
                <h5 style={{color:'#0fcfec'}} className=" mb-3">Patients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
        </div>
    );
};

export default AllPatients;