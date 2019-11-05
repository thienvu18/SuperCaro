import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, Button } from '@material-ui/core';
import { Routes } from '../constants';
import { NavigationActions } from '../actions';

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

function GameSelect(props) {
	const classes = useStyles();

	const { onClick } = props;

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<GridList
					className={classes.gridList}
					cols={2}
					cellHeight="auto"
					spacing={20}
				>
					<GridListTile key="PWC">
						<Button onClick={() => onClick(Routes.IN_GAME)}>
							<img
								src="../../assets/images/breakfast.jpg"
								width={300}
							/>
						</Button>
					</GridListTile>
					<GridListTile key="PWF">
						<Button onClick={() => onClick(Routes.IN_GAME)}>
							<img
								src="../../assets/images/burgers.jpg"
								width={300}
							/>
						</Button>
					</GridListTile>
				</GridList>
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: route =>
			dispatch(NavigationActions.onNavigationButtonClick(route)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(GameSelect);
