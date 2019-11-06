import axios from 'axios';
import { AuthActionTypes } from '../constants';

function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

const register = user => async (dispatch, getState) => {
	dispatch({
		type: AuthActionTypes.REGISTERING,
	});
	try {
		const response = await axios.post(
			'http://localhost:3000/users/register',
			user
		);
		dispatch({
			type: AuthActionTypes.REGISTERED,
			payload: {
				registerdUser: response.data,
			},
		});
	} catch (error) {
		dispatch({
			type: AuthActionTypes.REGISTER_FAIL,
			payload: {
				reason: error,
			},
		});
	}
};

export default { register };
