import React from 'react';
import { connect } from 'react-redux';
import {
	Avatar,
	Button,
	CssBaseline,
	Container,
	FormControlLabel,
	TextField,
	Checkbox,
	Grid,
	Typography,
	Fab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';

import { PasswordInput, GoogleIcon, FacebookIcon } from '../components';
import { Routes } from '../constants';
import { NavigationActions } from '../actions';

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
}));

function Login(props) {
	const classes = useStyles();

	const { onClick } = props;

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
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoFocus
					/>
					<PasswordInput
						variant="outlined"
						required
						fullWidth
						label="Password"
						name="password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Grid
						container
						justify="space-between"
						spacing={3}
						alignItems="center"
					>
						<Grid item xs>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Login
							</Button>
						</Grid>
						<Grid item></Grid>
						<Grid item>
							<Fab
								size="small"
								className={classes.social}
								style={{ backgroundColor: '#FFFFFF00' }}
							>
								<GoogleIcon />
							</Fab>
							<Fab
								size="small"
								className={classes.social}
								style={{ backgroundColor: '#4267B2' }}
							>
								<FacebookIcon />
							</Fab>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item>
							<Typography
								variant="body2"
								style={{ color: 'blue', cursor: 'pointer' }}
								onClick={() => onClick(Routes.REGISTER)}
							>
								{"Don't have an account? Sign Up"}
							</Typography>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
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
)(Login);
