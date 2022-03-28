import { Button, Container } from "@mui/material";
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
      <div className="contact my-5 py-5">
        <div className="section-header text-center text-white mb-5">
          <h6
            style={{ fontWeight: "800", color: "#2dd4bf" }}
            className="text-uppercase"
          >
            Contact Us
          </h6>
          <h2 style={{ fontWeight: "600" }}>Always Contact with us</h2>
        </div>
        <div className="col-md-9 mx-auto">
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
        </div>
      </div>
    </Container>
  );
};
Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Contact);
