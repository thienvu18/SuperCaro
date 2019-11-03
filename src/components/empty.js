import React from 'react';
import { connect } from 'react-redux';

import { GameActions } from '../actions';

function Empty({ index, onClick }) {
	return (
		<div
			style={{ width: '4vh', height: '4vh' }}
			onClick={() => onClick(index)}
		/>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: index => dispatch(GameActions.emptyCellClick(index)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Empty);
