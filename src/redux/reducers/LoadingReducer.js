import { TURN_OFF_LOADING, TURN_ON_LOADING } from '../actions/types/types';

const initialState = {
	isLoading: false,
};

const loadingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TURN_ON_LOADING:
			return { ...state, isLoading: true };
		case TURN_OFF_LOADING:
			return { ...state, isLoading: false };

		default:
			return state;
	}
};

export default loadingReducer;
