import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { Cell } from '../components';
import { CellTypes } from '../constants';

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
	const classes = useStyles();
	const { board } = props;

	return (
		<div className={classes.root}>
			<div className={classes.board}>
				{board.map((type, index) => (
					<Cell key={`board_${index}`} index={index} type={type} />
				))}
			</div>
		</div>
	);
}

const mapStateToProps = ({ game }) => {
	return {
		board: game.board,
	};
};

export default connect(mapStateToProps)(Board);
