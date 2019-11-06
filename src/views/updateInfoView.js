import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import { AuthActions } from '../actions';

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

function UpdateInfo(props) {
	const { updateInfo, oldUser } = props;
	console.log(oldUser);

	const classes = useStyles();
	const [shouldShowOverlay, toggleOverlay] = useState(false);
	const [user, setUser] = useState(oldUser);

	const onChange = event => {
		const reader = new FileReader();
		const file = event.target.files[0];
		console.log(file);
		reader.onloadend = () => {
			setUser({ ...user, avatar: file, avatarPreview: reader.result });
		};

		reader.readAsDataURL(file);
	};

	const fileSelector = document.createElement('input');
	fileSelector.setAttribute('type', 'file');
	fileSelector.setAttribute('accept', 'image/*');
	fileSelector.onchange = onChange;

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<div style={{ position: 'relative' }}>
					<Avatar
						className={classes.avatar}
						src={
							user.avatarPreview
								? user.avatarPreview
								: user.avatar
						}
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
							onClick={() => fileSelector.click()}
						/>
					</Avatar>
				</div>
				<form className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Name"
								defaultValue={user.name}
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
								defaultValue={user.email}
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
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={() => updateInfo(user)}
					>
						Update
					</Button>
				</form>
			</div>
		</Container>
	);
}

const mapStateToProps = ({ auth }) => {
	console.log(auth);
	return {
		oldUser: auth.user ? auth.user : {},
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateInfo: user => dispatch(AuthActions.updateInfo(user)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UpdateInfo);
