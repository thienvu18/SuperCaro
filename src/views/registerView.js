import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	Avatar,
	Button,
	CssBaseline,
	Container,
	TextField,
	Grid,
	Typography,
	Dialog,
	DialogTitle,
	DialogActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import { PasswordInput } from '../components';
import { Routes, AuthStatuses } from '../constants';
import { NavigationActions, AuthActions, ResetActions } from '../actions';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -10,
		marginLeft: -12,
	},
	wrapper: {
		height: 300,
		flexGrow: 1,
		transform: 'translateZ(0)',
		// The position fixed scoping doesn't work in IE 11.
		// Disable this demo to preserve the others.
		'@media all and (-ms-high-contrast: none)': {
			display: 'none',
		},
	},
	modal: {
		display: 'flex',
		padding: theme.spacing(1),
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalBody: {
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Register(props) {
	const { onClick, register, reset, registerStatus } = props;

	const classes = useStyles();
	const [user, setUser] = useState({});

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<div className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="name"
								variant="outlined"
								required
								fullWidth
								label="Name"
								autoFocus
								onChange={event =>
									setUser({
										...user,
										name: event.target.value,
									})
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Email"
								onChange={event =>
									setUser({
										...user,
										email: event.target.value,
									})
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<PasswordInput
								variant="outlined"
								required
								fullWidth
								label="Password"
								onChange={event =>
									setUser({
										...user,
										password: event.target.value,
									})
								}
							/>
						</Grid>
					</Grid>
					<div className={classes.wrapper}>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={() => register(user)}
						>
							Register
						</Button>
						{registerStatus === AuthStatuses.REGISTERING && (
							<CircularProgress
								size={24}
								className={classes.buttonProgress}
							/>
						)}
					</div>
					<Grid container justify="flex-end">
						<Grid item>
							<Typography
								variant="body2"
								style={{ color: 'blue', cursor: 'pointer' }}
								onClick={() => onClick(Routes.LOGIN)}
							>
								Already have an account? Login here
							</Typography>
						</Grid>
					</Grid>
				</div>
			</div>
			<Dialog
				open={
					registerStatus === AuthStatuses.REGISTERED ||
					registerStatus === AuthStatuses.REGISTER_FAIL
				}
			>
				<DialogTitle>
					{registerStatus === AuthStatuses.REGISTERED
						? 'Register successfully'
						: 'Register fail'}
				</DialogTitle>
				<DialogActions>
					<Button
						color="primary"
						onClick={() => {
							if (registerStatus === AuthStatuses.REGISTERED) {
								reset();
								onClick(Routes.LOGIN);
							} else {
								reset();
								onClick(Routes.REGISTER);
							}
						}}
					>
						{registerStatus === AuthStatuses.REGISTERED
							? 'Login'
							: 'Try again'}
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}

const mapStateToProps = ({ auth }) => {
	return {
		registerStatus: auth.authStatus,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: route =>
			dispatch(NavigationActions.onNavigationButtonClick(route)),
		register: user => dispatch(AuthActions.register(user)),
		reset: () => dispatch(ResetActions.resetRegister()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
