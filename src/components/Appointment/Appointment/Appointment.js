import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbars from '../../Shared/Navbars/Navbars';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    // const [selectedDate, setSelectedDate] = useState(new Date())
    // const handleDateChange = date => {
    //     setSelectedDate(date)
    // }
    return (
        <div>
            <Navbars></Navbars>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            
            <BookAppointment date={date}></BookAppointment>
            
            <Footer></Footer>
        </div>
    );
};

export default Appointment;