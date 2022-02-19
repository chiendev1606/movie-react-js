import { GET_DETAILS_MOVIE_SCHEDULE_BY_FILM } from '../actions/types/types';

const initialState = {};

const filmDetailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_DETAILS_MOVIE_SCHEDULE_BY_FILM:
			return { ...state, ...payload };

		default:
			return state;
	}
};

export default filmDetailReducer;
