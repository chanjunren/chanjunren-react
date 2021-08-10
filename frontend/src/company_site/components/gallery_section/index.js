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
  ImgWrap,
  Img,
} from './gallery_elements';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GalleryStyles from './gallery_style';
const GallerySection = () => {
  const galleryClasses = GalleryStyles();
  return (
    <InfoContainer id="gallery" lightBg={false}>
      <InfoWrapper>
        <InfoRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Gallery</TopLine>
              {/* <Typography className={galleryClasses.heading} variant="h4">
                Want to see more?
              </Typography> */}
              <Typography className={galleryClasses.subtitle} variant="body1">
                Here is a collage of Temi and our applications in action!
              </Typography>
              <Button
                className={galleryClasses.galleryButton}
                variant="outlined"
                color="secondary"
              >
                View Gallery
              </Button>
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
