import getWinRow from './checkwin';
import { PlayerTypes, CellTypes } from '../constants';

// This is the evaluation function as discussed
// in the previous article ( http://goo.gl/sJgv68 )
function evaluate(board, position) {
	if (getWinRow(board, PlayerTypes.PLAYER_O, position) != null) {
		return 10;
	} else if (getWinRow(board, PlayerTypes.PLAYER_X, position) != null) {
		return -10;
	} else return 0;
}

// This is the minimax function. It considers all
// the possible ways the game can go and returns
// the value of the board
export default function minimax(board, pos, moveCounter, isMax) {
	const score = evaluate(board, pos);

	// If Maximizer has won the game return his/her
	// evaluated score
	if (score === 10) return score;

	// If Minimizer has won the game return his/her
	// evaluated score
	if (score === -10) return score;

	if (moveCounter === 225) {
		return 0;
	}

	// If this maximizer's move
	if (isMax) {
		let best = -1000;

		// Traverse all cells
		for (let i = 0; i < 225; i++) {
			// Check if cell is empty
			if (board[i] === CellTypes.EMPTY) {
				board[i] = CellTypes.X;
				// Call minimax recursively and choose
				// the maximum value
				best = Math.max(
					best,
					minimax(board, i, moveCounter + 1, !isMax)
				);

				// Undo the move
				board[i] = CellTypes.EMPTY;
			}
		}
		return best;
	}

	// If this minimizer's move
	else {
		let best = 1000;

		// Traverse all cells
		for (let i = 0; i < 225; i++) {
			// Check if cell is empty
			if (board[i] == CellTypes.EMPTY) {
				// Make the move
				board[i][j] = CellTypes.O;

				// Call minimax recursively and choose
				// the minimum value
				best = Math.min(best, minimax(board, moveCounter + 1, !isMax));

				// Undo the move
				board[i][j] = CellTypes.EMPTY;
			}
		}
		return best;
	}
}
