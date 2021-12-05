import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AboutVideo from '../../images/about_section/about_video.mp4';

import AboutSectionStyles from './about_us_styles';

import './about.css';
const AboutSection = () => {
  const classes = AboutSectionStyles();

  return (
    <div id="about" className="about-container">
      <div className="about-bg">
        <video className="video-bg" autoPlay muted loop src={AboutVideo} />
      </div>
      <Grid container className={classes.aboutContent}>
        <Grid item xs={12} md={5}>
          <Typography variant="h1" className={classes.headerText}>Everyday Robotics</Typography>
        </Grid>
        <Grid item xs={12} md={7} className={classes.bodyContainer}>
          <div>
            
            <Typography variant="body1" className={classes.bodyText}>
              Founded in April 2019, RoboSolutions is the exclusive distributor
              for temi – The Service Robot in SG, Malaysia & Indonesia.
            </Typography>
            <Typography variant="body1" className={classes.bodyText}>
              Using temi’s platform, RoboSolutions brings businesses a powerful
              way to communicate with people, no matter where they may be
            </Typography>
            <Typography variant="body1" className={classes.bodyText}>
              Versatile, effective and affordable, we envision temi leading the
              way in service robotics globally
            </Typography>
            <Typography variant="body1" className={classes.bodyText}>
              We provide a one-stop service to deploy fleets of temi(s) – from installation, training, programming, 
              add-on IoTs & repair maintenance.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutSection;
