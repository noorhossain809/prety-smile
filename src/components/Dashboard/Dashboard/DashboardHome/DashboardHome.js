import { Box } from '@mui/material';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddDoctor from '../../../AddDoctor/AddDoctor/AddDoctor';
import AllPatients from '../../../AllPatients/AllPatients/AllPatients';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import Prescriptions from '../../../Prescriptions/Prescriptions';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import Appointments from '../../Sidebar/Appointments';
import CommonSide from '../../Sidebar/CommonSide';
import UserAppointments from '../../UserAppointments/UserAppointments';
import Dashboard from '../Dashboard';

const DashboardHome = () => {
    let { path } = useRouteMatch();
    return (
        <Box sx={{backgroundColor: "#F4FDFB", pb: 28}}>
          <Box sx={{display: 'flex' }}>
            <CommonSide />
            <Box>
            <Switch>
            <Route exact path={path}>
          <Dashboard />
        </Route>
        <Route path={`${path}/userAppointments`}>
          <UserAppointments />
        </Route>
        <AdminRoute path={`${path}/appointments`}>
          <Appointments />
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctor`}>
          <AddDoctor />
        </AdminRoute>
        <AdminRoute path={`${path}/admin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/allPatients`}>
          <AllPatients />
        </AdminRoute>
        <AdminRoute path={`${path}/prescription`}>
          <Prescriptions />
        </AdminRoute>
        
      </Switch>
            </Box>
        </Box>
        </Box>
    );
};

export default DashboardHome;