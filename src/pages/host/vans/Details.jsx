import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Details = () => {
  const { name, description, type } = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name : <span>{name}</span>
      </h4>
      <h4>
        Category : <span>{type}</span>
      </h4>
      <h4>
        Description : <span>{description}</span>
      </h4>
      <h4>
        Visibility: <span>public</span>
      </h4>
    </section>
  );
};

export default Details;
