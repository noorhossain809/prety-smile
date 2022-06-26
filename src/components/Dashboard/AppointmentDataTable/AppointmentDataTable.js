import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AppointmentDataTable = ({appointments}) => {
    const [value, setValue] = useState(new Date())
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
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                01
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                02
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                03
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                04
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                05
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                06
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                07
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Male</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>20</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>50kg</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              017xxxxxxxx
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                South Gazirchar, Saver, Dhaka
              </TableCell>
            </TableRow>
            
            
         
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