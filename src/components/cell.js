import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { O, X, Empty } from '../components';
import { CellTypes } from '../constants';

const useStyles = makeStyles(theme => ({
	root: {
		height: '4vh',
		width: '4vh',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '75%',
		height: '75%',
	},
}));

export default function Cell(props) {
	const classes = useStyles();
	const { index, type, isWinCell } = props;

	const top = Math.floor(index / 15) * 4;
	const left = (index % 15) * 4;
	const backgroundColor = isWinCell ? 'red' : 'transparent';

	let img = null;
	switch (type) {
		case CellTypes.EMPTY:
			img = <Empty index={index} />;
			break;
		case CellTypes.O:
			img = <O className={classes.image} />;
			break;
		case CellTypes.X:
			img = <X className={classes.image} />;
			break;
	}

	return (
		<div
			className={classes.root}
			style={{
				top: `${top}vh`,
				left: `${left}vh`,
				backgroundColor: backgroundColor,
			}}
		>
			{img}
		</div>
	);
}
