import * as actionTypes from '../store/actions/actions';

const initailState = {
  counter: 0,
  results: []
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 5
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 5
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      const updated = state.results.filter(result => result.id !== action.id);
      return {
        ...state,
        results: updated
      };
    default:
      return state;
  }
};

export default reducer;
