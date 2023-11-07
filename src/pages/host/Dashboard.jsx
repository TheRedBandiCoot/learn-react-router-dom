import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

export async function loader({ request }) {
  try {
    const username = await new URL(request.url).searchParams.get('username');
    const msg = await new URL(request.url).searchParams.get('message');
    return [username || msg, msg];
  } catch (error) {
    return null;
  }
}

const Dashboard = ({ userData }) => {
  const [username, msg] = useLoaderData();
  React.useEffect(() => {
    if (!username) return;
    enqueueSnackbar(`${msg ? '' : 'Congratulation you are login now,'} ${username}`, {
      variant: 'info',
      autoHideDuration: 5000,
    });
  }, [username]);

  return (
    <div className="host-dashboard">
      <h1 style={{ color: 'white' }}>
        {userData || ''} Dashboard : Css color <b>white</b> add in <b>Dark mode</b> change it to <b>black</b>{' '}
        in <b>light mode</b>
      </h1>
      <NavLink
        className="logout"
        onClick={() => {
          localStorage.setItem('loggedin', JSON.stringify(false));
        }}
        to="/login?logoutMSG=You Just Logged Out"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Dashboard;
