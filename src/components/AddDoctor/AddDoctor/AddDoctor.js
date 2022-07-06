import { Box, Button, Paper, TextField, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

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

const AddDoctor = (props) => {
  const { classes } = props;
  const [info, setInfo] = useState({});
  const [file, setFile] = useState("");

  const handleBur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://fathomless-scrubland-68650.herokuapp.com/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Box>
    <Stack
  display="grid" gridTemplateColumns="repeat(12, 1fr)"
    >
      <Stack gridColumn="span 12" mx={{xs:2, sm:8,md: 20}} sx={{mt:15,}}>
      <Paper elevation={3} 
      sx={{p:2}}
      >
         <Typography variant="h6" sx={{mb:3, textAlign: 'center',color:'#0fcfec'}}>Add an doctor</Typography>
         <form onSubmit={handleSubmit}>
           <Box class="form-group" sx={{my:4}}>
             <TextField
               onBlur={handleBur}
               id="demo-helper-text-misaligned"
               type="email"
               label="Email"
               name="email"
               fullWidth
             />
           </Box>
           <Box class="form-group">
             <TextField
               onBlur={handleBur}
               
               
               id="demo-helper-text-misaligned"
               type="name"
               label="Name"
               name="name"
               fullWidth
             />
             
           </Box>
           <Box class="form-group">
            
             <TextField
               onChange={handleFileChange}
               helperText="Please chose your file"
               type="file"
               label=" "
               
               
             />
           </Box>
           <Button type="submit" className={classes.root} sx={{ fontWeight: "bold", mb: 6, color:'white', width: '100%' }}>
           Submit
           </Button>
         </form>
         </Paper>
      </Stack>
    
       </Stack>
       </Box>
  );
};
AddDoctor.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddDoctor);
