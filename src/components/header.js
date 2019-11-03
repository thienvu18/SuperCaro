import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Grid,
	Avatar,
	MenuItem,
	Popper,
	ClickAwayListener,
	Grow,
	Paper,
	MenuList,
	ButtonGroup,
	Button,
} from '@material-ui/core';
import { NavigationActions } from '../actions';
import { Routes } from '../constants';

const useStyles = makeStyles(theme => ({
	toolbar: {
		minHeight: 70,
		alignItems: 'center',
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(2),
	},
}));

function AvatarMenu(props) {
	const { user, onClick } = props;
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen);
	};

	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<div>
			<IconButton
				color="inherit"
				width={50}
				height={50}
				onClick={handleToggle}
				ref={anchorRef}
			>
				<Avatar src={user.avatar} />
			</IconButton>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom'
									? 'center top'
									: 'center bottom',
						}}
					>
						<Paper id="menu-list-grow">
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									onKeyDown={handleListKeyDown}
								>
									<MenuItem
										onClick={event => {
											handleClose(event);
											onClick(Routes.UPDATE_INFO);
										}}
									>
										Profile
									</MenuItem>
									<MenuItem
										onClick={event => {
											handleClose(event);
											onClick(Routes.LOGOUT);
										}}
									>
										Logout
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
}

function LoginRegister({ onClick }) {
	return (
		<ButtonGroup>
			<Button onClick={() => onClick(Routes.LOGIN)}>Login</Button>
			<Button onClick={() => onClick(Routes.REGISTER)}>Register</Button>
		</ButtonGroup>
	);
}

function Header(props) {
	const classes = useStyles();

	const { user, onClick } = props;

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Grid container direction="row" justify="flex-start">
					<Typography
						align="center"
						variant="h5"
						style={{ cursor: 'pointer' }}
						onClick={() => onClick(Routes.HOME)}
					>
						CARO GAME
					</Typography>
				</Grid>
				<Grid container direction="row" justify="flex-end">
					{user ? (
						<AvatarMenu user={user} onClick={onClick} />
					) : (
						<LoginRegister onClick={onClick} />
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

const mapStateToProps = ({ auth }) => {
	return {
		user: auth.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: route =>
			dispatch(NavigationActions.onNavigationButtonClick(route)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
