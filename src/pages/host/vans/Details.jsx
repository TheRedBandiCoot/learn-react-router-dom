import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Details = () => {
  const data = useOutletContext();
  const recoverData = data?.[0];
  if (!recoverData) {
    return <h2>Loading...</h2>;
  }
  const { name, description, type } = recoverData;
  return (
    <div>
      <h1>Details</h1>
      <h3>Name : {name}</h3>
      <p>
        <b>Description :</b>
        <span>{description}</span>
      </p>
      <p>
        <b>Category :</b>
        <span>{type}</span>
      </p>
    </div>
  );
};

export default Details;
