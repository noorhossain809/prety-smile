import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "./Contact.css";
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
    padding: "0 80px",
  },
};

const Contact = (props) => {
    const {classes} = props;
  return (
    <Container className=" container ">
      <Box className="contact" sx={{my:5, py: 4}}>
        <Box className="section-header " textAlign="center" sx={{mb:6}}> 
          <Typography
          variant="subtitle1"
            style={{ fontWeight: "800", color: "#2dd4bf" }}
            className="text-uppercase"
          >
            Contact Us
          </Typography>
          <Typography variant="h4" color="white" style={{ fontWeight: "600" }}>Always Contact with us</Typography>
        </Box>
        <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" >
          <Box gridColumn="span 12" mx={{xs:2, sm:2,md: 10}}>
          
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject *"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message *"
              ></textarea>
            </div>
            <div className="form-group text-center">
              {/* <button type="button" className="btn btn-primary"> Submit </button> */}
              <Button
              type="button"
                className={classes.root}
                sx={{ fontWeight: "bold", mb: 6 }}
                
              >
                Submit
              </Button>
            </div>
          </form>
         
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Contact);
