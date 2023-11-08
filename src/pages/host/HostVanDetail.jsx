import React from 'react';
import { useParams, Link, NavLink, Outlet, useLoaderData, defer, Await } from 'react-router-dom';
import { getVan } from '../../utils/api';
import VansModal from '../../components/VansModal';

export function loader({ params }) {
  return defer({ currentVan: getVan(params.id) });
}

export default function HostVanDetail() {
  // const { id } = useParams();
  // const [currentVan, setCurrentVan] = React.useState(null);
  const { currentVan } = useLoaderData();

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  // React.useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans));
  // }, []);

  // if (!currentVan) {
  //   return <h1>Loading...</h1>;
  // }
  const displayCurrentVan = (currentVan) => {
    return (
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          {/* <img src={currentVan.imageUrl} /> */}
          <VansModal van={currentVan} clsName={'host-van-id-img'} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink end to="." style={({ isActive }) => (isActive ? activeStyles : null)}>
            Details
          </NavLink>

          <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Pricing
          </NavLink>

          <NavLink to="photos" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Photos
          </NavLink>
        </nav>
        <Outlet context={currentVan} />
      </div>
    );
  };

  return (
    <>
      <section>
        <React.Suspense fallback={<h1>Loading..</h1>}>
          <Link to=".." relative="route" className="back-button">
            &larr; <span>Back to all vans</span>
          </Link>
          <Await resolve={currentVan}>{displayCurrentVan}</Await>
        </React.Suspense>
      </section>
    </>
  );
}
