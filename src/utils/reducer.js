import { FETCH_DATA, SET_COUNT, SET_NUMBER, SET_VALUE, SET_VALUE_TWO } from './actions';

export function reducer(state, { type, payload }) {
  if (type === FETCH_DATA) {
    return {
      ...state,
      vans: payload,
    };
  } else if (type === SET_VALUE) {
    return {
      ...state,
      value: payload,
    };
  } else if (type === SET_COUNT) {
    return {
      ...state,
      count: payload,
    };
  } else if (type === SET_VALUE_TWO) {
    return {
      ...state,
      valueTwo: payload,
    };
  } else if (type === SET_NUMBER) {
    return {
      ...state,
      number: state.number + 1,
    };
  }
}
