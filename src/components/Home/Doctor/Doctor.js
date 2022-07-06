import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


const Doctor = ({doctor}) => {
    console.log(doctor)
    return (
        <Grid xs={12} sm={12} md={3}>
      <Card sx={{ border: 0, boxShadow: 0, mt:6}}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "150px", margin: "0 auto" }}
          image={doctor.img}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              mt: 3,
              fontWeight:600
            }}
          >
            {doctor.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontSize: 16,
              letterSpacing: 1,
              fontWeight: 500,
              lineHeight: 1.5,}}>
            {service.description}
          </Typography> */}



           {/* { doctor.image ?
               <img src={`data:image/jpeg;base64,${doctor.image.img}`} width="300px" />
               :
                <img className="img-fluid mb-3" src={`https://fathomless-scrubland-68650.herokuapp.com/${doctor.image}`} alt="" width="200px"/>
                }
            <h4>{doctor.name}</h4> */}
        </CardContent>
      </Card>
    </Grid>
    );
};

export default Doctor;



