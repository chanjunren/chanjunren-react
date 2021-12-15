import React from 'react';
import { Button } from '@material-ui/core';
import Tokyo from './temp/tokyo.jpg';
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
        <img src={Tokyo} alt={`${title}`}/>
        <div className="demo-cover-title">{title}</div>
        <div className="demo-cover-coords">
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;