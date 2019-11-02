import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	GridList,
	GridListTile,
	CardActionArea,
	CardMedia,
	Card,
	Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url('../../assets/images/game-background.jpg')`,
		backgroundSize: 'cover',
	},
	container: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		height: '50%',
	},
}));

const tileData = [
	{
		img: '../../assets/images/breakfast.jpg',
		title: 'Play with computer',
	},
	{
		img: '../../assets/images/burgers.jpg',
		title: 'Play with friends',
	},
];

export default function GameSelect() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<GridList
					className={classes.gridList}
					cols={2}
					cellHeight="auto"
					spacing={20}
				>
					{tileData.map(tile => (
						<GridListTile key={tile.title}>
							<Button>
								<img src={tile.img} width={300} />
							</Button>
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
}
