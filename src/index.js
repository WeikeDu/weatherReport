// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import allReducers from './reducers';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise-middleware';

const logger = createLogger();
const middleware = applyMiddleware(promise(),thunk,logger)
const store = createStore(allReducers, middleware);





ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
  document.getElementById('root')
);