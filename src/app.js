import React from 'react';
import { connect } from 'react-redux';
import {
	makeStyles,
	MuiThemeProvider,
	createMuiTheme,
} from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { Copyright, Header } from './components';
import { Register, Login, UpdateInfo, Game, GameSelect } from './views';
import { Routes } from './constants';

const theme = createMuiTheme({
	palette: {
		// primary: {
		// 	main: '#FF0000',
		// },
		// secondary: {
		// 	main: '#E33E7F',
		// },
	},
});

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
}));

function renderMain(route) {
	switch (route) {
		case Routes.LOGIN:
			return <Login />;
		case Routes.REGISTER:
			return <Register />;
		case Routes.UPDATE_INFO:
			return <UpdateInfo />;
		case Routes.GAME_SELECTOR:
			return <GameSelect />;
		case Routes.IN_GAME:
			return <Game />;
		default:
			break;
	}
}

function App(props) {
	const classes = useStyles();
	const { route } = props;
	return (
		<MuiThemeProvider theme={theme}>
			<div className={classes.root}>
				<Header />
				{renderMain(route)}
				<Box mt={8}>
					<Copyright />
				</Box>
			</div>
		</MuiThemeProvider>
	);
}

const mapStateToProps = ({ route }) => {
	return { route };
};

export default connect(mapStateToProps)(App);
