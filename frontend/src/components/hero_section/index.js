import React, {useState} from 'react';

import {Button} from '../shared/button';

import Video from '../../videos/homeVideo.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './hero_elements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHoverHandler = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Your Personal Robot Assistant</HeroH1>
        <HeroP>Exclusive Reseller in Singapore / Malaysia :D</HeroP>
        <HeroBtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={onHoverHandler}
            onMouseLeave={onHoverHandler}>
              Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
