import React from 'react';

import Grid from '@material-ui/core/Grid';

import GalleryCard from './gallery_card';

import GalleryStyles from './gallery_style';
import galleryData from './gallery_data';

const GallerySection = () => {
  const galleryClasses = GalleryStyles();

  return (
    <Grid container spacing={3} id="gallery" className={galleryClasses.galleryContainer}>
      {galleryData.map((item, index) => {
        return (
          <Grid item xs={12} sm={4}>
            <GalleryCard
              cardImg={item.cardImg}
              title={item.title}
              description={item.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GallerySection;
