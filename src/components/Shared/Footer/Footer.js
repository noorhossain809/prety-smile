import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import FooterCol from '../FooterCol/FooterCol';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Button } from '@mui/material';

const styles = {
  root: {
    background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
};

const Footer = (props) => {
    const {classes} = props;
    const noNamed = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                  <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                  <FooterCol key={2} menuTitle={"services"} menuItems={services}/>
                  <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon className="icon active-icon" icon={faTwitter} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            {/* <button className="btn btn-primary">+2025550295</button> */}
                            <Button
              type="button"
                className={classes.root}
                sx={{ fontWeight: "bold", mb: 6 }}
                
              >
                +2025550295
              </Button>
                        </div>
                        </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default  withStyles(styles)(Footer);