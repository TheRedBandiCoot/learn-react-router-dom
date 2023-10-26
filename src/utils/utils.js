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
