import React from 'react';
import {
	Avatar,
	Button,
	CssBaseline,
	Container,
	FormControlLabel,
	TextField,
	Checkbox,
	Link,
	Grid,
	Typography,
	Fab,
	Card,
	CardMedia,
	CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import 'font-awesome/css/font-awesome.min.css';

import { PasswordInput, GoogleIcon, FacebookIcon, Board } from '../components';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url('../../assets/images/game-background.jpg')`,
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
	},
	gameContainer: {
		height: '100vh',
		width: '150vh',
		display: 'flex',
		justifyContent: 'center',
	},
}));

export default function Game() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.gameContainer}>
				<Board />
			</div>
		</div>
	);
}
