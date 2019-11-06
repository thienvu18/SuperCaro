import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import CssBaseline from '@material-ui/core/CssBaseline';
import dotenv from 'dotenv';

import App from './app';
import reducers from './reducers';
import {
	Routes,
	PlayerTypes,
	GameTypes,
	CellTypes,
	ResetActionTypes,
} from './constants';
import { Loading } from './views';

dotenv.config();

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
const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, initState, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<PersistGate loading={<Loading />} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('container')
);
