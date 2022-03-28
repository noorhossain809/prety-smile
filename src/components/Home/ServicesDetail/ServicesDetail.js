import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ServicesDetail = ({ service }) => {
  return (
    <Grid item md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mt: 10, mb: 4 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "100px", margin: "0 auto" }}
          image={service.img}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mt: 3,
              
            }}
          >
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontSize: 16,
              letterSpacing: 1,
              fontWeight: 500,
              lineHeight: 1.5,}}>
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServicesDetail;
