import { redirect } from 'react-router-dom';
import { SET_COUNT, SET_VALUE, SET_VALUE_TWO } from './actions';

export function scroll(s, dispatch, low, high) {
  if (s > low && s < high) {
    dispatch({ type: SET_VALUE, payload: true });
    dispatch({ type: SET_COUNT, payload: s });
  }
  if (s < low) {
    dispatch({ type: SET_VALUE, payload: false });
    dispatch({ type: SET_COUNT, payload: 0 });
  }
  if (s > high) {
    dispatch({ type: SET_VALUE_TWO, payload: true });
  }
  if (s < high) {
    dispatch({ type: SET_VALUE_TWO, payload: false });
  }
}

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedin'));
  if (!isLoggedIn) {
    const res = redirect(`/login?message=You Must Login First&redirect=${pathname}`);
    res.body = true;
    return res;
  }
  return pathname;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
