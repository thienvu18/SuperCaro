import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Search, More } from '@material-ui/icons';

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	toolbar: {
// 		minHeight: 128,
// 		alignItems: 'flex-start',
// 		paddingTop: theme.spacing(1),
// 		paddingBottom: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 		alignSelf: 'flex-end',
// 	},
// }));

class Main extends Component {
	render() {
		// const classes = useStyles();

		const classes = {};
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar className={classes.toolbar}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
						>
							<Menu />
						</IconButton>
						<Typography
							className={classes.title}
							variant="h5"
							noWrap
						>
							Material-UI
						</Typography>
						<IconButton color="inherit">
							<Search />
						</IconButton>
						<IconButton edge="end" color="inherit">
							<More />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

const mapstateToProps = ({ app }) => {
	return { app };
};

export default connect(mapstateToProps)(Main);
