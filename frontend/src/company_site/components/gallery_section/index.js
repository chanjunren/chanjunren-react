import React from 'react';
import { Button } from '../shared/button';

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
} from './gallery_elements';

const GallerySection = () => {
  return (
    <InfoContainer id="gallery" lightBg={false}>
      <InfoWrapper>
        <InfoRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Gallery</TopLine>
              <Heading lightText={true}>Want to see more?</Heading>
              <Subtitle lightTextDesc={true}>
                Here is a collage of Temi and our applications in action!
              </Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true}
                  dark={true}
                >
                  Gallery
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img
                src={require('../../images/gallery.svg')}
                alt="Gallery Svg"
              />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default GallerySection;
