import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import feature from "../../../images/featured.png";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    background: "linear-gradient(45deg, #2dd4bf 30%, #67e8f9 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
};

const FeaturedSurvice = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Grid container spacing={12} sx={{ mt: 2, mb: 12 }}>
        <Grid item md={6}>
          <img className="img-fluid" src={feature} alt="" sx={{borderRadius: 6}}/>
        </Grid>
        <Grid item md={6} marginTop={{xs:0, sm:0, md:8}}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 32,
              fontWeight: "bold",
              letterSpacing: 1.5,
              lineHeight: 1.3,
            }}
          >
            Exceptional Dental <br />
            Care, on Your Terms{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: 16,
              letterSpacing: 1,
              fontWeight: 500,
              lineHeight: 1.5,
              my: 6,
              textAlign: "left",
              color: "text.secondary",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            itaque quis omnis perspiciatis veniam deserunt voluptate autem dolor
            eveniet voluptatum. Mollitia consequatur quia tenetur, cupiditate
            placeat corporis fuga laudantium culpa dolore vitae cumque, eaque
            deserunt. Aliquam facilis possimus unde ipsa pariatur accusamus
            reiciendis corporis, enim deleniti labore est earum qui quibusdam.
            Neque totam quia accusantium esse autem saepe veritatis dolor sint
            consequuntur sapiente error laudantium quod est, magni nulla ut.
          </Typography>
          <Button className={classes.root} sx={{ fontWeight: "bold", mb: 6 }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
FeaturedSurvice.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FeaturedSurvice);
