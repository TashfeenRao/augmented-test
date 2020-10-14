import React from 'react';
import '../css/item.css';

const Item = ({imgsrc = 'not/found'}) => {
  return (
    <div className="Item__container">
      <div className="item__box">
        <img src={imgsrc} alt="car" className="item__img"></img>
      </div>
    </div>
  );
}

export default Item;
