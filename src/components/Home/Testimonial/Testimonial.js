import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';

const Testimonial = (props) => {
    const {quote, name, from, img} = props.testimonial;
    return (
        <Grid item xs={12} sm={12} md={4} sx={{mt:4}}>
            <Card sx={{p:2}}>
            <Box>
            <Typography variant="subtitle2" sx={{ color:'text.secondary',}}>{quote}</Typography>
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