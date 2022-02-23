import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { GET_USER_DETAILS, LOGIN } from '../actions/types/types';

const initialState = {
	userLogin: localStorage.getItem(USER_LOGIN) || [],
	userDetails: {},
};

const userLoginReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN:
			localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
			localStorage.setItem(TOKEN, payload.accessToken);
			return { ...state, userLogin: { ...payload } };
		case GET_USER_DETAILS:
			return { ...state, userDetails: { ...payload } };

		default:
			return state;
	}
};

export default userLoginReducer;
