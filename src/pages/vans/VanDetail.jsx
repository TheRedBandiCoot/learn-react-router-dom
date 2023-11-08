import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { NavLink, useParams, useLocation, useLoaderData, defer, Await } from 'react-router-dom';
// import VansModal from './VansModal';
import { getVan } from '../../utils/api';
import VansModal from '../../components/VansModal';

export function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

const VanDetail = () => {
  // const param = useParams().id;
  const location = useLocation();
  const { van } = useLoaderData();
  // const [van, setVans] = useState(null);

  // const fetchVansIDData = useCallback(async () => {
  //   const {
  //     data: { vans },
  //   } = await axios.get(`/api/vans/${param}`);
  //   setVans(vans);
  // }, []);

  // useEffect(() => {
  //   fetchVansIDData();
  //   // console.log(search);
  // }, [param]);

  const search = location.state?.search || '';
  const type = location.state?.type || 'All';

  const displayVan = (van) => {
    return (
      <>
        <VansModal van={van} />

        <div className="van-float-right">
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      </>
    );
  };

  return (
    <div className="van-detail-container">
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <NavLink relative="path" to={`..${search}`} className="back-button rm-ml">
          &larr; <span>Back To {type} Vans</span>
        </NavLink>
        {/* {van ? ( */}
        <div className="van-detail">
          <Await resolve={van}>{displayVan}</Await>
        </div>

        {/* ) : (
        <h2>loading...</h2>
      )} */}
      </React.Suspense>
    </div>
  );
};

export default VanDetail;
