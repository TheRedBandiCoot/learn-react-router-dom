import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Pricing = () => {
  const { price } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${price}
      <span>/day</span>
    </h3>
  );
};

export default Pricing;
