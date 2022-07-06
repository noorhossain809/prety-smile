import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
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
import Buttons from './Buttons';





function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, ),
    createData('Ice cream sandwich', 237, 9.0, ),
    createData('Eclair', 262, 16.0, ),
    createData('Cupcake', 305, 3.7, ),
    createData('Gingerbread', 356, 16.0, ),
  ];

  const styles = {
    root: {
      background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
      border: 0,
      borderRadius: 5,
      // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "#fff",
      height: 38,
      padding: "0 25px",
      
    },
  
    
  };

const AllAppointments = (props) => {
    const [value, setValue] = React.useState(new Date());
    const { classes} = props;
    
    return (
        <div className="container-fluid row " style={{backgroundColor: '#e0f7fa'}}>
            <div className="col-md-3">
               <Sidebar />
            </div>
            <div className="col-md-9 " style={{marginTop: '200px'}}>
            <h3 className=" mx-2" style={{fontSize: 24, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf',}}>Recent Appointments</h3>
            <div className="row " >
            
            <div className="col-md-5 " >
            <div className="mt-2">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
      
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
            </div>
            </div>

   <div className="col-md-6 ">
   <TableContainer component={Paper}>
       <div className="d-flex justify-content-between mt-4 mr-4">
       <h4 className="mx-2" style={{fontSize: 20, fontWeight: 'bold', letterSpacing:0.5, color: '#2dd4bf'}}>Appointments</h4>
       <h4 style={{fontSize: 20, fontWeight: 'medium', letterSpacing:0.5, color: '#9e9e9e'}}>{value.toDateString('dd/MM/yyyy')}</h4>
       </div>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
        <TableRow sx={{color: 'white'}} style={{fontWeight: 'bold'}}>
            <TableCell  style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Sr.No</TableCell>
            <TableCell style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e'}}>Schedule</TableCell>
            <TableCell align="center" style={{fontWeight: 'bold', fontSize:16,color: '#9e9e9e',}}>Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
      
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                Karim Ahmed
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>7:00 PM</TableCell>
              <TableCell align="center" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} style={{color: '#fff',fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, }}>
            Not visited
          </Button>
          </TableCell>
          </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                Karim Ahmed
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>7:00 PM</TableCell>
              <TableCell align="center" style={{fontSize: 16, color: '#212121', fontWeight: 'bold',}}>
              <Button className={classes.root} style={{color: '#fff',fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, }}>
            visited
          </Button>
          </TableCell>
          </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                Karim Ahmed
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>7:00 PM</TableCell>
              <TableCell align="center" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} style={{color: '#fff',fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, }}>
            Not visited
          </Button>
          </TableCell>
          </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                Karim Ahmed
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>7:00 PM</TableCell>
              <TableCell align="center" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} style={{color: '#fff',fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, }}>
            Not visited
          </Button>
          </TableCell>
          </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                Karim Ahmed
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>7:00 PM</TableCell>
              <TableCell align="center" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} style={{color: '#fff',fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, }}>
            Not visited
          </Button>
          </TableCell>
          </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
                Karim Ahmed
              </TableCell>
              <TableCell style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>7:00 PM</TableCell>
              <TableCell align="center" style={{fontSize: 16, color: '#212121', fontWeight: 'bold'}}>
              <Button className={classes.root} style={{color: '#fff',fontWeight: "medium", textTransform: 'capitalize',letterSpacing: 0.5, fontSize: 18, }}>
            Not visited
          </Button>
          </TableCell>
          </TableRow>
{/* <React.Fragment>
<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </React.Fragment> */}
             
             
            
          
        </TableBody>
      </Table>
    </TableContainer>
   </div>
            </div>
            </div>
        </div>
    );
};
AllAppointments.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default  withStyles(styles)(AllAppointments);