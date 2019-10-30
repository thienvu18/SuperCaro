import { SAMPLE_ACTION } from '../constants/appActions';

const updateTestMessage = () => (dispatch, getState) => {
	const { title, description } = getState().app;
	const newApp = {
		title: `${title} with Thunk`,
		description: `${description}\nIncluding Thunk for asyc actions!!!`,
	};
	dispatch({ type: SAMPLE_ACTION, newApp });
};

const testReduxThunk = () => dispatch => {
	setTimeout(() => {
		dispatch(updateTestMessage());
	}, 2000);
};

export { testReduxThunk };
