import React, { useState } from 'react';
import psStyle from './ps_style';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import ProductModal from './product_modal';
import ProductCard from './product_card';
import productData from './product_data';
import { Typography } from '@material-ui/core';
import ProductSnackbar from './product_snackbar';

const ProductsSection = () => {
  const psClasses = psStyle();

  const [openModal, toggleOpenModal] = useState(false);

  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

  const [selectedProduct, setProductIdx] = useState(-1);

  // For keeping track of expanded card and ensuring that
  // only 1 card can be expanded
  const [currentCard, setCurrentCard] = useState(0);
  const [isCardExpanded, setCardExpanded] = useState(false);

  const pdfMap = {};
  for (var i = 0; i < productData.length; i++) {
    pdfMap[i] = productData[i].pdfFile;
  }

  const openProductModal = (index) => {
    setProductIdx(index);
    toggleOpenModal(true);
  };

  const [swiper, setSwiper] = useState(null);
  const slideTo = (index) => { if (swiper) swiper.slideTo(index) };

  const onCardClick = (index) => {
    if (index !== currentCard) {
      slideTo(index);
      return;
    }
    setCardExpanded(!isCardExpanded);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const onOrderClick = () => {
    setSnackbarOpen(true);
  }

  const products = productData.map((item, index) => {
    return (
      <SwiperSlide tag="div" key={`slider-slide-${index}`}>
        <ProductCard
          cardImg={item.cardImg}
          title={item.title}
          description={item.description}
          expanded={isCardExpanded && currentCard === index}
          onCardClick={() => {
            onCardClick(index);
          }}
          openProductModal={() => openProductModal(index)}
          onOrderClick={onOrderClick}
        />
      </SwiperSlide>
    );
  });

  return (
    <div id="products" className={psClasses.productRoot}  >
      <ProductModal
        pdfFile={pdfMap[selectedProduct]}
        modalHandler={modalHandler}
        openModal={openModal}
      />
      <ProductSnackbar
        open={snackbarOpen}
        handleClose={() => setSnackbarOpen(false)}
      />

      <Typography className={psClasses.sectionHeader} variant="h4" component="h4" color="primary" >
        Our Products
      </Typography>
      <div className="expanding-collection expanding-collection-initialized" >
        <Swiper
          onSwiper={setSwiper}
          initialSlide={1}
          id="swiper-list"
          // tag="section"
          // wrapperTag="ul"
          // grabCursor={true}
          centeredSlides={true}
          // slidesPerView="auto"
          breakpoints={{
            "500": {
              "slidesPerView": 1.2,
            },
            "650": {
              "slidesPerView": 1.7,
            },
            "750": {
              "slidesPerView": 1.9,
            },
            "800": {
              "slidesPerView": 2.3,
            },
            "850": {
              "slidesPerView": 2.8,
            },
            "920": {
              "slidesPerView": 3.5,
            }
          }}
          // spaceBetween={10}
          coverflowEffect={{
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={(event) => { setCurrentCard(event.realIndex); }}
        >
          {products}
        </Swiper>
      </div>

    </div>
  );
};

export default ProductsSection;
