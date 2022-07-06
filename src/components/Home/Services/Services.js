import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import dental from '../../../images/dental.png';
import tooth1 from '../../../images/tooth 1.png';
import tooth from '../../../images/tooth.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import './Service.css'

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: dental,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa voluptatem dolor laborum sint optio minima.'
    },
    {
        name: 'Cavity Filling',
        img: tooth1,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa voluptatem dolor laborum sint optio minima.'
    },
    {
        name: 'Teath Whitening',
        img: tooth,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa voluptatem dolor laborum sint optio minima.'
    }
]

const Services = () => {
    return (
        <Container  className="">
            <Box  marginTop={{xs:60, sm:0, md:16}} className="text-center" sx={{mt:16}}>
                 <Typography variant="h6" style={{color:'#1CC7C1'}}>OUR SERVICES</Typography>
                 <Typography variant="h5" style={{color:'#3A4256'}}>Services We Provide</Typography>
            </Box>
            
            <Grid container spacing={{ xs: 1, md: 1 }}  sx={{}}>
                {
                    servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                }
            </Grid>
        
        </Container>
    );
};

export default Services;