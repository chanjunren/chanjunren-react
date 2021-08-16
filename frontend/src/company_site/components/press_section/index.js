import React from 'react';
import ResponsiveGallery from '../shared/gallery';

import PressStyles from './press_styles';

import PressImg1 from '../../images/press_section/press_img1.png';
import PressImg2 from '../../images/press_section/press_img2.png';
import PressImg3 from '../../images/press_section/press_img3.png';
import PressImg4 from '../../images/press_section/press_img4.jpg';
import PressImg5 from '../../images/press_section/press_img5.jpg';

const PressSection = () => {
  const classes = PressStyles();

  const articles = [
    {
      src: PressImg1,
    },
    {
      src: PressImg2,
    },
    {
      src: PressImg3,
    },
    {
      src: PressImg4,
    },
    {
      src: PressImg5,
    },
  ];

  return (
    <div id="press" className={classes.pressContainer}>
      <ResponsiveGallery resources={articles} />
    </div>
  );
};

export default PressSection;
