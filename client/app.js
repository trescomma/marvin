import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
import { applyMiddleware, createStore } from 'redux';
import routes from './routes';
import reducers from './reducers';
import createLogger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);

let store = createStoreWithMiddleware(reducers);

ReactStormpath.init({
  // Optional: Set if you want to use your own dispatcher or configure one such as 'redux'.
  // When no dispatcher is set, the default is 'flux'.
  dispatcher: {
    // Optional: Can either be 'flux' or 'redux'. Defaults to 'flux'.
    type: 'redux',

    // Required when you use type 'redux'.
    // The store that you wish to dispatch events to.
    store: store
  }

});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>

  , document.getElementById('app'));
