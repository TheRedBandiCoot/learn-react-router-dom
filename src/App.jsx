//@ React lib
import React from 'react';
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  Routes,
  Outlet,
  redirect,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
// import './servers/server';

//@ components
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Error from './components/Error';
import { action as loginAction } from './components/LoginForm';

//@ utils
import { useScrollHandler } from './utils/useScrollHandler';
import { reducer } from './utils/reducer';
import { initialState } from './utils/initialState';
import { requireAuth } from './utils/utils';

//@ Pages
import Home from './pages/Home';
import About from './pages/About';
import Login, { loader as loginLoader } from './pages/Login';
import NotFound from './pages/NotFound';

//@ Pages => vans
import Vans, { loader as vansLoader } from './pages/vans/Vans';
import VanDetail, { loader as vansDetailsLoader } from './pages/vans/VanDetail';

//@ Pages => host
import Dashboard, { loader as dashboardLoader } from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Review from './pages/host/Review';
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans';
import HostVanDetail, { loader as hostVansDetailsLoader } from './pages/host/HostVanDetail';

//@ Pages => host => vans
import Details from './pages/host/vans/Details';
import Photos, { loader as photoLoader } from './pages/host/vans/Photos';
import Pricing from './pages/host/vans/Pricing';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/vans',
//     element: <Vans />,
//   },
//   {
//     path: '/photos',
//     element: <h1>Photos</h1>,
//   },
// ]);

function App() {
  // const { state, loading, error } = useScrollHandler(reducer, initialState);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/*//@ Home */}
        <Route index element={<Home />} />
        {/*//@ Login */}
        <Route
          path="login"
          errorElement={<Error />}
          action={loginAction}
          element={<Login />}
          loader={loginLoader}
        />
        {/*//@ Vans */}
        <Route
          path="vans"
          element={
            <SnackbarProvider
              maxSnack={1}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              iconVariant={{ info: '👋 ' }}
            >
              <Vans />
            </SnackbarProvider>
          }
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path="vans/:id" errorElement={<Error />} element={<VanDetail />} loader={vansDetailsLoader} />
        {/*//@ Host */}
        <Route
          path="host"
          loader={async ({ request }) => await requireAuth(request)}
          element={<HostLayout />}
          errorElement={<Error />}
        >
          <Route
            index
            element={
              <SnackbarProvider
                maxSnack={1}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                iconVariant={{ info: '🎉 ' }}
              >
                <Dashboard />
              </SnackbarProvider>
            }
            loader={dashboardLoader}
            errorElement={<Error />}
          />

          {/* <Route element={<CheckIncome />}> */}
          <Route path="income" element={<Income />} />
          {/* </Route> */}

          <Route path="review" element={<Review />} />
          {/*//@ host => vans */}
          <Route path="vans">
            <Route loader={hostVansLoader} index errorElement={<Error />} element={<HostVans />} />
            {/*//@ host => vans => id */}
            <Route
              loader={hostVansDetailsLoader}
              path=":id"
              errorElement={<Error />}
              element={<HostVanDetail />}
            >
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" loader={photoLoader} element={<Photos />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
      //* <Route path="/About" element={<About state={state} handleNumber={handleNumber} />} />
      //* <Route path="books" element={<h1>Books</h1>} />
      //* <Route path="books/1" element={<h1>Book One</h1>} />
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

function CheckIncome() {
  return <Navigate to="/host/review" />;
}
