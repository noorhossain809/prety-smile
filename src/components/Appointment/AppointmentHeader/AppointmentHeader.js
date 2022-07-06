import React from 'react';
import chair from '../../../images/chair 1.png';

import 'react-calendar/dist/Calendar.css';
import Calender from '../../Shared/Calender/Calender';
import { Box, Grid } from '@mui/material';

const AppointmentHeader = ({ date, setDate }) => {


    return (
        <Box>
            
            <Grid container
                sx={{ mt: 6 }}
                style={{ height: '600px' }}
            >

                <Grid  xs={12} sm={5} md={5} className=" ">
                <h1 style={{ color: '#3A4256', textAlign: 'center',marginTop:'30px' }} className="">Appointment</h1>
                    <Calender
                        date={date}
                        setDate={setDate}
                    />

                </Grid>
                <Grid item xs={12} sm={6} md={6} className="">
                    <img src={chair} alt="" className="img-fluid" />
                </Grid>
            </Grid>
        </Box>

    );
};

export default AppointmentHeader;