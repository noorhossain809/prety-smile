import { Alert, Box, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'
import img3 from '../../../images/img3.jpg'
import img4 from '../../../images/img4.jpg'
import img5 from '../../../images/img5.jpg'
import img6 from '../../../images/img6.jpg'
import img7 from '../../../images/img7.jpg'
import img8 from '../../../images/img8.jpg'
import { Link } from 'react-router-dom';


const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        img: img1,
        price:'$25'
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10,
        img: img2,
        price:'$20'
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10,
        img: img3,
        price:'$40'
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10,
        img: img4,
        price:'$30'
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Fluoride Treatment',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        img: img5,
        price:'$50'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Cavity Filling',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        img: img6,
        price:'$25'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 7,
        subject: 'Teeth Whitening',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        img: img7,
        price:'$32'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 8,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        img: img8,
        price:'$15'
    }
]

const BookAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Box marginTop={{xs: 16, sm: 0, md: 0}}>
            <h2 style={{color:'#1cc7c1'}} className="text-center">Available Appointments on {date.toDateString('dd/MM/yyyy')}</h2>
            {bookingSuccess &&  
       
       <Alert severity="success" className="text-center justify-content-center">Appointment Booking Successfully,  <Link to="/dashboard" style={{color: 'red', textDecoration: 'underline', fontSize: 16}}>Click here</Link>  and Continue to dashboard </Alert>
        
      }
            </Box>
            <Grid 
               direction="row" 
              justifyContent="center"
              alignItems="center" 
              container 
              spacing={5} 
              sx={{mt:4}}
              >
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} setBookingSuccess={setBookingSuccess}></BookingCard>)
                }
            </Grid>
        </Container>
    );
};

export default BookAppointment;