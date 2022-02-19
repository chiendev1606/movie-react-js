import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { LOGIN } from '../actions/types/types';

const initialState = {
	userLogin: localStorage.getItem(USER_LOGIN) || [],
};

const userLoginReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN:
			localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
			localStorage.setItem(TOKEN, payload.accessToken);
			return { ...state, userLogin: { ...payload } };

		default:
			return state;
	}
};

export default userLoginReducer;
