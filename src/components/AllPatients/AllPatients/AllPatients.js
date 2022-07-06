import { Box } from '@mui/material';
import React from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';


const AllPatients = () => {
   
    return (
        <Box sx={{m: 10}}>
            
            <Box className="container-fluid">
            <h5 style={{color:'#0fcfec'}} className=" mb-3">Patients</h5>
                <AppointmentDataTable></AppointmentDataTable>
            </Box>
            </Box>
    );
};

export default AllPatients;