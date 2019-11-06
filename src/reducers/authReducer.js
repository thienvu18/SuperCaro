import { AuthActionTypes, AuthStatuses } from '../constants';

export default function(state = {}, action) {
	const { type, payload } = action;

	switch (type) {
		case AuthActionTypes.REGISTERING: {
			return { ...state, authStatus: AuthStatuses.REGISTERING };
		}
		case AuthActionTypes.REGISTERED: {
			return {
				...state,
				authStatus: AuthStatuses.REGISTERED,
			};
		}
		case AuthActionTypes.REGISTER_FAIL: {
			return { ...state, authStatus: AuthStatuses.REGISTER_FAIL };
		}
		case AuthActionTypes.LOGGING: {
			return { ...state, authStatus: AuthStatuses.LOGGING };
		}
		case AuthActionTypes.LOGGED: {
			return {
				...state,
				authStatus: AuthStatuses.LOGGED,
				...payload,
			};
		}
		case AuthActionTypes.LOGIN_FAIL: {
			return { ...state, authStatus: AuthStatuses.LOGIN_FAIL };
		}
		case AuthActionTypes.UPDATING: {
			return { ...state, authStatus: AuthStatuses.UPDATING };
		}
		case AuthActionTypes.UPDATED: {
			console.log(payload);
			return {
				...state,
				authStatus: AuthStatuses.UPDATED,
				...payload,
			};
		}
		case AuthActionTypes.UPDATE_FAIL: {
			return { ...state, authStatus: AuthStatuses.UPDATE_FAIL };
		}
		default:
			return state;
	}
}
