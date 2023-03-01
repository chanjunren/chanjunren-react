import React from 'react';
// import getS3AssetUrl from '../../../util/aws_url_generator';
import RsAppLogo from '../../images/temi.jpg';

// import Video from '../../videos/homeVideo.mp4';

import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroImg,
  // HeroContent,
  // HeroH1,
  // HeroP,
  // HeroBtnWrapper,
  // ArrowForward,
  // ArrowRight,
} from './hero_elements';

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHoverHandler = () => {
  //   setHover(!hover);
  // };

  // const videoUrl = getS3AssetUrl('homeVideo.mp4');

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg
          autoPlay
          loop
          muted
        >
          <source
            src={videoUrl}
            type='video/mp4'
          />
        </VideoBg> */}
        <HeroImg src={RsAppLogo} alt='temi products' />
      </HeroBg>
      {/* <HeroContent>
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
      </HeroContent> */}
    </HeroContainer>
  );
};

export default HeroSection;
