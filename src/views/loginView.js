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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import 'font-awesome/css/font-awesome.min.css';

import { PasswordInput, GoogleIcon, FacebookIcon } from '../components';

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

export default function Login() {
	const classes = useStyles();

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
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
