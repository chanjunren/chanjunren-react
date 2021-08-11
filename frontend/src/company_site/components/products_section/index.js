import React, { useState } from 'react';
import productsData from './products_data';
import psStyle from './ps_style';

import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StoreIcon from '@material-ui/icons/Store';

import './ps_style.css';

SwiperCore.use([EffectCoverflow]);

const ProductsSection = () => {
  const psClasses = psStyle();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideChangeHandler = (event) => {
    setCurrentIndex(event.activeIndex);
  }
  const productCards = productsData.map((product, index) => (
    <SwiperSlide
      tag="li"
      key={`slider-slide-${index}`}
    >
      <div className={psClasses.productCard}>
        <img
          className={psClasses.productImg}
          src={product.imageSrc}
          alt={`${product.title}-imageSrc`}
        />
      </div>
    </SwiperSlide>
  ));
  return (
    <div id="products" className={psClasses.root}>
      <Grid container direction="row-reverse">
        <Grid item xs={12} sm={6}>
          <Swiper
            id="swiper-list"
            tag="section"
            wrapperTag="ul"
            centeredSlides={true}
            grabCursor={true}
            effect={'coverflow'}
            direction={'horizontal'}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            onSlideChange={slideChangeHandler}
            // pagination={pagination}
          >
            {productCards}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={psClasses.currentItem}>
            <Typography variant="h2" className={psClasses.itemTitle}>
              {productsData[currentIndex].title}
            </Typography>
            <Typography variant="body1" className={psClasses.itemDescription}>
            {productsData[currentIndex].description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsSection;
