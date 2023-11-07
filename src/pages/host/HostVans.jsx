import React from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../utils/api';
import { requireAuth } from '../../utils/utils';

export async function loader({ request }) {
  // await requireAuth(request);

  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  // const [vans, setVans] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('/api/host/vans')
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  const { vans } = useLoaderData();

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {/* {vans.length > 0 ? <section>{hostVansEls}</section> : <h2>Loading...</h2>} */}
        <section>
          <React.Suspense fallback={<h1>loading...</h1>}>
            <Await resolve={vans}>
              {(vans) => {
                const hostVansEls = vans.map((van) => (
                  <Link to={van.id} key={van.id} className="host-van-link-wrapper">
                    <div className="host-van-single" key={van.id}>
                      <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                      <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                      </div>
                    </div>
                  </Link>
                ));

                return <>{hostVansEls}</>;
              }}
            </Await>
          </React.Suspense>
        </section>
      </div>
    </section>
  );
}
