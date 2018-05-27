import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer
});

//middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[midlleware] dispatching', action);
      const result = next(action);
      console.log('[midlleware] dispatching', store.getState());
      return result;
    };
  };
};
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
