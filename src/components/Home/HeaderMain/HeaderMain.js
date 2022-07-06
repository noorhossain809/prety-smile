import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import chair from "../../../images/chair 1.png";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

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

const HeaderMain = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Grid
      container 
      spacing={2}
      style={{ height: "600px" }}
      marginTop={6}
      >
        <Grid item xs={12} sm={5} md={5} className="">
          <Box sx={{mt:4}}>
          <Typography variant="h3" style={{ color: "#3A4256" }}>
            Your New Smile <br></br> Starts Here
          </Typography>
          <Typography variant="subtitle1" className="text-secondary" sx={{my: 2}}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus{" "}
            <br /> impedit asperiores laboriosam, dolores odio voluptatem <br />{" "}
            magnam error eum perferendis quo rem tempore vitae.
          </Typography>
          <Link to="/appointment" style={{textDecoration: "none"}}>
          <Button className={classes.root} sx={{ fontWeight: "bold", mb: 6 , }} >
            Get Appointment
          </Button>
          </Link>
          </Box>
          
        </Grid>
        <Grid item xs={12} sm={7} md={7} className="">
          <img src={chair} alt="" className="img-fluid" />
        </Grid>
      </Grid>
    </Container>
  );
};
HeaderMain.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HeaderMain);
