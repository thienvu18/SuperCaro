import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { GameActions } from '../actions';
import { PlayerTypes, CellTypes } from '../constants';

function Empty(props) {
	const { index, nextPlayer, onClick, gameResult } = props;

	return (
		<div
			style={{ width: '4vh', height: '4vh' }}
			onClick={() => {
				console.log(nextPlayer);
				if (nextPlayer === PlayerTypes.PLAYER_X && !gameResult)
					onClick(index);
			}}
		/>
	);
}

const mapStateToProps = ({ game }) => {
	return {
		nextPlayer: game.nextPlayer,
		gameResult: game.result,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: index => dispatch(GameActions.emptyCellClick(index)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Empty);
