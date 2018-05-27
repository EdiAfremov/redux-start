import * as actionTypes from '../actions/actions';

const initailState = {
  results: []
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
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
