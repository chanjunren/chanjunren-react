import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';

import './gallery.css';

import { makeStyles } from '@material-ui/core/styles';

const modalStyle = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // transform: 'scale(0.7)',
    transition:
      'opacity 0.4s ease, visibility 0.4s ease, transform 0.5s ease-in-out',
  },
  modalImg: {
    maxWidth: '80vh',
    objectFit: 'contain'
  }
}));
const ResponsiveGallery = (props) => {
  const { resources } = props;
  const classes = modalStyle();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRes, setCurrentRes] = useState('');

  const selectResource = (res) => {
    setCurrentRes(res);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <Modal className={classes.modal} open={modalVisible} onClose={closeModal}>
        <img className={classes.modalImg} src={currentRes} />
      </Modal>
      <div className="gallery-container">
        {resources.map((item, index) => {
          return (
            <div className="gallery-resource" key={index}>
              <img
                onClick={() => {
                  selectResource(item.src);
                }}
                src={item.src}
                style={{ width: '100%' }}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ResponsiveGallery;
