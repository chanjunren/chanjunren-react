import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productModal: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  },
  paper: {
    backgroundColor: '#000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  resource: {
    borderRadius: '10px',
    maxWidth: '100%',
  },
  modalContent: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  },
  exitButton: {
    marginTop: '10px',
  }
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const { openModal, modalHandler, resourceData } = props;
  console.log(props);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.productModal}
      open={openModal}
      onClose={modalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div className={classes.modalContent}>
          <ReactPlayer
            className={classes.resource}
            controls
            playing
            url={resourceData}
          />
          <Button className={classes.exitButton} onClick={modalHandler}>Exit</Button>

        </div>
        
      </Fade>
    </Modal>
  );
}
