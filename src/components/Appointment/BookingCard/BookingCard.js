import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
       
            <div className="col-md-3 mt-5 mb-4 px-5 mx-auto ">
            <Paper className="py-3">
                <div className="text-center py-4" >
                <div className="">
                <h4 style={{color:'#1cc7c1', lineHeight: 1.5, letterSpacing: 0.5,}}>{booking.subject}</h4>
                <h6 style={{fontWeight:'700', fontSize: 20, letterSpacing: 0.5,}}>{booking.visitingHour}</h6>
                <p style={{fontSize: 16, fontWeight:'medium', letterSpacing: 0,color:'#9e9e9e'}}>{booking.totalSpace} SPACES AVAILABLE</p>
                <Button onClick={openModal} style={{backgroundColor:'#1cc7c1', border: 'none'}} className=" text-uppercase, text-white">Book Appointment</Button>
                <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} time={booking.visitingHour} date={date} closeModal={closeModal}></AppointmentForm>
                </div>
                </div>
            </Paper>
        </div>
       
    );
};

export default BookingCard;