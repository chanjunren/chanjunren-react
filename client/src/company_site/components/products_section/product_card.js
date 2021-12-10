import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Tokyo from './temp/tokyo.jpg';
import Avatar1 from './temp/avatar1.jpg';
import Avatar2 from './temp/avatar2.jpg';
import Avatar3 from './temp/avatar3.jpg';
import Avatar4 from './temp/avatar4.jpg';
import OrangeStar from './temp/star-orange.svg';
import GrayStar from './temp/star-gray.svg';

import './product_card.css';

const ProductCard = (props) => {
  const { title, index, cardImg, description, onCardClick, expanded } = props;
  return (
    <div className='expanding-collection-container' 
      onClick={onCardClick}>
      {/* <!-- Expanding collection content that opens underneath the cover image on click --> */}
      <div className={`expanding-collection-content${expanded ? 
      ` content-expanded`:' content-minimized'}`}>
        <div className="expanding-collection-content-inner">
          <div className="demo-content">
            <Button color="secondary" variant="outlined">
              View Demo
            </Button>
          </div>
        </div>
      </div> 
      {/* <!-- Expanding collection cover, can contain any HTML content --> */}
      <div className={`expanding-collection-cover${expanded ? 
      ` cover-opened`:' cover-closed'}`}>
        <img src={Tokyo}/>
        <div className="demo-cover-title">{title}</div>
        <div className="demo-cover-coords">
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;