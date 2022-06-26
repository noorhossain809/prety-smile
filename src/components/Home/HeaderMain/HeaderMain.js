import { Button, Container } from "@mui/material";
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
    <>
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center mt-5"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3A4256" }}>
            Your New Smile <br></br> Starts Here
          </h1>
          <p className="text-secondary">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus{" "}
            <br /> impedit asperiores laboriosam, dolores odio voluptatem <br />{" "}
            magnam error eum perferendis quo rem tempore vitae.
          </p>
          <Link to="/appointment" style={{textDecoration: "none"}}>
          <Button className={classes.root} sx={{ fontWeight: "bold", mb: 6 , }} >
            Get Appointment
          </Button>
          </Link>
          
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    </>
  );
};
HeaderMain.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HeaderMain);
