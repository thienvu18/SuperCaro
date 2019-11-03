import { GameActionTypes, PlayerTypes } from '../constants';
import { CellTypes } from '../constants';

function makeInitState() {
	const board = Array(225).fill(CellTypes.EMPTY);
	return {
		board,
		nextPlayer: PlayerTypes.PLAYER_X,
	};
}

const app = (state = makeInitState(), action) => {
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
};

export default app;
