import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    justifyItems: 'center',
    width: '80%',
    height: '200%',
  },
  exitButton: {
    marginTop: '10px',
  }
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const { openModal, modalHandler, pdfFile } = props;
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
          <iframe src={`${pdfFile}#view=fitH`} title='Specs' height="100%" width="100%" />
        </div>
      </Fade>
    </Modal>
  );
}
