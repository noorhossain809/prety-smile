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

const AppointmentDataTable = () => {
    const [value, setValue] = useState(new Date())
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
      fetch('https://fathomless-scrubland-68650.herokuapp.com/allAppointments')
      .then(res=> res.json())
      .then(data => setAppointments(data))
    }, [])
    return (
        <>
        
        <TableContainer component={Paper}>
        <div className="mx-4 ">
        <div className="mt-4">
        <div className="d-flex justify-content-between mt-4">
        <h4 className="mt-2 mx-2" style={{fontSize: 20, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf'}}>All Patients</h4>
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{color: 'white'}} style={{fontWeight: 'bold'}}>
            <TableCell  style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Sr.No</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Name</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Gender</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Age</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Weight</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Contact</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e', paddingRight: '20px'}}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            appointments.map((appointment) => (
              <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                01
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{appointment.patientName}</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{appointment.gender}</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{appointment.age} age</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{appointment.weight} kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              {appointment.phone}
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
               {appointment.address}
              </TableCell>
            </TableRow>

            ))
          }
         
            
           </TableBody>
      </Table>
        </div>
    </TableContainer>
        </>
        // <table className="table table-borderless">
        //     <thead>
        //         <tr>
        //         <th className="text-secondary text-left" scope="col">Sr No</th>
        //             <th className="text-secondary" scope="col">Name</th>
        //             <th className="text-secondary" scope="col">Gender</th>
        //             <th className="text-secondary" scope="col">Age</th>
        //             <th className="text-secondary" scope="col">Weight</th>
        //             <th className="text-secondary" scope="col">Phone</th>
        //             <th className="text-secondary" scope="col">Email</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             appointments.map( (appointment, index) =>
        //             <tr>
        //                 <td>{index + 1}</td>
        //                 <td>{appointment.name}</td>
        //                 <td>{appointment.gender}</td>
        //                 <td>{appointment.age}</td>
        //                 <td>{appointment.weight}</td>
        //                 <td>{appointment.phone}</td>
        //                 <td>{appointment.email}</td>
        //             </tr>
        //             )
        //         }
        //     </tbody>
        // </table>
    );
};

export default AppointmentDataTable;