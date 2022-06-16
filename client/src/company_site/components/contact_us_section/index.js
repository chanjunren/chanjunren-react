import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@mui/material/Link';
import useContactStyles from './contact_us_style';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';
const ContactUsSection = (props) => {
  const classes = useContactStyles();
  return (
    <Grid id="contactUs" container className={classes.root}>
      <Grid item className={classes.mapContainer} sm={12} md={6}>
      </Grid>
      <Grid item sm={12} md={6} className={classes.infoContainer}>
        <div className={classes.headerBlock}>
          <PlaceIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Address
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
          10 Ubi Crescent #07-50 Ubi TechPark (Lobby C) Singapore 408564
        </Typography>

        <div className={classes.headerBlock}>
          <MailIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Email
          </Typography>
        </div>
        <Link
          className={classes.infoHeader}
          variant="body1"
          href={`mailto:enquiries@robosolutions.sg`}
         // href="mailto:enquiries@robosolutions.sg" 
         >
            enquiries@robosolutions.sg
        </Link>
        <div className={classes.headerBlock}>
          <LocalPhoneIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Contact Number
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
          +(65) 8303 2264
        </Typography>
      </Grid>
    </Grid>
    
  );
};

export default ContactUsSection;
