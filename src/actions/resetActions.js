import { ResetActionTypes } from '../constants';

const resetRegister = () => dispatch => {
	dispatch({
		type: ResetActionTypes.RESET_REGISTER,
	});
};

export default { resetRegister };
