import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@mui/material/Link';
import useContactStyles from './contact_us_style';
import Map from './map';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';
import WebIcon from '@material-ui/icons/Web';

const ContactUsSection = (props) => {
  const classes = useContactStyles();
  return (
    <Grid id="contactUs" container className={classes.root}>
      <Grid item className={classes.mapContainer} sm={12} md={6}>
        <Map zoom={19} center={{ lat: 1.3265126, lng: 103.8940942 }} />
      </Grid>

      <Grid item sm={12} md={6} className={classes.infoContainer}>

      <div className={classes.headerBlock}>
          <Typography className={classes.infoHeader} variant="h5">
            Singapore
          </Typography>
        </div>
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

        <div className={classes.headerBlock}>
          <Typography className={classes.infoHeader} variant="h5">
            Malaysia
          </Typography>
        </div>
        <div className={classes.headerBlock}>
          <PlaceIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Address
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
        Unit 15-4 Level 4 Galleria Cyberjaya Jalan Teknokrat 6 Cyber 5 Cyberjaya 63000 Selangor, Malaysia
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
          href={`mailto:sales@robopreneur.com`}
         >
            sales@robopreneur.com
        </Link>
        <div className={classes.headerBlock}>
          <WebIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Website
          </Typography>
        </div>
        <Link
          className={classes.infoHeader}
          variant="body1"
          href={`www.robopreneur.com`}>
           www.robopreneur.com
        </Link>
        <div className={classes.headerBlock}>
          <LocalPhoneIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Contact Number
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
          +60 (0)3 2726 2476
        </Typography>

        <div className={classes.headerBlock}>
          <PlaceIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Address
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
        21 Lifestyle Sdn Bhd 29—3A-3 Maritime Persiaran Karpal Singh 2 11600 Georgetown Pulau Pinang, Malaysia
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
          href={`mailto:info@twenty-one.my`}
         >
           info@twenty-one.my
        </Link>
        <div className={classes.headerBlock}>
          <LocalPhoneIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Contact Number
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
           +60 (0)16 643 4495
        </Typography>

        <div className={classes.headerBlock}>
          <Typography className={classes.infoHeader} variant="h5">
            Indonesia
          </Typography>
        </div>
        <div className={classes.headerBlock}>
          <PlaceIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Address
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
        PT Esky Multimedia Indonesia Jalan Raya Kelapa Nias HF3 Mahaka Square Ground Floor C/35 Kelapa Gading Jakarta Utara 14250 Indonesia
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
          href={`mailto:harry@temisolutions.id`}
         >
            harry@temisolutions.id
        </Link>
        <div className={classes.headerBlock}>
          <WebIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Website
          </Typography>
        </div>
        <Link
          className={classes.infoHeader}
          variant="body1"
          href={`www.robotemi.com/id`}>
          www.robotemi.com/id
        </Link>
        <div className={classes.headerBlock}>
          <LocalPhoneIcon />
          <Typography className={classes.infoHeader} variant="h5">
            Contact Number
          </Typography>
        </div>
        <Typography className={classes.infoBody} variant="body1">
           +62 (0)816 708 787
        </Typography>



      </Grid>

 
    </Grid>
  );
};

export default ContactUsSection;
