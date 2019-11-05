import {
	GameActionTypes,
	GameTypes,
	PlayerTypes,
	CellTypes,
} from '../constants';
import { getWinRow } from '../helpers';

function place(index, oldBoard, currentPlayer, gameType, moveCounter) {
	if (gameType === GameTypes.PLAY_WITH_COMPUTER) {
		const board = [...oldBoard];
		let nextPlayer;

		if (currentPlayer === PlayerTypes.PLAYER_O) {
			board[index] = CellTypes.O;
			nextPlayer = PlayerTypes.PLAYER_X;
		} else if (currentPlayer === PlayerTypes.PLAYER_X) {
			board[index] = CellTypes.X;
			nextPlayer = PlayerTypes.PLAYER_O;
		}

		return {
			type: GameActionTypes.SOMEONE_PLAYED,
			payload: {
				board,
				nextPlayer,
				moveCounter: moveCounter + 1,
			},
		};
	}
}

function checkResult(board, currentPlayer, position, moveCounter) {
	const winRow = getWinRow(board, currentPlayer, position);

	if (winRow === null) {
		if (moveCounter === 224) {
			return {
				type: GameActionTypes.RESULT_DRAW,
			};
		}

		return null;
	}

	return {
		type: GameActionTypes.RESULT_WIN,
		payload: {
			winner: currentPlayer,
			winRow: winRow,
		},
	};
}

const emptyCellClick = index => (dispatch, getState) => {
	const { game } = getState();

	const currentPlayer = game.nextPlayer;
	const gameType = game.type;
	const board = game.board;
	const moveCounter = game.moveCounter;

	dispatch(place(index, board, currentPlayer, gameType, moveCounter));

	const result = checkResult(board, currentPlayer, index, moveCounter);
	if (result !== null) {
		dispatch(result);
	}
};

export default { emptyCellClick };
