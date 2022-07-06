import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'
import { Box, CardContent, Grid, Typography } from '@mui/material';

const InfoCard = ({ info }) => {
    console.log(info);
    return (
        <Grid item md={4} sm={12} xs={12} className="info-card" >
            <CardContent
                sx={{ color: 'white', display: 'flex', justifyContent: 'center', p: 4, mx: 1 }}
                className={` info-container  info-${info.background}`}

            >
                <Box sx={{ mr: 3 }}>
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