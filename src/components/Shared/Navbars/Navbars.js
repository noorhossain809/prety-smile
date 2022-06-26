import { AppBar, Avatar, Box, Button, CardMedia, createTheme, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../../../images/55770083_651238301972397_3328366562229878784_n.jpg'
import logo from '../../../images/dent_care-removebg-preview (1).png'
import useAuth from '../../../hooks/useAuth';

const pages = ['Home', 'About', 'Dental Service', 'Reviews', 'Blog', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Login'];


const Navbars = () => {
const {user, logout} = useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#009688',
      },
    },
  });
    return (
        <div >
           {/* <Navbar bg="#2dd4bf" expand="lg">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home"><a class="nav-link mr-5 mr-5 active" aria-current="page" >Home</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <Link to="/dashboard"><a class="nav-link mr-5 active" aria-current="page">Dashboard</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Contact us</a>
        </li>
      </ul>
      
    </div>
  </div>
</Navbar> */}

{/* <Navbar bg="#2dd4bf" expand="lg" style={{backgroundColor: '#2dd4bf'}}>
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mb-2 mb-lg-0">
      <Link to="/home"><a class="nav-link mr-5 mr-5 active" aria-current="page" >Home</a></Link>
      <a class="nav-link mr-5 active" aria-current="page" href="#">About</a>
      <Link to="/dashboard"><a class="nav-link mr-5 active" aria-current="page">Dashboard</a></Link>
      <Link to="/dashboard"><a class="nav-link mr-5 active" aria-current="page">Dashboard</a></Link>
      <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Admin</a>
      <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Blogs</a>
      <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Contact us</a>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
<AppBar position="static"  sx={{bgcolor: '#2dd4bf'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Dental
          </Typography> */}
          
          <img src={logo} alt="logo"  height={90}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Doctor
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>

          <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' }}}>
          
              <Link to="/home" style={{textDecoration: "none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              </Link>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              <Link to="/appointment" style={{textDecoration: "none"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
              >
                Dental Service
              </Button>
              </Link>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
              >
                Reviews
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
              >
                Blog
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
              >
                Contact Us
              </Button>
              
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={img} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
             
                <MenuItem  onClick={handleCloseUserMenu}>
                  
                 <ul className="list-unstyled">
                 <li>
                 <Link to="/dashboard"  style={{textDecoration: "none"}}>
              <Button
                align="center"
                sx={{textTransform: 'capitalize', color: "#212121",textAlign:"center", fontSize: 20,}}
              >
                Dashboard
              </Button>
              </Link>
                 </li>
              {user?.email ? 
              
               <li>
               
               <Button
                 align="center"
                 onClick={logout}
                 sx={{textTransform: 'capitalize', color: "#212121",textAlign:"center", fontSize: 20, }}
               >
                 Logout
               </Button>
              
                  </li> 
                 :
                 <li>
                 <Link to="/login"  style={{textDecoration: "none"}}>
              <Button
                align="center"
                sx={{textTransform: 'capitalize', color: "#212121",textAlign:"center", fontSize: 20, }}
              >
                Login
              </Button>
              </Link>
              </li>
                 }
                 
                
                 </ul>
               
                </MenuItem>
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
        </div>
    );
};

export default Navbars;