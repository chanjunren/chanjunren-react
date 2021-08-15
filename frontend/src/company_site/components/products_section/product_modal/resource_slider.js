import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { IMG_TYPE, VID_TYPE } from '../../../../util/values';

import { makeStyles } from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './resource_slider.css';

const SliderStyles = makeStyles((theme) => ({
  rightArrow: {
    zIndex: 10,
    paddingLeft: '30px',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '60px',
  },
  leftArrow: {
    zIndex: 10,
    paddingRight: '30px',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '60px',
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
    <section className="resource-slider-container">
      <ArrowBackIosIcon onClick={prevSlide} className={classes.leftArrow} />

      {resourceData.map((resource, index) => {
        const slide =
          resource.type === IMG_TYPE ? (
            <img className="resource" src={resource.src} />
          ) : resource.type === VID_TYPE ? (
            <ReactPlayer className="resource" controls url={resource.src} />
          ) : (
            <div> ERROR </div>
          );
        return (
          <div
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currentSlide && slide}
          </div>
        );
      })}
      <ArrowForwardIosIcon onClick={nextSlide} className={classes.rightArrow} />
    </section>
  );
};

export default ResourceSlider;
