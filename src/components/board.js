import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { Cell } from '../components';
import { PlayerTypes, GameTypes, CellTypes, GameResults } from '../constants';
import { GameActions } from '../actions';

function getNextPlay(board) {
	let next = -1;
	do {
		next = Math.round(Math.random() * 224);
	} while (board[next] !== CellTypes.EMPTY);

	return next;
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '64vh',
		width: '64vh',
		marginTop: '70px',
		backgroundImage: `url('../../assets/images/board.svg')`,
		backgroundSize: 'cover',
		position: 'relative',
	},
	board: {
		margin: '2.4vh 2vh 2vh 2vh',
		position: 'absolute',
		height: '60vh',
		width: '60vh',
		backgroundColor: 'transparent',
	},
}));

function Board(props) {
	const { board, gameType, nextPlayer, onClick, result, winRow } = props;
	const classes = useStyles();

	useEffect(() => {
		if (nextPlayer === PlayerTypes.PLAYER_O) {
			if (gameType === GameTypes.PLAY_WITH_COMPUTER) {
				const nextMove = getNextPlay(board);
				console.log(nextMove);
				onClick(nextMove);
			}
		}
	});

	return (
		<div className={classes.root}>
			<div className={classes.board}>
				{board.map((type, index) => (
					<Cell
						key={`board_${index}`}
						index={index}
						type={type}
						isWinCell={winRow && winRow.includes(index)}
					/>
				))}
			</div>
		</div>
	);
}

const mapStateToProps = ({ game }) => {
	return {
		board: game.board,
		gameType: game.type,
		nextPlayer: game.nextPlayer,
		result: game.result,
		winRow: game.winRow,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: index => dispatch(GameActions.emptyCellClick(index)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
