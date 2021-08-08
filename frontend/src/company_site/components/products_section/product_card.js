import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

const cardStyle = makeStyles((theme) => ({
  
}));

const ProductCard = (product, idx) => {
  const cardClasses = cardStyle();
  console.log(product.index);
  return (
    <SwiperSlide tag="li" key={`slider-slide-${product.index}`}>
      <div className={cardClasses.productCard}>
        <img
          className={cardClasses.productImg}
          src={product.imageSrc}
          alt={`${product.title}-imageSrc`}
        />
        <Typography className={cardClasses.cardTitle} variant="h2">
          {product.title}
        </Typography>
        <Typography className={cardClasses.cardDescription} variant="body1">
          {product.description}
        </Typography>
      </div>
    </SwiperSlide>
  );
};

export default ProductCard;
