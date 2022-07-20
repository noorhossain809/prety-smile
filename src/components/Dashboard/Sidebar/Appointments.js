import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import useAuth from '../../../hooks/useAuth';


const Appointments = () => {
  const [date, setDate] = useState(new Date())
  const [appointments, setAppointments] = useState([])
  const { user, token } = useAuth()

  useEffect(() => {
    // const url = `https://fathomless-scrubland-68650.herokuapp.com/appointments?email=${user.email}&date=${date}`
    fetch(`https://fathomless-scrubland-68650.herokuapp.com/appointments?email=${user.email}&date=${date}`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [date, user.email, token])
  console.log(appointments)

  return (
    <Box sx={{backgroundColor: "#F4FDFB", pt:8}} px={{xs:2, sm:4, md:8}}>
      
      <Box
        component="main"
        
      >
        <Toolbar />
        
        <Grid container spacing={{xs: 6,sm:10,md:25}}>
            <Grid item xs={12} sm={12} md={4}>
              <Calender
                date={date}
                setDate={setDate}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TableContainer component={Paper}>
                <Box className="d-flex justify-content-between mt-4 mr-4 mx-2">
                  <Typography variant={{xs:'body1', sm: 'subtitle1', md: 'h5'}}  style={{ fontWeight: 'bold', letterSpacing: 0.5, color: '#2dd4bf' }}>Appointments</Typography>
                  <Typography variant={{xs:'caption', sm: 'subtitle1', md: 'h5'}} display="block" gutterBottom style={{  fontWeight: 'medium', letterSpacing: 0.5, color: '#9e9e9e' }}>{date.toDateString('dd/MM/yyyy')}</Typography>
                </Box>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ color: 'white' }} style={{ fontWeight: 'bold' }}>
                      <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Sr.No</TableCell>
                      <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Schedule</TableCell>
                      <TableCell align="center" style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e', }}>Action</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow

                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>
                          {appointment.patientName}
                        </TableCell>
                        <TableCell style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>{appointment.time}</TableCell>
                        <TableCell align="center" style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>
                          <Button style={{ color: '#fff', fontWeight: "medium", textTransform: 'capitalize', letterSpacing: 0.5, fontSize: 18, }}>
                            Not visited
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>


          </Grid>
       
          
       

      </Box>
    </Box>
  );
}

export default Appointments;