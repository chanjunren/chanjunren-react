import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { IMG_TYPE, VID_TYPE } from '../../../../util/values';

import { makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const SliderStyles = makeStyles((theme) => ({
  productSliderContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  slidesContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '80vh',
    width: '100%',
  },
  rightArrow: {
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '80px',
  },
  leftArrow: {
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '80px',
  },
  closeIcon: {
    fontSize: '60px',
    cursor: 'pointer',
    float: 'right',
    marginRight: '5vh',
    marginTop: '5vh'
  },
  leftControlPanel: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightControlPanel: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  slide: {
    opacity: 0,
    transitionDuration: '1s ease',
    maxWidth: '100%',
  },
  active: {
    opacity: 1,
    transitionDuration: '1s',
    transform: 'scale(1.08)',
    maxWidth: '100%',
  },
  resource: {
    borderRadius: '10px',
    maxWidth: '100%',
  },
}));

const ResourceSlider = (props) => {
  const { resourceData, modalHandler } = props;
  if (!Array.isArray(resourceData) || resourceData.length <= 0) {
    return null;
  }

  const classes = SliderStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = resourceData.length;

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === length - 1 ? currentSlide : currentSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1);
  };

  return (
    <Grid container className={classes.productSliderContainer}>
      <Grid item xs={12} className={classes.closePanel}>
        <CancelPresentationIcon
          onClick={modalHandler}
          className={classes.closeIcon}
        />
      </Grid>
      <Grid item xs={3} className={classes.leftControlPanel}>
        <ArrowBackIosIcon onClick={prevSlide} className={classes.leftArrow} />
      </Grid>
      <Grid item xs={6} className={classes.slidesContainer}>
        {resourceData.map((resource, index) => {
          const slide =
            resource.type === IMG_TYPE ? (
              <img className={classes.resource} src={resource.src} alt={resource}/>
            ) : resource.type === VID_TYPE ? (
              <ReactPlayer
                className={classes.resource}
                controls
                url={resource.src}
              />
            ) : (
              <div> ERROR </div>
            );
          return (
            <div
              className={
                index === currentSlide
                  ? `${classes.slide} ${classes.active}`
                  : `${classes.slide}`
              }
              key={index}
            >
              {index === currentSlide && slide}
            </div>
          );
        })}
      </Grid>
      <Grid item xs={3} className={classes.rightControlPanel}>
        <ArrowForwardIosIcon
          onClick={nextSlide}
          className={classes.rightArrow}
        />
      </Grid>
    </Grid>
    // <section className="resource-slider-container">

    // </section>
  );
};

export default ResourceSlider;
