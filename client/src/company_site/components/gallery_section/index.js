import React, { useState } from 'react';

import GalleryStyles from './gallery_style';
import galleryData from './gallery_data';
import GalleryModal from './gallery_modal';
import { Typography } from '@material-ui/core';
import GalleryButtons from './gallery_buttons';

const GallerySection = () => {
  const galleryClasses = GalleryStyles();
  const [openModal, toggleOpenModal] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState();
  const [selectedSlide, setSelectedSlide] = useState();
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

  const onCardClick = (index) => {
    setSelectedGallery(galleryData[index].gallery);
    setSelectedSlide(galleryData[index].gallery[0]);
    modalHandler();
  };

  const onGalleryItemClick = (slide) => {
    setSelectedSlide(slide);
  };

  return (
    <div id="gallery" className={galleryClasses.galleryContainer}>
      <GalleryModal
        openModal={openModal}
        modalHandler={modalHandler}
        gallery={selectedGallery}
        selectedSlide={selectedSlide}
        onGalleryItemClick={onGalleryItemClick}
      />
      <Typography className={galleryClasses.sectionHeader} variant="h4" component="h4" color="primary">
        Gallery
      </Typography>
      <div className={galleryClasses.buttonContainer}>
        <GalleryButtons onCardClick={onCardClick}/>

      </div>
      {/* <Grid container spacing={5} className={galleryClasses.cardContainer} >
        {galleryData.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
              <GalleryCard
                cardImg={item.cardImg}
                title={item.title}
                description={item.description}
                onCardClick={() => {
                  onCardClick(index);
                }}
              />
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
};

export default GallerySection;
