import { SAMPLE_ACTION } from '../constants/appActions';

const initState = {
	title: 'React Redux Boilerplate',
	description: 'A boilerplate from creating new react/redux app!!!',
};

const app = (state = initState, action) => {
	const { type, newApp } = action;
	switch (type) {
		case SAMPLE_ACTION:
			return { ...newApp };
		default:
			return state;
	}
};

export default app;
