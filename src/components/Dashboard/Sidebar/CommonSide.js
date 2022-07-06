import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faUserPlus, faHouseUser, } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import './Sidebar.css'

const drawerWidth = 240;

const CommonSide = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, logout} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { url } = useRouteMatch();

  const drawer = (
    <div className="sidebar">
      <Toolbar />
      <Divider />
      <List className="text-white">

        <ListItem disablePadding>

          <ListItemText>
            <ul className="list-unstyled ">
              <li className="">
                <Link to="/home" >
                  <ListItemButton>

                    <p className="text-white" ><FontAwesomeIcon icon={faHouseUser} />Home</p>

                  </ListItemButton>
                </Link>
              </li>
              <li>
                <Link to={`${url}/userAppointments`} className="text-white" >
                  <ListItemButton>

                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Appointments</p>
                  </ListItemButton>
                </Link>
              </li>
              
             {admin && <Box>
              <li>
                <Link to={`${url}/appointments`} className="text-white" >
                  <ListItemButton>

                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Appointments</p>
                  </ListItemButton>
                </Link>
              </li>
              <li>
                <Link to={`${url}/addDoctor`} className="text-white">
                  <ListItemButton>

                    <p><FontAwesomeIcon icon={faUserPlus} /> Add Doctor</p>
                  </ListItemButton>
                </Link>
              </li>
              
              <li>
                <Link to={`${url}/admin`} className="text-white">
                  <ListItemButton>

                    <p><AdminPanelSettingsIcon />Admin</p>
                  </ListItemButton>
                </Link>
              </li>
              <li>
                <Link to={`${url}/allPatients`} className="text-white">
                  <ListItemButton>

                    <p><GroupOutlinedIcon/>Patients</p>
                  </ListItemButton>
                </Link>
              </li>
              <li>
                <Link to={`${url}/prescription`} className="text-white">
                  <ListItemButton>

                    <p><FontAwesomeIcon icon={faFileAlt} />Prescription</p>
                  </ListItemButton>
                </Link>
              </li>
             </Box> 
             }
             <li>
                <Link to={`${url}/setting`} className="text-white">
                  <ListItemButton>

                    <p><SettingsIcon />Setting</p>
                  </ListItemButton>
                </Link>
              </li>
            </ul>
          </ListItemText>

        </ListItem>

      </List>
      <Divider />
      <List className="text-white">
       
          <ListItem  disablePadding>
            <ListItemButton>
             <ListItemText>
             <Link onClick={logout} className="text-white mt-4">
                  <p><LogoutIcon />Logout</p>
                  </Link>
             </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"

        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/dashboard">
          <Typography variant="h6" noWrap component="div" sx={{color: 'white',}} className="list-unstyled">
            Dashboard
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box

        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: '#19d3ae', }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer

          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{

            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{ backgroundColor: '#19d3ae' }}
          variant="permanent"
          sx={{
            backgroundColor: '#19d3ae',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
};

export default CommonSide;