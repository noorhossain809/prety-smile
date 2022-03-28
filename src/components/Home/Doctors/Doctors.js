import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import doctor1 from '../../../images/doctor2-removebg-preview.png'
import doctor2 from '../../../images/doctor3-removebg-preview.png'
import doctor3 from '../../../images/doctors.png'


const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    
        // fetch('http://localhost:5000/doctors')
        // .then(res => res.json())
        // .then(data => setDoctors(data))
    
    return (
        <Container  className="doctors">
            <div className="">
             <h5 style={{ color: '#1CC7C1', fontWeight: '700' }} className="text-center mt-5 mb-5">Our Doctors</h5>
             <Box container sx={{display: 'flex', justifyContent: 'center'}}>
                    
                    <img src={doctor1} alt="" style={{width: '400px', height: '300px'}}/>
                    <img src={doctor2} alt="" style={{width: '400px', height: '300px'}}/>
                    <img src={doctor3} alt="" style={{width: '400px', height: '300px'}}/>
                    
                 </Box>
             <div className="">
                 {/* {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                 } */}
                    
                    
                </div>
                
            </div>
        </Container>
    );
};

export default Doctors;