import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
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

    fetch("http://localhost:5000/addADoctor", {
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
    <div className="container-fluid row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      
      <Box sx={{display: 'flex',alignItems: 'center',mx:'auto',}}>
        <Paper elevation={3} sx={{p:6,}}>
        <form onSubmit={handleSubmit}>
          <div class="form-group my-4">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            {/* <input
              onBlur={handleBur}
              type="email"
              class="form-control"
              name="email"
              placeholder="Enter email"
            /> */}
            <TextField
              onBlur={handleBur}
              
              
              id="demo-helper-text-misaligned"
              type="email"
              label="Email"
              name="email"
              fullWidth
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleInputPassword1">Name</label>
            <input
              onBlur={handleBur}
              type="text"
              class="form-control"
              name="name"
              placeholder="name"
            /> */}
            <TextField
              onBlur={handleBur}
              
              
              id="demo-helper-text-misaligned"
              type="name"
              label="Name"
              name="name"
              fullWidth
            />
            
          </div>
          <div class="form-group">
            {/* <label for="exampleInputPassword1">Upload image</label> */}
            {/* <input
              onChange={handleFileChange}
              type="file"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="file"
            /> */}
            <TextField
              onChange={handleFileChange}
              helperText="Please chose your file"
              type="file"
              label=" "
              
              
            />
          </div>

          {/* <button type="submit" class="btn btn-primary">
            Submit
          </button> */}
          <Button type="submit" className={classes.root} sx={{ fontWeight: "bold", mb: 6, color:'white', width: '100%' }}>
          Submit
          </Button>
        </form>
        </Paper>
        </Box>
      
    </div>
  );
};
AddDoctor.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddDoctor);
