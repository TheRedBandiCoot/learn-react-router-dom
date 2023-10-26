import { useEffect, useCallback, useReducer } from 'react';
import { FETCH_DATA, SET_NUMBER } from './actions';
import '../servers/server';
import axios from 'axios';
import { scroll } from './utils';

export function useScrollHandler(reducer, initialState) {
  // Use useReducer to manage the state
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const {
        data: { vans },
      } = await axios.get('/api/vans');
      dispatch({ type: FETCH_DATA, payload: vans });
    } catch (error) {
      console.log('Error', error.message);
    }
  };

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
    fetchData();
  }, []);

  // Add and remove the event listener in useEffect
  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, [scrollFunc]);

  // Return the state and dispatch
  return { state, dispatch, handleNumber };
}
