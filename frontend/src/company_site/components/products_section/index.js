import React, { useState } from 'react';
import psStyle from './ps_style';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StoreIcon from '@material-ui/icons/Store';

import './ps_style.css';
import ProductButtons from './product_buttons';
import ProductModal from './product_modal';
import steami_data from './products_data/steami_data';

const ProductsSection = () => {
  const psClasses = psStyle();

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

  const [selectedProduct, setProductIdx] = useState([]);
  const resourceMap = {};
  resourceMap[1] = steami_data;
  resourceMap[2] = null;
  const openProductModal = (index) => {
    toggleOpenModal(true);
    setProductIdx(index);
  };

  return (
    <div id="products" className={psClasses.productRoot}>
      <ProductModal
        resourceData={resourceMap[selectedProduct]}
        modalHandler={modalHandler}
        openModal={openModal}
      />
      <ProductButtons openProductModal={openProductModal} />
    </div>
  );
};

export default ProductsSection;
