import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date, setBookingSuccess}) => {
    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (

       <Grid xs={12} sm={6} md={3} item spacing={3} >
         <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={booking.img}
          alt="green iguana"
        />
        <CardContent>
          
          <Typography 
          variant="h5" 
          style={{color:'#1cc7c1', lineHeight: 1.5, letterSpacing: 0.5,}}
           >
           {booking.subject}
          </Typography>
          <Typography 
          variant="subtitle1" 
          style={{fontWeight:'700', letterSpacing: 0.5,}}
           >
           {booking.visitingHour}
          </Typography>
         <Stack 
         direction={{ xs: 'flex', sm: 'row' }} 
         justifyContent='space-between' 
         spacing={{ xs: 1, sm: 2, md: 4 }}
         sx={{my:1}}
         >
         
          <Typography 
          variant="body2" 
          style={{fontWeight:'medium', fontSize: 12, letterSpacing: 0,color:'#9e9e9e'}}
           >
           {booking.totalSpace} SPACES AVAILABLE
          </Typography>
          <Typography 
          variant="body2" 
          style={{fontWeight:'medium', fontSize: 13, letterSpacing: 0,color:'#9e9e9e'}}
           >
           Price {booking.price}
          </Typography>
         </Stack>
        
          <Stack >
          <Button 
          sx={{my:1}}
          onClick={openModal} 
          style={{backgroundColor:'#1cc7c1', border: 'none',}} 
          className=" text-uppercase, text-white"
          >
            Book Appointment</Button>
          </Stack>
                <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} time={booking.visitingHour} date={date} closeModal={closeModal} setBookingSuccess={setBookingSuccess}></AppointmentForm>
        </CardContent>
        {/* <Paper className="py-3">
                <div className="text-center py-4" >
                <div className="">
                <h4 style={{color:'#1cc7c1', lineHeight: 1.5, letterSpacing: 0.5,}}>{booking.subject}</h4>
                <h6 style={{fontWeight:'700', fontSize: 20, letterSpacing: 0.5,}}>{booking.visitingHour}</h6>
                <p style={{fontSize: 16, fontWeight:'medium', letterSpacing: 0,color:'#9e9e9e'}}>{booking.totalSpace} SPACES AVAILABLE</p>
                
                </div>
                </div>
            </Paper> */}
            </CardActionArea>
        </Card>
       </Grid>
           
       
    );
};

export default BookingCard;