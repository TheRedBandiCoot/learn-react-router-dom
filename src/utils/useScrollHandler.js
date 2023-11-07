import React, { useEffect, useCallback, useReducer, useState } from 'react';
import { FETCH_DATA, SET_NUMBER } from './actions';
import '../servers/server';
import axios from 'axios';
import { scroll } from './utils';
import { getVans } from './api';
import { useLoaderData } from 'react-router-dom';

export function useScrollHandler(reducer, initialState) {
  // Use useReducer to manage the state
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     const {
  //       data: { vans },
  //     } = await axios.get('/api/vans');
  //     dispatch({ type: FETCH_DATA, payload: vans });
  //   } catch (error) {
  //     console.log('Error', error.message);
  //   }
  // };

  // Define the scrollFunc as a callback
  const scrollFunc = useCallback(() => {
    let s = Math.round(document.documentElement.scrollTop);
    scroll(s, dispatch, 500, 700);
  }, []);

  const handleNumber = (id) => {
    return () => {
      console.log(id);
      dispatch({ type: SET_NUMBER });
    };
  };

  // user data call
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const vans = await fetchData();
        dispatch({ type: FETCH_DATA, payload: vans });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Add and remove the event listener in useEffect
  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, [scrollFunc]);

  // Return the state and dispatch
  return { state, dispatch, handleNumber, loading, error };
}
