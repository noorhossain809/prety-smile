import React, {useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Container, } from '@mui/material';
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
import './Dashboard.css'



const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

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

const Dashboard = (props) => {
    const [value, setValue] = React.useState(new Date());
    const { classes } = props;
    // const [loggedInUser, setLoggedInUser] = useContext(AuthProvider)
    
    const [appointments, setAppointments] = useState([])
    // console.log(appointments)
  

    useEffect(() => {
        fetch('https://fathomless-scrubland-68650.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    const deleteCount = id => {
        const proceed = window.confirm('Are you sure, You want to delete')
        if(proceed){
            const url = `https://fathomless-scrubland-68650.herokuapp.com/delete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount > 0){
            alert('delete appointment successfully')
            const remainingAppointments = appointments.filter(appointment => appointment._id !== id)
            setAppointments(remainingAppointments)
           }
            console.log('delete appointment successfully', data);
        })
        }
        
    }
 

    return (
        <section>
            <Container>
                <div style={containerStyle} className="d-flex">
                    <div className="">
                        <h2 className="mt-4 mx-4">Dashboard</h2>
                        <div className="d-flex mt-4">
                            <Paper elevation={3} sx={{ borderRadius: 8, }} className="main-card mt-4">
                                <div className="d-flex cards py-3 text-white">
                                    <h1>09</h1>
                                    <div className="text">
                                        <p className="pending">Pending</p>
                                        <p >Appointments</p>
                                    </div>
                                </div>
                            </Paper>
                            <Paper elevation={3} sx={{ borderRadius: 8 }} className="main-card mt-4">
                                <div className="d-flex cardInfo py-3 text-white" style={{ backgroundColor: '#2196f3' }}>
                                    <h1>19</h1>
                                    <div className="text">
                                        <p className="pending">Today's <br /> Appointments</p>

                                    </div>
                                </div>
                            </Paper>
                            <Paper elevation={3} sx={{ borderRadius: 8 }} className="main-card mt-4">
                                <div className="d-flex cardInfo py-3 text-white" style={{ backgroundColor: '#4caf50' }}>
                                    <h1>{appointments.length}</h1>
                                    <div className="text">
                                        <p className="pending">Total <br /> Appointments</p>
                                    </div>
                                </div>
                            </Paper>
                            <Paper elevation={3} sx={{ borderRadius: 8 }} className="main-card mt-4">
                                <div className="d-flex cardInfo py-3 text-white" style={{ backgroundColor: '#ff9800' }}>
                                    <h1>78</h1>
                                    <div className="text">
                                        <p className="pending">Total <br /> Patients</p>

                                    </div>
                                </div>
                            </Paper>

                        </div>

                        <div>
                            <TableContainer component={Paper} sx={{mt: 4}}>
                                <div className="mx-4 mt-4">
                                    <div className="">
                                        <div className="d-flex justify-content-between mt-4">
                                            <h4 className="mt-2 mx-2" style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 0.5, color: '#2dd4bf' }}>Recent Appointments</h4>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                                            <TableRow sx={{ color: 'white' }} style={{ fontWeight: 'bold' }}>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Sr.No</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Name</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Time</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Date</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Contact</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e' }}>Prescription</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', fontSize: 16, color: '#9e9e9e', paddingRight: '20px' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                appointments.map(appointment => (
                                                    <TableRow

                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>
                                                    01
                                                </TableCell>
                                                <TableCell style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>{appointment.patientName}</TableCell>
                                                <TableCell style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>{appointment.time}</TableCell>
                                                <TableCell style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>{appointment.date}</TableCell>
                                                <TableCell style={{ fontSize: 16, color: '#212121', fontWeight: 'bold' }}>{appointment.phone}</TableCell>
                                                <TableCell align="">
                                                    <Button className={classes.root} sx={{ color: '#fff', fontWeight: "medium", textTransform: 'capitalize', letterSpacing: 0.5, fontSize: 18 }}>
                                                        View
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="">
                                                    <div className="d-flex" style={{ gap: 2 }}>
                                                        <Button variant='contained' sx={{ fontWeight: "medium", backgroundColor: '#64b5f6', textTransform: 'capitalize', letterSpacing: 0.8, fontSize: 16, }}>
                                                            Pending
                                                        </Button>
                                                        <button
                                                        onClick={() => deleteCount(appointment._id)}
                                                            style={{ backgroundColor: '#ffb74d', color: 'white', border: 'none', borderRadius: 5, padding: '0 15px' }}

                                                        >
                                                            <FontAwesomeIcon icon={faPen} />
                                                        </button>

                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                                ))
                                            }
 
                                            
                                        </TableBody>
                                    </Table>
                                </div>
                            </TableContainer>
                        </div>

                        <div className="mt-4 mx-4">

                        </div>
                    </div>
                    {/* <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div> */}

                </div>
            </Container>

        </section>
    );
};
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Dashboard);