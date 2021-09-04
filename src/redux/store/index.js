import { createStore, compose /* applyMiddleware */ } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reduceres';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
