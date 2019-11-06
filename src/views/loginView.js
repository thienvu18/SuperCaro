import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	Avatar,
	Button,
	CssBaseline,
	Container,
	TextField,
	Grid,
	Typography,
	Fab,
	Dialog,
	DialogTitle,
	DialogActions,
	CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import { PasswordInput, GoogleIcon, FacebookIcon } from '../components';
import { Routes, AuthStatuses } from '../constants';
import { NavigationActions, AuthActions, ResetActions } from '../actions';

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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	social: {
		margin: theme.spacing(1),
		boxShadow: 'none',
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

function Login(props) {
	const { onClick, login, loginStatus, reset } = props;

	const classes = useStyles();
	const [user, setUser] = useState({});

	const responseFacebook = response => {
		console.log(response);
	};

	const responseGoogle = response => {
		console.log(response);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<div className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Email Address"
						autoFocus
						onChange={event =>
							setUser({
								...user,
								email: event.target.value,
							})
						}
					/>
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
					{/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
					<Grid
						container
						justify="space-between"
						spacing={3}
						alignItems="center"
					>
						<Grid item xs>
							<div className={classes.wrapper}>
								<Button
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={() => login(user)}
								>
									Login
								</Button>
								{loginStatus === AuthStatuses.LOGGED && (
									<CircularProgress
										size={24}
										className={classes.buttonProgress}
									/>
								)}
							</div>
						</Grid>
						<Grid item></Grid>
						<Grid item>
							<FacebookLogin
								appId="676188559872602"
								autoLoad
								callback={responseFacebook}
								render={renderProps => (
									<Fab
										size="small"
										className={classes.social}
										onClick={renderProps.onClick}
									>
										<FacebookIcon />
									</Fab>
								)}
							/>
							<GoogleLogin
								clientId="1037937300091-abbo4i2scnso1m1qb6f2ro24vi0o8glk.apps.googleusercontent.com"
								render={renderProps => (
									<Fab
										size="small"
										className={classes.social}
										style={{ backgroundColor: '#FFFFFF00' }}
										onClick={renderProps.onClick}
									>
										<GoogleIcon />
									</Fab>
								)}
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item>
							<Typography
								variant="body2"
								style={{ color: 'blue', cursor: 'pointer' }}
								onClick={() => onClick(Routes.LOGIN)}
							>
								{"Don't have an account? Sign Up"}
							</Typography>
						</Grid>
					</Grid>
				</div>
			</div>
			<Dialog
				open={
					loginStatus === AuthStatuses.LOGGED ||
					loginStatus === AuthStatuses.LOGIN_FAIL
				}
			>
				<DialogTitle>
					{loginStatus === AuthStatuses.LOGGED
						? 'Login successfully'
						: 'Login fail'}
				</DialogTitle>
				<DialogActions>
					<Button
						color="primary"
						onClick={() => {
							if (loginStatus === AuthStatuses.LOGGED) {
								onClick(Routes.HOME);
							} else {
								reset();
								onClick(Routes.LOGIN);
							}
						}}
					>
						{loginStatus === AuthStatuses.LOGGED
							? 'OK'
							: 'Try again'}
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}

const mapStateToProps = ({ auth }) => {
	return {
		loginStatus: auth.authStatus,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: route =>
			dispatch(NavigationActions.onNavigationButtonClick(route)),
		login: user => dispatch(AuthActions.login(user)),
		reset: () => dispatch(ResetActions.resetRegister()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
