import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    console.log(date)
    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
       
            <div className="col-md-4 mt-5">
            <div className="card p-3">
                <div className="card-body text-center mb-5">
                <h4 style={{color:'#1cc7c1'}}>{booking.subject}</h4>
                <h6 style={{fontWeight:'700'}}>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal} style={{backgroundColor:'#1cc7c1'}} className="btn btn-primary text-uppercase">Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} date={date} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
       
    );
};

export default BookingCard;