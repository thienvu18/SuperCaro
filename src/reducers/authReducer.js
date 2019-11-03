import { GameActionTypes, PlayerTypes, CellTypes } from '../constants';

function makeInitState() {
	return {
		// user: {
		// 	avatar:
		// 		'http://www.gravatar.com/avatar/7da6eed3125ce42e7490c5bf9f7566a8?s=100&d=mm',
		// },
	};
}

export default function(state = makeInitState(), action) {
	const { type, payload } = action;

	switch (type) {
		case GameActionTypes.EMPTY_CELL_CLICK: {
			const board = [...state.board];
			let nextPlayer;

			if (state.nextPlayer === PlayerTypes.PLAYER_O) {
				board[payload.index] = CellTypes.O;
				nextPlayer = PlayerTypes.PLAYER_X;
			} else if (state.nextPlayer === PlayerTypes.PLAYER_X) {
				board[payload.index] = CellTypes.X;
				nextPlayer = PlayerTypes.PLAYER_O;
			}

			return { ...state, board, nextPlayer };
		}

		default:
			return state;
	}
}
