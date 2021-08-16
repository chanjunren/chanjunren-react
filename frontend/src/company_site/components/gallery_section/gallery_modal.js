import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { IMG_TYPE, VID_TYPE } from '../../../util/values';

const GalleryModalStyle = makeStyles((theme) => ({
  galleryModal: {
    maxWidth: '100vh',
    padding: '30px',
  },
  galleryModalContainer: {
    margin: 'auto',
    width: '100%',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryImageContainer: {
    justifiyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '40px 0 0 0',
  },
  gallerySlide: {
    display: 'block',
    cursor: 'pointer',
  },
  selectedSlide: {
    margin: '0 auto',
    border: '4px solid teal',
    width: '70vh',
    height: 'auto',
  },
  slideResource: {
    margin: '5px 0',
    maxHeight: '100px',
    width: 'auto',
    display: 'block',
    cursor: 'pointer',
  },
}));

const GalleryModal = (props) => {
  const classes = GalleryModalStyle();
  const {
    openModal,
    gallery,
    modalHandler,
    selectedSlide,
    onGalleryItemClick,
  } = props;

  if (!selectedSlide || !gallery || gallery.length === 0) {
    return null;
  }

  const selectedSlideComp =
    selectedSlide.type === IMG_TYPE ? (
      <img className={classes.selectedSlide} src={selectedSlide.src} />
    ) : selectedSlide.type === VID_TYPE ? (
      <ReactPlayer
        className={classes.selectedSlide}
        controls
        url={selectedSlide.src}
      />
    ) : (
      <div> ERROR </div>
    );

  return (
    <Modal
      className={classes.galleryModal}
      open={openModal}
      onClose={modalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div className={classes.galleryModalContainer}>
          {selectedSlideComp}
          <div className={classes.galleryImageContainer}>
            {gallery.map((item, index) => {
              return item.type === IMG_TYPE ? (
                <img
                  className={classes.slideResource}
                  src={item.src}
                  onClick={() => {
                    onGalleryItemClick(item);
                  }}
                />
              ) : item.type === VID_TYPE ? (
                <ReactPlayer
                  className={classes.slideResource}
                  url={item.src}
                  onClick={() => {
                    onGalleryItemClick(item);
                  }}
                />
              ) : (
                <div> ERROR </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default GalleryModal;
