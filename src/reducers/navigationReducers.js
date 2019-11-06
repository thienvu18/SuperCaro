import { NavigationActionTypes, Routes } from '../constants';

export default function(state = Routes.LOGIN, action) {
	const { type } = action;

	switch (type) {
		case NavigationActionTypes.LOGIN: {
			return Routes.LOGIN;
		}
		case NavigationActionTypes.UPDATE_INFO: {
			return Routes.UPDATE_INFO;
		}
		case NavigationActionTypes.IN_GAME: {
			return Routes.IN_GAME;
		}
		case NavigationActionTypes.GAME_SELECT: {
			return Routes.GAME_SELECTOR;
		}
		case NavigationActionTypes.REGISTER: {
			return Routes.REGISTER;
		}

		default:
			return state;
	}
}
