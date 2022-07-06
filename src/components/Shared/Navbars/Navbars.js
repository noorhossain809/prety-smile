import { AppBar, Avatar, Box, Button, createTheme, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../images/dent_care-removebg-preview (1).png'
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const StyleBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#94a3b8',
    color: '#94a3b8',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      // animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Navbars = () => {
  const { user, logout } = useAuth()
  console.log(user)
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



      <AppBar position="static" sx={{ bgcolor: '#2dd4bf' }}>
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
            <img src={logo} alt="logo" height={90} />


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>

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
                {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))} */}

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      About
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/appointment" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      Dental Service
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      Dashboard
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      Reviews
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      Blog
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{ mx: 2, color: 'black', display: 'block' }}
                    >
                      Contact Us
                    </Typography>
                  </Link>
                </MenuItem>
                {user.email ?
                  <Box>
                    <MenuItem onClick={handleCloseNavMenu}>

                      <Typography
                        onClick={logout}
                        textAlign="center"
                        sx={{ mx: 2, color: 'black', display: 'block' }}
                      >
                        Logout
                      </Typography>

                    </MenuItem>
                  </Box>
                  :
                  <Box>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <Typography
                          textAlign="center"
                          sx={{ mx: 2, color: 'black', display: 'block' }}
                        >
                          Login
                        </Typography>
                      </Link>
                    </MenuItem>
                  </Box>
                }
              </Menu>

            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>

              <Link to="/home" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
              </Link>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              <Link to="/appointment" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
                >
                  Dental Service
                </Button>
              </Link>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
              >
                Reviews
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
              >
                Blog
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
              >
                Contact Us
              </Button>


              <Tooltip title={user.displayName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,}}>
                  {
                    user.email ? 
                    <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                  </StyledBadge>
                  :
                  <StyleBadge
                  overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
              <Avatar alt="Remy Sharp" src={user.photoURL} />
                  </StyleBadge>
                  
                  }
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




                <ul className="list-unstyled">
                  <li>
                    <MenuItem>
                      <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <Typography
                          align="center"
                          sx={{ textTransform: 'capitalize', color: "#212121", textAlign: "center", fontSize: 20, }}
                        >
                          Dashboard
                        </Typography>
                      </Link>
                    </MenuItem>
                  </li>
                  {user?.email ?

                    <li>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography
                          align="center"
                          onClick={logout}
                          sx={{ textTransform: 'capitalize', color: "#212121", textAlign: "center", fontSize: 20, }}
                        >
                          Logout
                        </Typography>
                      </MenuItem>
                    </li>
                    :
                    <li>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          <Typography
                            align="center"
                            sx={{ textTransform: 'capitalize', color: "#212121", textAlign: "center", fontSize: 20, }}
                          >
                            Login
                          </Typography>
                        </Link>
                      </MenuItem>
                    </li>
                  }


                </ul>


              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbars;