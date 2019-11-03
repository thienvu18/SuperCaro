import React from 'react';
import { connect } from 'react-redux';
import {
	Avatar,
	Button,
	CssBaseline,
	Container,
	TextField,
	Grid,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';

import { PasswordInput } from '../components';
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Register(props) {
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
					Register
				</Typography>
				<form className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<PasswordInput
								variant="outlined"
								required
								fullWidth
								label="Password"
								name="password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Register
					</Button>
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
)(Register);
