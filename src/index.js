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
import {
	Routes,
	PlayerTypes,
	GameTypes,
	CellTypes,
	ResetActionTypes,
} from './constants';

const initState = {
	auth: {
		authStatus: null,
	},
	game: {
		board: Array(225).fill(CellTypes.EMPTY),
		type: GameTypes.PLAY_WITH_COMPUTER,
		nextPlayer: PlayerTypes.PLAYER_X,
		moveCounter: 0,
	},
	route: Routes.LOGIN,
};

const rootReducer = (state = initState, action) => {
	if (action.type === ResetActionTypes.RESET_REGISTER) {
		return reducers({ ...state, auth: initState.auth }, action);
	}

	return reducers(state, action);
};

const store = createStore(
	rootReducer,
	initState,
	applyMiddleware(thunk, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>,
	document.getElementById('container')
);
