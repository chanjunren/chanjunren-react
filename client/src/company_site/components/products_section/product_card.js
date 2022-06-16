import React from 'react';
import { Button } from '@material-ui/core';
import './product_card.css';

const ProductCard = (props) => {
  const { index, title, openProductModal, cardImg, description, onCardClick, expanded } = props;
  return (
    <div className='expanding-collection-container'
      onClick={onCardClick}>
      {/* <!-- Expanding collection content that opens underneath the cover image on click --> */}
      <div className={`expanding-collection-content${expanded ?
        ` content-expanded` : ' content-minimized'}`}>
        <div className="expanding-collection-content-inner">
          <div className="demo-content">
            {index === 0
              ? <Button className="product-button" color="secondary" variant="outlined"
                  href="https://www.robotemi.sg/" target="_blank">
                View
              </Button>
              : <Button className="product-button" color="secondary" variant="outlined" onClick={openProductModal}>
                View
              </Button>
            }
            {/* <Button className="product-button" color="secondary" variant="outlined">
              Specs
            </Button> */}
            <Button className="product-button" color="secondary" variant="contained" onClick={()=> window.location = `mailto:enquiries@robosolutions.sg`
            }>
              Order 
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- Expanding collection cover, can contain any HTML content --> */}
      <div className={`expanding-collection-cover${expanded ?
        ` cover-opened` : ' cover-closed'}`}>
        <div className="image-holder">
          <img src={cardImg} alt={`${title}`} />
        </div>
        <div className="demo-cover-title">{title}</div>
        <div className="demo-cover-coords">
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;