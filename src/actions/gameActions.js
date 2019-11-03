import { GameActionTypes } from '../constants';

const emptyCellClick = index => (dispatch, getState) => {
	dispatch({ type: GameActionTypes.EMPTY_CELL_CLICK, payload: { index } });
};

export default { emptyCellClick };
