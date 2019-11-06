import { GameActionTypes, GameResults } from '../constants';

export default function(state = {}, action) {
	const { type, payload } = action;

	switch (type) {
		case GameActionTypes.SOMEONE_PLAYED: {
			return {
				...state,
				board: payload.board,
				nextPlayer: payload.nextPlayer,
				moveCounter: payload.moveCounter,
			};
		}

		case GameActionTypes.RESULT_DRAW: {
			return {
				...state,
				result: GameResults.DRAW,
			};
		}

		case GameActionTypes.RESULT_WIN: {
			return {
				...state,
				result: GameResults.WIN,
				winRow: payload.winRow,
				winner: payload.winner,
			};
		}

		default:
			return state;
	}
}
