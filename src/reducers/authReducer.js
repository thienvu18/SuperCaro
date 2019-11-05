import { GameActionTypes, PlayerTypes, CellTypes } from '../constants';

function makeInitState() {
	return {
		user: {
			avatar:
				'http://www.gravatar.com/avatar/7da6eed3125ce42e7490c5bf9f7566a8?s=100&d=mm',
		},
	};
}

export default function(state = makeInitState(), action) {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
}
