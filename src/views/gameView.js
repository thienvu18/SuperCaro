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

import { PasswordInput, GoogleIcon, FacebookIcon } from '../components';
import Canvas from '../components/canvas';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundImage: `url('../../assets/images/game-background.jpg')`,
		backgroundSize: 'cover',
	},
	game: {
		height: '100vh',
	},
}));

export default function Game() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.game}>dsdds</div>
		</div>
	);
}
