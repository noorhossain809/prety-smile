import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';

import Navbars from '../../Shared/Navbars/Navbars';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbars></Navbars>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            
            <BookAppointment date={selectedDate}></BookAppointment>
            
            <Footer></Footer>
        </div>
    );
};

export default Appointment;