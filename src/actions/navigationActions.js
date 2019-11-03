import { NavigationActionTypes, Routes } from '../constants';

const onNavigationButtonClick = newRoute => (dispatch, getState) => {
	const { auth } = getState();

	switch (newRoute) {
		case Routes.HOME:
			{
				if (!auth.user) {
					dispatch({
						type: NavigationActionTypes.LOGIN,
					});
				} else {
					dispatch({
						type: NavigationActionTypes.GAME_SELECT,
					});
				}
			}
			break;
		case Routes.LOGIN:
			dispatch({
				type: NavigationActionTypes.LOGIN,
			});
			break;
		case Routes.UPDATE_INFO:
			dispatch({
				type: NavigationActionTypes.UPDATE_INFO,
			});
			break;
		case Routes.REGISTER:
			dispatch({
				type: NavigationActionTypes.REGISTER,
			});
			break;
		case Routes.GAME_SELECTOR:
			dispatch({
				type: NavigationActionTypes.GAME_SELECT,
			});
			break;
		case Routes.IN_GAME:
			dispatch({
				type: NavigationActionTypes.IN_GAME,
			});
			break;

		default:
			break;
	}
};

export default { onNavigationButtonClick };
