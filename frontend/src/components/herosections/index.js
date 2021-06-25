import React from 'react';

import Video from '../../videos/homeVideo.mp4';

import {HeroContainer, HeroBg, VideoBg} from './HeroElements';

const HeroSection = () => {
//   console.log('VIdeo:  ' + Video);
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
    </HeroContainer>
  );
};

export default HeroSection;
