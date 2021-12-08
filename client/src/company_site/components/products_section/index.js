import React, { useState } from 'react';
import psStyle from './ps_style';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import ProductModal from './product_modal';
import steami_data from './products_data/steami_data';
import trs_data from './products_data/trs_data';
import ProductCard from './product_card';
import productData from './product_data';
import { Typography } from '@material-ui/core';

const ProductsSection = () => {
  const psClasses = psStyle();

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

  const [selectedProduct, setProductIdx] = useState([]);
  const resourceMap = {};

  // For keeping track of expanded card and ensuring that
  // only 1 card can be expanded
  const [currentCard, setCurrentCard] = useState(0);
  const [isCardExpanded, setCardExpanded] = useState(false);

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

  const onCardClick = (index) => {
    console.log("Card clicked!");
    if (index != currentCard) {
      return;
    }
    setCardExpanded(!isCardExpanded);
  };
  {
    
  }

  const products = productData.map((item, index) => {
    return (
      <SwiperSlide tag="div" key={`slider-slide-${index}`}>
        <ProductCard
          index={index}
          cardImg={item.cardImg}
          title={item.title}
          description={item.description}
          expanded={isCardExpanded && currentCard == index}
          onCardClick={() => {
            onCardClick(index);
          }}
        />
      </SwiperSlide>
    );
  });

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
      <div className="expanding-collection expanding-collection-initialized">
        <Swiper
          id="swiper-list"
          // tag="section"
          // wrapperTag="ul"
          centeredSlides={true}
          // grabCursor={true}
          slidesPerView={2}
          // spaceBetween={10}
          coverflowEffect={{
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={(event) => { setCurrentCard(event.realIndex);}}
        >
          {products}
        </Swiper>
      </div>
      
    </div>
  );
};

export default ProductsSection;
