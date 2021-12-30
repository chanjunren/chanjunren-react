import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AboutSectionStyles from './about_us_styles';

const AboutSection = () => {
  const classes = AboutSectionStyles();

  return (
    <Grid id="about" className={classes.aboutContainer} container>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.textContainer} item xs={12} sm={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>When We Started</Typography>
            <Typography variant="h2" className={classes.subHeader}>Established in April 2019</Typography>
            <Typography variant="body1" className={classes.bodyText}>
                    RoboSolutions is the exclusive distributor
                    for temi – The Service Robot in Singapore, Malaysia & Indonesia.
            </Typography>
          </div>
          
        </Grid>
        <Grid className={classes.imageContainer} item xs={12} sm={6}>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.imageContainer} item xs={12} sm={6}>
        </Grid>
        <Grid className={classes.textContainer} item xs={12} sm={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>Everyday Robotics</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>temi as a platform</Typography>
            <Typography variant="body1" className={classes.bodyText}>
              temi brings businesses a powerful
              way to communicate with people, no matter where they may be.
              Its state-of-the-art web-based fleet management platform provides users easy programming 
              (without coding) to design, sequence and deliver robotic capabilities
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.textContainer} item xs={12} sm={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>Like Magic</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>Versatile, Effective and Affordable</Typography>
            <Typography variant="body1" className={classes.bodyText}>
            temi delivers like magic with real opportunities for mass deployment. 
            It will drive innovative customer experience and business processes. 
            We envision temi becoming the world’s leading autonomous AI service robot.
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.imageContainer} item xs={12} sm={6}>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.imageContainer} item xs={12} sm={6}>
        </Grid>
        <Grid className={classes.textContainer} item xs={12} sm={6}>
          <div>
            <Typography variant="h6" color="secondary" className={classes.header}>What We Provide</Typography>
            <Typography variant="h2" color="#fff" className={classes.subHeader}>One Stop Service</Typography>
            <Typography variant="body1" className={classes.bodyText}>
            We provide end-to-end services to deploy and manage fleets of temi(s) – 
            from installations, training, custom programming, add-on IoTs  to  maintenance and repairs.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
