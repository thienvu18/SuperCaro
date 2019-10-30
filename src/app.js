import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Grid,
	Box,
} from '@material-ui/core';
import { Settings, PeopleAlt } from '@material-ui/icons';

import { Copyright } from './components';
import { Register, Login, UpdateInfo } from './views';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		minHeight: 70,
		alignItems: 'center',
		padding: theme.spacing(0),
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<Grid container direction="row" justify="flex-start">
						<img
							src={
								'http://www.gravatar.com/avatar/7da6eed3125ce42e7490c5bf9f7566a8?s=70&d=mm'
							}
							width={70}
							height={70}
						></img>
						<Typography>Thai Thien Vu</Typography>
					</Grid>
					<Grid container direction="row" justify="center">
						<Typography align="center">CARO GAME</Typography>
					</Grid>
					<Grid container direction="row" justify="flex-end">
						<IconButton color="inherit">
							<PeopleAlt />
						</IconButton>
						<IconButton color="inherit">
							<Settings />
						</IconButton>
					</Grid>
				</Toolbar>
			</AppBar>
			<UpdateInfo />
			<Box mt={8}>
				<Copyright />
			</Box>
		</div>
	);
}

const mapstateToProps = ({ app }) => {
	return { app };
};

export default connect(mapstateToProps)(App);
