import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const InfoCard = ({ info }) => {
    console.log(info);
    return (
        // <div className="col-md-4 col-sm-3 text-white info-card">
        //     <div className={`d-flex justify-content-center info-container mx-1 info-${info.background}`}>
        //         <div className="mr-3">
        //             <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
        //         </div>
        //         <div>
        //             <h6>{info.tittle}</h6>
        //             <small>{info.description}</small>

        //         </div>
        //     </div>
        // </div>
        <Grid item md={4} sm={4} xs={12} className="info-card" >
             {/* <div className={`d-flex justify-content-center info-container mx-1 info-${info.background}`}>
             <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                   <h6>{info.tittle}</h6>
                    <small>{info.description}</small>

                </div>
             </div> */}
             
             <CardContent sx={{color: 'white', display: 'flex', justifyContent: 'center', p:4, mx:1}} className={` info-container  info-${info.background}`}>
            <Box sx={{mr: 3}}>
            <FontAwesomeIcon icon={info.icon} className="info-icon" />
            </Box>
                    <Box>
                    <Typography variant="h6" className="info-title">
                        {info.tittle}
                    </Typography>
                    <Typography variant="body2" className="info-description">
                        {info.description}
                    </Typography>
                    </Box>
                </CardContent>
             
        </Grid>
    );
};

export default InfoCard;