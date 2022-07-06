import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import doctor from "../../../images/doctors.png";
import "./MakeAppointment.css";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
};

const MakeAppointment = (props) => {
  const { classes } = props;
  return (
    <Container className="make-appointment">
      
       <Box marginTop={{xs:0, sm:0, md: 24}}>
       <Grid container spacing={{md:6, sm:1, xs:1}}>
          <Grid xs={12} sm={12} md={5} className="d-none d-lg-block">
            <img src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} marginTop={{xs:0, sm:0,md:0}} className="d-block">
            <Typography
              variant="h5"
              sx={{ color: "#2dd4bf", fontWeight: "bold" }}
             
            >
              APPOINTMENT
            </Typography>
            <Typography
             fontSize={{md:48, sm:24, xs:26}}
            variant="h3" sx={{ my: 3, color: "white" }}>
              Make an appointment <br /> Today
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: 16,
                letterSpacing: 1,
                fontWeight: 500,
                lineHeight: 1.5,
                my: 4,
                textAlign: "left",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Aut praesentium quam impedit mollitia blanditiis <br />
              natus voluptatum error dolor doloribus.
            </Typography>
            <Button className={classes.root} sx={{ fontWeight: "bold", mb: 6 }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
       </Box>
      
    </Container>
  );
};
MakeAppointment.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MakeAppointment);
