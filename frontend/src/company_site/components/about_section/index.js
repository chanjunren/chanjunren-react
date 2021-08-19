import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AboutSectionStyles from './about_us_styles';

const AboutSection = () => {
  const classes = AboutSectionStyles();

  return (
    <div id="about">
      <Grid className={classes.aboutContainer} container>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">Everyday Robotics</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Founded in April 2019, RoboSolutions is the exclusive distributor
            for temi – The Service Robot in Singapore, Malaysia & Indonesia.
            Using temi’s platform, RoboSolutions brings businesses a powerful
            way to communicate with people, no matter where they may be.
            Versatile, effective and affordable, we envision temi leading the
            way in service robotics globally. We provide a one-stop service
            needed to deploy and manage fleets of temi(s) – from installation,
            training, custom programming, add-on IoTs & maintenance to repair
            services. RoboSolutions also develops other robotic solutions to
            bring productivity to business operations.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutSection;
