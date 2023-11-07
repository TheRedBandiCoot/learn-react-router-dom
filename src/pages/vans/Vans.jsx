import React, { Suspense } from 'react';
import {
  Await,
  Link,
  NavLink,
  defer,
  renderMatches,
  useLoaderData,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { getVans } from '../../utils/api';
import { enqueueSnackbar } from 'notistack';

export async function loader({ params, request }) {
  try {
    const vansPromise = getVans();
    return defer({ vans: vansPromise });
  } catch (error) {
    return null;
  }
}

// const Vans = ({ vans, loading, error }) => {
const Vans = ({}) => {
  // const [vans, setVans] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(false);
  const { vans } = useLoaderData();

  const { state } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const styleLink = {
    marginBottom: '1.5rem',
  };

  const genNewSearchParamString = (key, value) => {
    const sp = new URLSearchParams(searchParams);
    if (value == null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  };

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParam) => {
      if (value == null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, value);
      }
      return prevParam;
    });
  };

  // ! useEffect
  // React.useEffect(() => {
  //   // setSearchParams('?name=bob');
  //   (async () => {
  //     setLoading(true);
  //     try {
  //       const vans = await vansData;
  //       setVans(vans);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //       console.log(vansData);
  //     }
  //   })();
  // }, []);

  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>{error}</h1>;
  // throw new Error('Error Testing from Vans Component');

  // React.useEffect(() => {
  //   if (!state) return;
  //   enqueueSnackbar(`Hello ${state}`, { variant: 'info', autoHideDuration: 1000 });
  // }, [state]);

  // return null;

  function renderVanElements(vans) {
    const DisplayFilteredVans = typeFilter
      ? vans?.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans;

    const filteredVan = ['All', ...new Set(vans?.map((van) => van.type))];
    return (
      <>
        <div className="filtered-van">
          {/* {filteredVan.length > 1 ? (
          filteredVan?.map((van, i) => (
            <NavLink
              to={`${i == 0 ? '.' : `?type=${van}`}`}
              className={`van-type selected ${i == 0 ? 'all' : `${van} van-filter`}`}
              key={i}
            >
              {van}
            </NavLink>
          ))
        ) : (
          <h2>loading...</h2>
        )} */}

          {/* {filteredVan.length > 1 ? (
         
         filteredVan?.map((van, i) => (
            <NavLink
              to={i == 0 ? genNewSearchParamString('type', null) : genNewSearchParamString('type', `${van}`)}
              className={`van-type selected ${i == 0 ? 'all' : `${van} van-filter`}`}
              key={i}
            >
              {van}
            </NavLink>
          ))
        ) : (
          <h2>loading...</h2>
        )} */}

          {/* {filteredVan.length > 1 ? (
          filteredVan?.map((van, i) => (
            <button
              // to={`${i == 0 ? '.' : `?type=${van}`}`}
              onClick={i == 0 ? () => setSearchParams({}) : () => setSearchParams({ type: `${van}` })}
              className={`van-type selected ${i == 0 ? 'all' : `${van} van-filter`}`}
              key={i}
            >
              {van}
            </button>
          ))
        ) : (
          <h2>loading...</h2>
        )} */}

          {
            // filteredVan.length > 1 ? (
            filteredVan?.map((van, i) => {
              if (i == 0 && !typeFilter) return null;
              return (
                <button
                  onClick={
                    i == 0
                      ? () => handleFilterChange('type', null)
                      : () => handleFilterChange('type', `${van}`)
                  }
                  className={`van-type  ${
                    i == 0 ? 'all ' : `${van} ${typeFilter === van ? 'selected' : ''} van-filter`
                  }`}
                  key={i}
                >
                  {van}
                </button>
              );
            })
            // ) : (
            //   <h2>loading...</h2>
            // )
          }
        </div>
        <div className="van-list">
          {DisplayFilteredVans?.map((van) => {
            return (
              <div key={van.id} className="van-tile">
                <NavLink
                  className="van-tile-link"
                  to={van.id}
                  state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
                >
                  <img src={van.imageUrl} />
                  <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                      ${van.price}
                      <span>/day</span>
                    </p>
                  </div>
                </NavLink>
                <Link to={`?type=${van.type}`}>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1 style={styleLink}>Explore our van options</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
};

export default Vans;
