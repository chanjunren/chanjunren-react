import React, { useState } from 'react';
import psStyle from './ps_style';

// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import StoreIcon from '@material-ui/icons/Store';
import ProductModal from './product_modal';
import steami_data from './products_data/steami_data';
import trs_data from './products_data/trs_data';
import ProductCard from './product_card';
import productData from './product_data';
import { Grid, Typography } from '@material-ui/core';

const ProductsSection = () => {
  const psClasses = psStyle();

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

  const [selectedProduct, setProductIdx] = useState([]);
  const resourceMap = {};
  resourceMap[0] = steami_data;
  resourceMap[1] = steami_data;
  resourceMap[2] = trs_data;
  resourceMap[3] = trs_data;
  resourceMap[4] = trs_data;
  resourceMap[5] = trs_data;
  resourceMap[6] = trs_data;
  
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
      <Typography className={psClasses.sectionHeader} variant="h4" component="h4" color="primary">
        Our Products
      </Typography>
      <Grid container spacing={3} className={psClasses.productsContainer}>
        {productData.map((item, index) => {
          return (
            <Grid className={psClasses.productCard} key={index} item xs={12} sm={6} md={4} lg={2}>
              <ProductCard
                cardImg={item.cardImg}
                title={item.title}
                description={item.description}
                onCardClick={() => {
                  openProductModal(index);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsSection;
