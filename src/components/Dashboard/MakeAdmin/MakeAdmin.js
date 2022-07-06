import { Alert, Box, Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import useAuth from '../../../hooks/useAuth';

const styles = {
  root: {
    background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    
  },
};

const MakeAdmin = (props) => {
    const {classes} = props
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const {token} = useAuth();

    const handleBlur = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
           const user = {email}
        fetch('https://fathomless-scrubland-68650.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.modifiedCount){
                setSuccess(true)

            }
        })

    }
    return (
        <>

        <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" >
           <Box gridColumn="span 12" mx={{xs:4, sm:8,md: 20}} sx={{mt:15,}}>
           <Paper elevation={3} sx={{p:6,}}>
        <h5 style={{color:'#0fcfec'}} className=" mb-3 text-center">Add an admin</h5>
        <form onSubmit={handleSubmit}>
          <div class="form-group my-4">
            <TextField
           
              onBlur={handleBlur}
              id="demo-helper-text-misaligned"
              type="email"
              label="Email"
              name="email"
              fullWidth
            />
          </div>
          <Button type="submit" className={classes.root} sx={{ fontWeight: "bold", mb: 6, color:'white', width: '100%' }}>
          Submit
          </Button>
        </form>
        {success &&  
       
       <Alert severity="success" className="text-center justify-content-center">Made Admin Successfully Added</Alert>
        
      }
        </Paper>
           </Box>
      </Box>
    </>
    );
};
MakeAdmin.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MakeAdmin);