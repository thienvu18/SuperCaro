import { combineReducers } from 'redux';
import GameReducer from './gameReducers';

const reducers = combineReducers({
	game: GameReducer,
});

export default reducers;
