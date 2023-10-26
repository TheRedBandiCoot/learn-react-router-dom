import React from 'react';
import { Link } from 'react-router-dom';

const Vans = ({ vans }) => {
  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
          {vans?.map((van) => {
            return (
              <div key={van.id} className="van-tile">
                <Link to={`/vans/${van.id}`}>
                  <img src={van.imageUrl} />
                  <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                      ${van.price}
                      <span>/day</span>
                    </p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Vans;
