import React, { useState } from 'react';
import psStyle from './ps_style';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StoreIcon from '@material-ui/icons/Store';

import './ps_style.css';
import ProductButtons from './product_buttons';
import ProductModal from './product_modal';

const ProductsSection = () => {
  const psClasses = psStyle();

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };
  const allSlides = [1, 2, 3];
  const [slides, setSlides] = useState([]);

  const openProductModal = (index) => {
    toggleOpenModal(true);
    console.log(allSlides[index]);
  };

  return (
    <div id="products" className={psClasses.root}>
      <ProductModal modalHandler={modalHandler} openModal={openModal} />
      <ProductButtons openProductModal={openProductModal} />
    </div>
  );
};

export default ProductsSection;
