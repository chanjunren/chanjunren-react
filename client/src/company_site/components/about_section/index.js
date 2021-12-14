import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AboutSectionStyles from './about_us_styles';

const AboutSection = () => {
  const classes = AboutSectionStyles();

  return (
    <Grid id="about" className={classes.aboutContainer} container>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.textContainer} item xs={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>Our Roots</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>Founded in April 2019</Typography>
            <Typography variant="body1" className={classes.bodyText}>
                    RoboSolutions is the exclusive distributor
                    for temi – The Service Robot in SG, Malaysia & Indonesia.
            </Typography>
          </div>
          
        </Grid>
        <Grid className={classes.imageContainer} item xs={6}>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.imageContainer} item xs={6}>
        </Grid>
        <Grid className={classes.textContainer} container item xs={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>Everyday Robotics</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>With Temi as a platform</Typography>
            <Typography variant="body1" className={classes.bodyText}>
              RoboSolutions brings businesses a powerful
              way to communicate with people, no matter where they may be
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.textContainer} container item xs={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>Service Robotics</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>Versatile, Effective and Affordable</Typography>
            <Typography variant="body1" className={classes.bodyText}>
              We envision temi leading the
              way in service robotics globally
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.imageContainer} item xs={6}>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.imageContainer} item xs={6}>
        </Grid>
        <Grid className={classes.textContainer} container item xs={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>What we provide</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>One Stop Service</Typography>
            <Typography variant="body1" className={classes.bodyText}>
              We provide services to deploy fleets of temi(s) – from installation, training, programming, 
              add-on IoTs & repair maintenance
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
