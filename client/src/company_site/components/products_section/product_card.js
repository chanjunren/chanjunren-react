import React from 'react';
import { Button, Typography } from '@material-ui/core';
import './product_card.css';

const ProductCard = (props) => {
  const { title, openProductModal, cardImg, description, onCardClick, expanded } = props;
  return (
    <div className='expanding-collection-container' 
      onClick={onCardClick}>
      {/* <!-- Expanding collection content that opens underneath the cover image on click --> */}
      <div className={`expanding-collection-content${expanded ? 
      ` content-expanded`:' content-minimized'}`}>
        <div className="expanding-collection-content-inner">
          <div className="demo-content">
            <Button color="secondary" variant="outlined" onClick={openProductModal}>
              View Demo
            </Button>
          </div>
        </div>
      </div> 
      {/* <!-- Expanding collection cover, can contain any HTML content --> */}
      <div className={`expanding-collection-cover${expanded ? 
      ` cover-opened`:' cover-closed'}`}>
        <div className="image-holder">
          <img src={cardImg} alt={`${title}`}/>
        </div>
        {/* <Typography className="demo-cover-title">{title}</Typography>
        <Typography className="demo-cover-coords">{description}</Typography> */}
        <div className="demo-cover-title">{title}</div>
        <div className="demo-cover-coords">
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;