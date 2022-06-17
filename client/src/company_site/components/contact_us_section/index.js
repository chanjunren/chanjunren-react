import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import contacts from './contact_info';
import ContactCard from './contact_card';

import { useContactStyles } from './contact_us_style';
const ContactUsSection = (props) => {
  const classes = useContactStyles();
  return (
    <div id="contactUs" container className={classes.root}>
      <Typography className={classes.header} variant="h4" component="h4">
        Contact Us
      </Typography>
      <Grid container>
        {contacts.map((contact) => { return <ContactCard {...contact} />})}
      </Grid>
    </div>

  );
};

export default ContactUsSection;
