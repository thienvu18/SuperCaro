import { InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { Component } from 'react';

export default class PasswordInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			passwordIsMasked: true,
		};
	}

	togglePasswordMask = () => {
		this.setState(prevState => ({
			passwordIsMasked: !prevState.passwordIsMasked,
		}));
	};

	render() {
		const { passwordIsMasked } = this.state;

		return (
			<TextField
				type={passwordIsMasked ? 'password' : 'text'}
				{...this.props}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							{passwordIsMasked ? (
								<Visibility
									style={{
										cursor: 'pointer',
									}}
									onClick={this.togglePasswordMask}
								/>
							) : (
								<VisibilityOff
									style={{
										cursor: 'pointer',
									}}
									onClick={this.togglePasswordMask}
								/>
							)}
						</InputAdornment>
					),
				}}
			/>
		);
	}
}
