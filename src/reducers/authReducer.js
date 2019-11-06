import { AuthActionTypes, AuthStatuses } from '../constants';

export default function(state = {}, action) {
	const { type, payload } = action;

	switch (type) {
		case AuthActionTypes.REGISTERING: {
			return { ...state, authStatus: AuthStatuses.REGISTERING };
		}
		case AuthActionTypes.REGISTERED: {
			return { ...state, authStatus: AuthStatuses.REGISTERED };
		}
		case AuthActionTypes.REGISTER_FAIL: {
			return { ...state, authStatus: AuthStatuses.REGISTER_FAIL };
		}
		default:
			return state;
	}
}
