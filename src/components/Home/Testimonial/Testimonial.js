import { Box, Card, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Testimonial = (props) => {
    const {quote, name, from, img} = props.testimonial;
    return (
        // <div className="card shadow-sm">
        //     <div className="card-body">
        //        <p className="card-text text-center">{quote}</p>
        //     </div>
        //     <div className="card-footer d-flex align-items-center">
        //         <img className="mx-3" src={img} alt="" width="60"/>
        //         <div>
        //             <h6 style={{color:'#5FC7C7', fontWeight:'800'}}>{name}</h6>
        //             <p style={{color:'#3C4356', fontWeight: '600'}} className="m-0">{from}</p>
        //         </div>
        //     </div>
        // </div>
        <Grid md={4} sx={{px:2}}>
            <Card sx={{p:3,}}>
            <Box>
            <Typography variant="h6" sx={{fontSize: 16, color:'text.secondary', lineHeight: 1.5,}}>{quote}</Typography>
            </Box>
            <Box sx={{display: 'flex',alignItems: 'center',gap:2, my:2}}>
                <img src={img} alt="" style={{width: '60px'}}  />
                <Box>
                    <Typography variant="body1" sx={{fontWeight: 'bold', color:'#2dd4bf'}}>{name}</Typography>
                    <Typography variant="body2">{from}</Typography>
                </Box>
            </Box>
        </Card>
        </Grid>
    );
};

export default Testimonial;