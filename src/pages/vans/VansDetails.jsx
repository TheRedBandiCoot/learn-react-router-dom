import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const VansDetails = () => {
  const param = useParams().id;
  const [van, setVans] = useState(null);

  const fetchVansIDData = useCallback(async () => {
    const {
      data: { vans },
    } = await axios.get(`/api/vans/${param}`);
    setVans(vans);
  }, []);

  useEffect(() => {
    fetchVansIDData();
  }, [param]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default VansDetails;
