import React from 'react';

import GalleryCard from './gallery_card';

import GalleryStyles from './gallery_style';
import galleryData from './gallery_data';

const GallerySection = () => {
  const galleryClasses = GalleryStyles();

  return (
    <div id='gallery' className={galleryClasses.galleryContainer}>
      {galleryData.map((item, index) => {
        // return <GalleryCard/>
      })}
    </div>
  );
};

export default GallerySection;
