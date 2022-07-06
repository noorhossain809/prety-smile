import React from 'react';
import william from '../../../images/william.png'
import Aliza from '../../../images/Aliza.png'
import ema from '../../../images/ema.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'
import { Box, Container, Grid, Typography } from '@mui/material';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! Hic non architecto nobis nisi.',
        name : 'Wilson Harry',
        from : 'California',
        img : william
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! Hic non architecto nobis nisi.',
        name : 'Ema Gomez',
        from : 'California',
        img : Aliza
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! Hic non architecto nobis nisi.',
        name : 'Aliza Farari',
        from : 'California',
        img : ema
    }
]


const Testimonials = () => {
    return (
        <Container sx={{mt: 6}}>
            
                <Box className="containers">
                      <Typography variant="h5" sx={{color: '#2dd4bf', fontWeight: 'bold', letterSpacing: 1,}}>Testimonial</Typography>
                      <Typography  variant="h5"  style={{fontWeight:'450'}}>What's Our Patients <br/> Says </Typography>
                </Box>
                <Grid container spacing={{ xs: 1, md: 1 }} >
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                </Grid>
            
        </Container>
    );
};

export default Testimonials;