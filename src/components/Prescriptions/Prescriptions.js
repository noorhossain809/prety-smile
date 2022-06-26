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
import Sidebar from '../Dashboard/Sidebar/Sidebar';

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
    return (
        <>
        <div className="container-fluid row" style={{backgroundColor: "#F4FDFB"}}>
            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>
            
       <div className="col-md-7" style={{marginTop: "150px"}}>
       <h3 className=" mx-2" style={{fontSize: 24, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf',}}>Patients</h3>
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
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Date</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Name</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Contact</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e', paddingRight: '20px'}}>Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                01
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                02
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                03
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                04
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                05
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                06
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                07
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                08
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>27-2-2022</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>Karim Ahmed</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>017xxxxxxxx</TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} sx={{ fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, color: '#fff'}}>
            View
          </Button>
              </TableCell>
            
            </TableRow>
            
            </TableBody>
      </Table>
        </div>
    </TableContainer>
       </div>
    </div>
        </>
    );
};
Prescriptions.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Prescriptions);