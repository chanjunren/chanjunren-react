import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useContactStyles from './contact_us_style';
import Map from './map';

const ContactUsSection = (props) => {
  const classes = useContactStyles();

  // Address: 10 Ubi Crescent #07-50 Ubi TechPark
  return (
    <Grid id="contactUs" container className={classes.root}>
      <Grid item className={classes.mapContainer} xs={12} sm={6}>
        <Map zoom={19} center={{ lat: 1.3265126, lng: 103.8940942 }} />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.infoContainer}>
        <Typography className={classes.infoHeader} variant="h5">Address</Typography>
        <Typography className={classes.infoBody} variant="body1">10 Ubi Crescent #07-50 Ubi TechPark</Typography>
        <Typography className={classes.infoHeader} variant="h5">Email: </Typography>
        <Typography className={classes.infoBody} variant="body1">robosolutions@gmail.com</Typography>

        <Typography className={classes.infoHeader} variant="h5">Contact Number</Typography>
        <Typography className={classes.infoBody} variant="body1">+65 9230 1048</Typography>

      </Grid>
    </Grid>
  );
};

export default ContactUsSection;
