import React from 'react';
import productsData from './products_data';
import psStyle from './ps_style';

import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Typography from '@material-ui/core/Typography';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper/core';
SwiperCore.use([Pagination, EffectCoverflow]);

const ProductsSection = () => {
  const psClasses = psStyle();
  const productCards = productsData.map((product, index) => (
    <SwiperSlide className={psClasses.swiperSlide} tag="li" key={`slider-slide-${index}`}>
      <div className={psClasses.productCard}>
        <img
          className={psClasses.productImg}
          src={product.imageSrc}
          alt={`${product.title}-imageSrc`}
        />
        <Typography className={psClasses.cardTitle} variant="h4">
          {product.title}
        </Typography>
        <Typography className={psClasses.cardDescription} variant="body1">
          {product.description}
        </Typography>
      </div>
    </SwiperSlide>
  ));
  return (
    <div id="products" className={psClasses.root}>
      <Swiper
        id="swiper-list"
        tag="section"
        wrapperTag="ul"
        centeredSlides={true}
        grabCursor={true}
        direction={'horizontal'}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination
      >
        {productCards}
      </Swiper>
    </div>
  );
};

export default ProductsSection;
