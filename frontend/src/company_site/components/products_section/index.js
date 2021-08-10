import React from 'react';
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
            // pagination={pagination}
          >
            {productCards}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={psClasses.currentItem}>
            <Typography variant="h2" className={psClasses.itemTitle}>
              Item Title
            </Typography>
            <Typography variant="body1" className={psClasses.itemDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsSection;
