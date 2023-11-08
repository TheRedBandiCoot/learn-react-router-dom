import React from 'react';
import { Await, Link, NavLink, defer, useLoaderData } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { getHostVans } from '../../utils/api';
import { BsStarFill } from 'react-icons/bs';

export async function loader({ request }) {
  try {
    const username = await new URL(request.url).searchParams.get('username');
    const msg = await new URL(request.url).searchParams.get('message');
    // return [username || msg, msg]
    return defer({
      vans: getHostVans(),
      username: username || msg,
      msg,
    });
  } catch (error) {
    return null;
  }
}

const Dashboard = ({ userData }) => {
  const { username, msg, vans } = useLoaderData();
  React.useEffect(() => {
    if (!username) return;
    enqueueSnackbar(`${msg ? '' : 'Congratulation you are login now,'} ${username}`, {
      variant: 'info',
      autoHideDuration: 5000,
    });
  }, [username]);

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <section className="host-dashboard">
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={vans}>{renderVanElements}</Await>
        </React.Suspense>
      </section>
      <NavLink
        className="logout"
        onClick={() => {
          localStorage.setItem('loggedin', JSON.stringify(false));
        }}
        to="/login?logoutMSG=You Just Logged Out"
      >
        Logout
      </NavLink>
    </section>
  );
};

export default Dashboard;
