import React from 'react';
import { Link } from "react-router-dom";
import '../css/item.css';

const Item = ({imgsrc = 'not/found'}) => {
  return (
    <div className="Item__container">
      <div className="item__box">
        <Link to="/singleItem">
          <img src={imgsrc} alt="car" className="item__img" />
        </Link>
      </div>
    </div>
  );
}

export default Item;
