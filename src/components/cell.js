import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { O, X, Empty } from '../components';
import { CellType } from '../constants';

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
	const { index, type } = props;

	const top = Math.floor(index / 15) * 4;
	const left = (index % 15) * 4;

	let img = null;
	switch (type) {
		case CellType.EMPTY:
			img = <Empty index={index} />;
			break;
		case CellType.O:
			img = <O className={classes.image} />;
			break;
		case CellType.X:
			img = <X className={classes.image} />;
			break;
	}

	return (
		<div
			className={classes.root}
			style={{ top: `${top}vh`, left: `${left}vh` }}
		>
			{img}
		</div>
	);
}
