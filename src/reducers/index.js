import { combineReducers } from 'redux';
import GameReducers from './gameReducers';
import NavigationReducers from './navigationReducers';
import AuthReducers from './authReducer';

const reducers = combineReducers({
	game: GameReducers,
	route: NavigationReducers,
	auth: AuthReducers,
});

export default reducers;
