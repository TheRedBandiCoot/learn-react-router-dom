import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Pricing = () => {
  const data = useOutletContext();
  const recoverData = data?.[0];
  if (!recoverData) {
    return <h2>Loading...</h2>;
  }
  const { price } = recoverData;
  return <div>${price}/day</div>;
};

export default Pricing;
