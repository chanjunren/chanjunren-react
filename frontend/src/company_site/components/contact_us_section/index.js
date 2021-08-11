import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useContactStyles from './contact_us_style';
import Map from './map';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';
const ContactUsSection = (props) => {
  const classes = useContactStyles();
  return (
    <Grid id="contactUs" container className={classes.root}>
      <Grid item className={classes.mapContainer} xs={12} sm={6}>
        <Map zoom={19} center={{ lat: 1.3265126, lng: 103.8940942 }} />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.infoContainer}>
        <div className={classes.headerBlock}>
          <PlaceIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Address
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
          10 Ubi Crescent #07-50 Ubi TechPark
        </Typography>

        <div className={classes.headerBlock}>
          <MailIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Email
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
          robosolutions@gmail.com
        </Typography>
        <div className={classes.headerBlock}>
          <LocalPhoneIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Contact Number
          </Typography>
        </div>

        <Typography className={classes.infoBody} variant="body1">
          +65 9230 1048
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactUsSection;
