import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>,
	document.getElementById('container')
);
