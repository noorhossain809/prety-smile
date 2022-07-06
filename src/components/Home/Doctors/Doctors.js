import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctor1 from '../../../images/doctor3-removebg-preview.png'
import doctor2 from '../../../images/doctor2-removebg-preview.png'
import doctor3 from '../../../images/doctors.png'
import doctor4 from '../../../images/doctor4.png'

const doctors = [
    {
        name: 'Dr Sinthiya',
        img: doctor1
    },
    {
        name: 'Dr Kudi',
        img: doctor2
    },
    {
        
        name: 'Dr Burno ',
        img: doctor4
    },
    {
        name: 'Dr Sinha',
        img: doctor3
    }
]


const Doctors = () => {
    // const [doctors, setDoctors] = useState([])

    
        // fetch('https://fathomless-scrubland-68650.herokuapp.com/doctors')
        // .then(res => res.json())
        // .then(data => setDoctors(data))
    
    return (
        <Container>
            
             <Typography style={{ color: '#1CC7C1', fontWeight: '700' }} className="text-center mt-5 mb-5">Our Doctors</Typography>
             {/* <Box container display={{ md: 'flex'}} sx={{  alignItems: 'center',justifyContent: 'center'}}>
                    
                  
                   <img src={doctor1} alt="" sx={{width: '300px', height: '200px'}} />
                    <img src={doctor2} alt="" sx={{width: '300px', height: '200px'}} />
                    <img src={doctor3} alt=""  sx={{width: '300px', height: '200px'}} />
                 
                    
                 </Box> */}
             <Grid container spacing={{ xs: 0, md: 0 }}  sx={{}} >
                {
                doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
                    
                </Grid>
                
          
        </Container>
    );
};

export default Doctors;