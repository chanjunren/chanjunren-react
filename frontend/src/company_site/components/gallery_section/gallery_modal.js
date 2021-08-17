import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import { IMG_TYPE, VID_TYPE } from '../../../util/values';

const GalleryModalStyle = makeStyles((theme) => ({
  galleryModal: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryModalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gallerySlide: {
    cursor: 'pointer',
  },
  displayContainer: {
    display: 'flex',
  },
  closeIcon: {
    fontSize: '48px',
    marginRight: '15px',
    cursor: 'pointer',
  },
  selectedSlide: {
    maxHeight: '50vh',
    maxWidth: '80vh',
    border: 'auto',
    margin: 'auto',
  },
  galleryImageContainer: {
    display: 'flex',
  },
  slideResource: {
    maxHeight: '80px',
    maxWidth: '100%',
    cursor: 'pointer',
    objectFit: 'scale-down',
    border: '5px solid #01bf71',
    padding: '5px',
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
        <Grid spacing={2} container className={classes.galleryModalContainer}>
          <Grid item>
            <div className={classes.displayContainer}>
              <CancelPresentationIcon
                className={classes.closeIcon}
                onClick={modalHandler}
              />
              {selectedSlideComp}
            </div>
          </Grid>
          <Grid
            item
            container
            spacing={5}
            xs={10}
            className={classes.galleryImageContainer}
          >
            {gallery.map((item) => {
              let slideItem =
                item.type === IMG_TYPE ? (
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

              return (
                <Grid item xs={4} sm={3} md={2}>
                  {slideItem}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/* <div >
          <div >
            
          </div>
        </div> */}
      </Fade>
    </Modal>
  );
};

export default GalleryModal;
