import React from 'react';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './about_us_elements';

const AboutSection = () => {
  return (
    <InfoContainer id="about" lightBg={false}>
      <InfoWrapper>
        <InfoRow imgStart={true}>
          <Column1>
            <TextWrapper>
              <TopLine>About Us</TopLine>
              <Heading lightText={true}>
                Exclusive distributor of Temi Robots in Singapore, Malaysia and
                Indonesia
              </Heading>
              <Subtitle lightTextDesc={true}>TO BE FILLED</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={require('../../images/about_svg.svg')} alt='About Us Svg' />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default AboutSection;
