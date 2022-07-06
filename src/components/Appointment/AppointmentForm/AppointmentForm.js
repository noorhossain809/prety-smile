import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date, time,setBookingSuccess }) => {
    const {user} = useAuth()
    const initial = {
        email : user.email, 
        patientName: user.displayName, 
        phone: '', 
        gender: '', 
        address: '',
        age: '', 
        weight: '',
    };
    const [bookingInfo, setBookingInfo] = useState(initial)
    const { formState: { errors } } = useForm();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value;
        // console.log(newInfo)
        setBookingInfo(newInfo)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('clicked me', time, appointmentOn, date);

        // data.serviceName = appointmentOn;
        // data.date = date.toLocalDateString();
        // data.time = time;
        // data.bookingInfo = {...bookingInfo}
        // console.log(data.bookingInfo)
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: appointmentOn,
            // date: date.toLocalDateString('dd/MM/yyyy')
            date: new Date(date).toLocaleDateString()


        }
        console.log(appointment)

        fetch('https://fathomless-scrubland-68650.herokuapp.com/appointments', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(success => {
            if(success.insertedId){
                setBookingSuccess(true)
                closeModal();
                console.log(success)
                
            }
        })
        
    };


    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h3 style={{color:'#1cc7c1'}} className="text-center">{appointmentOn}</h3>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleFormSubmit}>
                <div className="form-group">
                        <input onBlur={handleOnBlur} type="text" name="patientName" defaultValue={user.displayName} className="form-control" required />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    
                    <div className="form-group">
                        <input onBlur={handleOnBlur} type="text" name="email" defaultValue={user.email} className="form-control" required />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} type="text" name="address" placeholder="Address" className="form-control" required />
                        {errors.address && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <div className="row">
                        <div className="col-md-6">
                        <input onBlur={handleOnBlur} type="text" name="phone" placeholder="01xxxxxxxxx" className="form-control" required />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                       <div className="col-md-6">
                       <input  disabled  name={time} placeholder={time} className="form-control text-center" />
                       </div>
                        
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select onBlur={handleOnBlur} className="form-control" name="gender" required >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input onBlur={handleOnBlur}  className="form-control" name="age" placeholder="Your Age" type="number" required />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input onBlur={handleOnBlur} className="form-control" name="weight" placeholder="Weight" type="number" required />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <Button style={{backgroundColor:'#1cc7c1', border: 'none', padding: '6px 30px', color: 'white', textTransform: 'capitalize', fontSize: 18,letterSpacing: 0.8}} type="submit">Send</Button>
                        {/* <input style={{backgroundColor:'#1cc7c1', border: 'none', padding: '6px 30px', color: 'white', textTransform: 'capitalize', fontSize: 18,letterSpacing: 0.8}} type="submit" value="submit" /> */}
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;