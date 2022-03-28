import React from 'react';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
import { Box, Container, Grid } from '@mui/material';

const infosData = [
    {
        tittle: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        tittle: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarkerAlt,
        background: 'dark',
    },
    {
        tittle: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary',
    },
]

const BussinessInfo = () => {
    return (
        // <section className="d-flex justify-content-center">
        //     <div className="row mt-3 ">
        //         {
        //             infosData.map(info => <InfoCard info={info}></InfoCard>)
        //         }
        //     </div>
        // </section>
        <Box>
           <Container>
                <Grid container>
            {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </Grid>
           </Container>
        </Box>
    );
};

export default BussinessInfo;