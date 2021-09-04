import { createStore /* applyMiddleware */ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reduceres';

const store = createStore(rootReducer, composeWithDevTools());
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;
