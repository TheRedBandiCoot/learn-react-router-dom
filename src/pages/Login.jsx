import React from 'react';
import { Route, redirect, useLoaderData, useSearchParams } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';
import LoginForm from '../components/LoginForm';

export function loader({ request }) {
  // console.log('test login');
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedin'));
  // console.log('test login');
  const res = redirect("/host?message=You're already loggedin that's why redirect to Host");
  // res.body = true;
  if (isLoggedIn) return res;
  const msg = new URL(request.url).searchParams.get('message');
  const logoutMsg = new URL(request.url).searchParams.get('logoutMSG');
  return [msg || logoutMsg, logoutMsg];
}

const LoginWithSnackBar = () => {
  const [message, logoutMsg] = useLoaderData();
  const { enqueueSnackbar } = useSnackbar();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const msg = searchParams.get('message');

  React.useEffect(() => {
    if (message && logoutMsg) {
      enqueueSnackbar(message, { variant: 'info' });
    } else if (message) {
      enqueueSnackbar(message, { variant: 'warning' });
    }
  }, [message]);

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        iconVariant={{ info: '👋 ' }}
      >
        <LoginForm />
      </SnackbarProvider>
    </div>
  );
};

function Login({}) {
  return (
    <SnackbarProvider maxSnack={1} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <LoginWithSnackBar />
    </SnackbarProvider>
  );
}

export default Login;
