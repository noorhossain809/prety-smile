import { Container, Grid } from '@mui/material';
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
        <Container className="text-container">
            <div className="text-center service">
                 <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                 <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
            </div>
            
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{}}>
                {
                    servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                }
            </Grid>
        
        </Container>
    );
};

export default Services;