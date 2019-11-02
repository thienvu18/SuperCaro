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

function App() {
	const classes = useStyles();
	return (
		<MuiThemeProvider theme={theme}>
			<div className={classes.root}>
				<Header />
				<GameSelect />
				<Box mt={8}>
					<Copyright />
				</Box>
			</div>
		</MuiThemeProvider>
	);
}

const mapstateToProps = ({ app }) => {
	return { app };
};

export default connect(mapstateToProps)(App);
