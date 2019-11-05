import { PlayerTypes, CellTypes } from '../constants';

export default function getWinRow(board, currentPlayer, position) {
	const currentPlayerCellType =
		currentPlayer === PlayerTypes.PLAYER_X ? CellTypes.X : CellTypes.O;
	const otherPlayerCellType =
		currentPlayer === PlayerTypes.PLAYER_X ? CellTypes.O : CellTypes.X;

	const row = Math.floor(position / 15);
	const col = position % 15;
	let rows = [position];
	let stucks = 0;

	// Check col
	for (let i = col - 1; i >= 0; i -= 1) {
		if (board[row * 15 + i] === currentPlayerCellType) {
			rows.push(row * 15 + i);
		} else {
			if (board[row * 15 + i] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
	}
	for (let i = col + 1; i < 15; i += 1) {
		if (board[row * 15 + i] === currentPlayerCellType) {
			rows.push(row * 15 + i);
		} else {
			if (board[row * 15 + i] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
	}
	if (rows.length >= 5 && stucks < 2) {
		return rows;
	}

	// Check row
	rows = [position];
	stucks = 0;
	for (let i = row - 1; i >= 0; i -= 1) {
		if (board[i * 15 + col] === currentPlayerCellType) {
			rows.push(i * 15 + col);
		} else {
			if (board[i * 15 + col] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
	}
	for (let i = row + 1; i < 15; i += 1) {
		if (board[i * 15 + col] === currentPlayerCellType) {
			rows.push(i * 15 + col);
		} else {
			if (board[i * 15 + col] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
	}
	if (rows.length >= 5 && stucks < 2) {
		return rows;
	}

	// Check diag
	let i;
	let j;

	rows = [position];
	stucks = 0;
	i = row - 1;
	j = col + 1;

	while (i >= 0 && j < 15) {
		if (board[i * 15 + j] === currentPlayerCellType) {
			rows.push(i * 15 + j);
		} else {
			if (board[i * 15 + j] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
		i -= 1;
		j += 1;
	}

	i = row + 1;
	j = col - 1;

	while (i < 15 && j >= 0) {
		if (board[i * 15 + j] === currentPlayerCellType) {
			rows.push(i * 15 + j);
		} else {
			if (board[i * 15 + j] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
		i += 1;
		j -= 1;
	}
	if (rows.length >= 5 && stucks < 2) {
		return rows;
	}

	// Check anti diag
	rows = [position];
	stucks = 0;
	i = row - 1;
	j = col - 1;

	while (i >= 0 && j >= 0) {
		if (board[i * 15 + j] === currentPlayerCellType) {
			rows.push(i * 15 + j);
		} else {
			if (board[i * 15 + j] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
		i -= 1;
		j -= 1;
	}
	i = row + 1;
	j = col + 1;
	while (i < 15 && j < 15) {
		if (board[i * 15 + j] === currentPlayerCellType) {
			rows.push(i * 15 + j);
		} else {
			if (board[i * 15 + j] === otherPlayerCellType) {
				stucks += 1;
			}
			break;
		}
		i += 1;
		j += 1;
	}
	if (rows.length >= 5 && stucks < 2) {
		return rows;
	}

	return null;
}
