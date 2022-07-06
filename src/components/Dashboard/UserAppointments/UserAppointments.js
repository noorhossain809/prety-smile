import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useAuth from '../../../hooks/useAuth';

const UserAppointments = () => {
    const [value, setValue] = useState(new Date())
    const [userAppointments, setUserAppointments] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        const url = `https://fathomless-scrubland-68650.herokuapp.com/appointment?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUserAppointments(data))
    }, [user.email])
    return (
        <Container>
            <Box sx={{mt: 10,}}>
            <Typography className='="text-secondary text-center'>This is user appointment list</Typography>
            <TableContainer component={Paper}>
        <div>
        <div className="mt-4">
        <div className="d-flex justify-content-between mt-4">
        <h4 className="mt-2 mx-2" style={{fontSize: 20, fontWeight: 'medium', letterSpacing:0.5, color: '#2dd4bf'}}>Your All Appointments</h4>
        <LocalizationProvider  dateAdapter={AdapterDateFns}>
      <DatePicker
      
        label="Week"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </div>
        </div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{color: 'white'}} style={{fontWeight: 'medium'}}>
            <TableCell  style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Sr.No</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Name</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Service</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Gender</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Age</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Weight</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Time</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Date</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e'}}>Contact</TableCell>
            <TableCell style={{fontWeight: 'medium', fontSize:16,color: '#9e9e9e', paddingRight: '20px'}}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                userAppointments.map(appointments => (
                    <TableRow
              
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'medium'}}>
                      01
                    </TableCell>
                    <TableCell style={{ color: '#212121', fontWeight: 'medium'}}>{appointments.patientName}</TableCell>
                    <TableCell style={{ color: '#212121', fontWeight: 'medium'}}>{appointments.serviceName}</TableCell>
                    <TableCell style={{ color: '#212121', fontWeight: 'medium'}}>{appointments.gender}</TableCell>
                    <TableCell style={{color: '#212121', fontWeight: 'medium'}}>{appointments.age}</TableCell>
                    <TableCell style={{color: '#212121', fontWeight: 'medium'}}>{appointments.weight}</TableCell>
                    <TableCell style={{color: '#212121', fontWeight: 'medium'}}>{appointments.time}</TableCell>
                    <TableCell style={{ color: '#212121', fontWeight: 'medium'}}>{appointments.date}</TableCell>
                    <TableCell style={{color: '#212121', fontWeight: 'medium'}}>
                    {appointments.phone}
                    </TableCell>
                    <TableCell style={{ color: '#212121', fontWeight: 'medium'}}>
                     {appointments.address}
                    </TableCell>
                  </TableRow>

                ))
            }
          
             
            </TableBody>
      </Table>
        </div>
    </TableContainer>
        </Box>
        </Container>
    );
};

export default UserAppointments;