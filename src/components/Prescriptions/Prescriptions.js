import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container } from '@mui/material';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const styles = {
    root: {
      background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
      border: 0,
      borderRadius: 5,
      // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "white",
      height: 38,
      padding: "0 25px",
    },
  
    colors: {
      color: "white",
      background: "#e91e63"
      
    }
    
  };
const Prescriptions = (props) => {
    const { classes} = props;
    const [value, setValue] = useState(new Date())
    const [prescription, setPrescription] = useState([]);

    useEffect(() => {
      fetch('https://fathomless-scrubland-68650.herokuapp.com/allAppointments')
      .then(res => res.json())
      .then(data => setPrescription(data))
    }, [])
    return (
        <Container>
        <Box sx={{pb:3, m: 10}}>
       <h3 className=" mx-2" style={{fontSize: 24, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf',}}>Prescriptions</h3>
       <TableContainer component={Paper}>
        <div className="mx-4 ">
        <div className="mt-4">
        <div className="d-flex justify-content-between mt-4">
        <h4 className="mt-2 mx-2" style={{fontSize: 20, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf'}}>All Prescriptions</h4>
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
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{color: 'white'}} style={{fontWeight: 'bold'}}>
            <TableCell  style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Sr.No</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Date</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Name</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Contact</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e', paddingRight: '20px'}}>Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            prescription.map(prescription => (
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                01
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{prescription.date}</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{prescription.patientName}</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>{prescription.phone}</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
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
Prescriptions.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Prescriptions);