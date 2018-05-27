export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SUBTRACT = 'SUBTRACT';
export const ADD = 'ADD';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const subtract = value => {
  return { type: SUBTRACT, val: value };
};
export const add = value => {
  return { type: ADD, val: value };
};
export const storeResult = result => {
  return { type: STORE_RESULT, result: result };
};
export const deleteResult = result => {
  return { type: DELETE_RESULT, result: result };
};
