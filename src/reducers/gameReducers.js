import {
	GameActionTypes,
	PlayerTypes,
	CellTypes,
	GameTypes,
	GameResults,
} from '../constants';

function makeInitState() {
	const board = Array(225).fill(CellTypes.EMPTY);
	return {
		board,
		type: GameTypes.PLAY_WITH_COMPUTER,
		nextPlayer: PlayerTypes.PLAYER_X,
		moveCounter: 0,
	};
}

export default function(state = makeInitState(), action) {
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
