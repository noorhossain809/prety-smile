import React from 'react';
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



const TableData= (props, {appointments}) => {
  const [value, setValue] = React.useState(null);
    const { classes} = props;
    console.log('',appointments)
    return (
      <TableContainer component={Paper}>
        <div className="mx-4">
        <div className="">
        <div className="d-flex justify-content-between mt-4">
        <h4 className="mt-2 mx-2" style={{fontSize: 20, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf'}}>Recent Appointments</h4>
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
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Date</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Time</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Name</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Contact</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Prescription</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e', paddingRight: '20px'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                01
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>07-06-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>3:00 PM</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>01700000000</TableCell>
              <TableCell align="">
              <Button className={classes.root} sx={{color: '#fff', fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18}}>
            View
          </Button>
              </TableCell>
              <TableCell align="">
                <div className="d-flex" style={{gap: 2}}>
                <Button variant='contained' sx={{ fontWeight: "medium", backgroundColor:'#64b5f6', textTransform: 'capitalize',letterSpacing: 0.8,fontSize: 16,}}>
            Pending
          </Button>
          <button 
          style={{backgroundColor:'#ffb74d', color: 'white', border: 'none', borderRadius: 5, padding: '0 15px'}}
          
          >
          <FontAwesomeIcon icon={faPen} />
          </button>
          
                </div>
              </TableCell>
            </TableRow>
            </TableBody>
      </Table>
        </div>
    </TableContainer>
    );
};
TableData.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TableData);