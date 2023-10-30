import {
  React,
  Link,
  Route,
  Routes,
  Home,
  About,
  initialState,
  useScrollHandler,
  reducer,
  Vans,
  Layout,
  VansDetails,
  Dashboard,
  Review,
  Income,
  HostLayout,
  HostVans,
  HostVansDetails,
  Details,
  Photos,
  Pricing,
} from './utils/import';

function App() {
  const { state, handleNumber } = useScrollHandler(reducer, initialState);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*//@ Home  */}
          <Route index element={<Home />} />
          {/*//@ Vans */}
          <Route path="vans" element={<Vans vans={state.vans} />} />
          <Route path="vans/:id" element={<VansDetails />} />
          {/*//@ host  */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            {/*//@ host => vans */}
            <Route path="vans">
              <Route index element={<HostVans />} />
              {/*//@ host => vans => id */}
              <Route path=":id" element={<HostVansDetails />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
        {/*//* <Route path="/About" element={<About state={state} handleNumber={handleNumber} />} /> */}
        {/*//* <Route path="books" element={<h1>Books</h1>} /> */}
        {/*//* <Route path="books/1" element={<h1>Book One</h1>} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
