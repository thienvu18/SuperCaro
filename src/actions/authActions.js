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
			'https://ltw-1612827-restful.herokuapp.com/users/register',
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

const login = user => async (dispatch, getState) => {
	dispatch({
		type: AuthActionTypes.LOGGING,
	});
	try {
		const response = await axios.post(
			'https://ltw-1612827-restful.herokuapp.com/users/login',
			user
		);
		dispatch({
			type: AuthActionTypes.LOGGED,
			payload: {
				token: response.data.token,
				user: response.data.user,
			},
		});
	} catch (error) {
		dispatch({
			type: AuthActionTypes.LOGIN_FAIL,
			payload: {
				reason: error.response.data.message,
			},
		});
	}
};

const updateInfo = user => async (dispatch, getState) => {
	dispatch({
		type: AuthActionTypes.UPDATING,
	});

	try {
		const { auth } = getState();
		const formData = new FormData();
		formData.append('name', user.name);
		formData.append('email', user.email);
		formData.append('password', user.password);
		formData.append('avatar', user.avatar);

		const response = await axios.put(
			'https://ltw-1612827-restful.herokuapp.com/users/update',
			formData,
			{
				headers: {
					'content-type': 'multipart/form-data',
					Authorization: `Bearer ${auth.token}`,
				},
			}
		);

		const newuser = response.data;
		newuser.avatar =
			'https://ltw-1612827-restful.herokuapp.com/avatars/' +
			response.data.avatar;

		dispatch({
			type: AuthActionTypes.UPDATED,
			payload: {
				user: newuser,
			},
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: AuthActionTypes.UPDATE_FAIL,
			payload: {
				// reason: error.response.data.message,
			},
		});
	}
};

export default { register, login, updateInfo };
