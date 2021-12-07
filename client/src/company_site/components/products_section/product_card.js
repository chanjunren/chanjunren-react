import React from 'react';
import { Typography } from '@material-ui/core';
import Tokyo from './temp/tokyo.jpg';
import Avatar1 from './temp/avatar1.jpg';
import Avatar2 from './temp/avatar2.jpg';
import Avatar3 from './temp/avatar3.jpg';
import Avatar4 from './temp/avatar4.jpg';
import OrangeStar from './temp/star-orange.svg';
import GrayStar from './temp/star-gray.svg';

const ProductCard = (props) => {
  const { title, index, cardImg, description, onCardClick, expanded } = props;
  console.log(`INDEX: ${index}: ${expanded}`);
  const onCardTouch = (event) => {
    console.log('IM GETTING TOUCHED')
  }
  return (
    <div className={`expanding-collection-container${expanded ? ` expanding-collection-opened`:''}`} 
      onClick={onCardClick}>
      {/* <!-- Expanding collection content that opens underneath the cover image on click --> */}
      <div className="expanding-collection-content">
        <div className="expanding-collection-content-inner">
          {/* <!-- Put any required content here --> */}
          <div className="demo-content">
            <div className="demo-content-title">Jameson Street, CA90030</div>
            <div className="demo-content-avatars">
              <img src={Avatar1}/>
              <img src={Avatar2}/>
              <img src={Avatar3}/>
              <img src={Avatar4}/>
            </div>
            <div className="demo-content-rating">
              <img src={OrangeStar}/>
              <img src={OrangeStar}/>
              <img src={OrangeStar}/>
              <img src={OrangeStar}/>
              <img src={GrayStar}/>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Expanding collection cover, can contain any HTML content --> */}
      <div className="expanding-collection-cover">
        <img src={Tokyo}/>
        <div className="demo-cover-title">Tokyo</div>
        <div className="demo-cover-coords">
          <span>North LAT 36</span>
          <span>East LON 37</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;