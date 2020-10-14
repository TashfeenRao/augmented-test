import React from 'react';
import './css/main.css';
import Item from './items/Item';
import car1 from '../imgaes/dhiva-krishna-GRV4ypBKgxE-unsplash.jpg';
import car2 from '../imgaes/goldie-a-DkMliTo7NqA-unsplash.jpg';

const Main = () => {
  return (
    <div className="Main__container">
      <Item imgsrc={car1} />
      <Item imgsrc={car2}  />
    </div>
  );
}

export default Main;
