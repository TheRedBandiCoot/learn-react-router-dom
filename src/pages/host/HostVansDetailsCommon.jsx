import React from 'react';
import { Link } from 'react-router-dom';
export function HostVansDetailsCommon({ currentVan }) {
  return (
    <>
      <section>
        {/* <Link to=".." relative="path" className="back-button"> */}
        <Link to=".." className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        {currentVan ? (
          currentVan.map((currentVan, i) => {
            return (
              <div key={i} className="host-van-detail-layout-container">
                <div className="host-van-detail">
                  <img src={currentVan.imageUrl} />
                  <div className="host-van-detail-info-text">
                    <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>loading...</h2>
        )}
      </section>
      <nav className="host-nav">
        <Link to=".">Details</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photos">Photos</Link>
      </nav>
    </>
  );
}
