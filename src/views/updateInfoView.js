import React, { useState } from 'react';
import {
	Avatar,
	Button,
	CssBaseline,
	Container,
	TextField,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CloudUpload } from '@material-ui/icons';
import 'font-awesome/css/font-awesome.min.css';

import { PasswordInput } from '../components';

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
		width: '150px',
		height: '150px',
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
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		height: '100%',
		width: '100%',
		backgroundColor: '#000000',
	},
}));

const onMouseEnter = () => {
	console.log('ddd');
};

export default function UpdateInfo() {
	const classes = useStyles();
	const [shouldShowOverlay, toggleOverlay] = useState(false);

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<div style={{ position: 'relative' }}>
					<Avatar
						className={classes.avatar}
						src="http://www.gravatar.com/avatar/7da6eed3125ce42e7490c5bf9f7566a8?s=200&d=mm"
					/>
					<Avatar
						onMouseEnter={() => toggleOverlay(true)}
						onMouseLeave={() => toggleOverlay(false)}
						className={classes.overlay}
						style={
							shouldShowOverlay
								? { opacity: 0.5 }
								: { opacity: 0 }
						}
					>
						<CloudUpload
							fontSize="large"
							onClick={() => console.log('Upload')}
						/>
					</Avatar>
				</div>
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
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Update
					</Button>
				</form>
			</div>
		</Container>
	);
}
