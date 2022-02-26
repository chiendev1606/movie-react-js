import { GET_DETAILS_MOVIE_SCHEDULE_BY_FILM, GET_INFO_FILMS_DETAILS } from '../actions/types/types';

const initialState = {
	filmDetails: {},
	filmDetailsBySchedule: {},
};

const filmDetailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_INFO_FILMS_DETAILS:
			return { ...state, filmDetails: payload };
		case GET_DETAILS_MOVIE_SCHEDULE_BY_FILM:
			return { ...state, filmDetailsBySchedule: payload };

		default:
			return state;
	}
};

export default filmDetailReducer;
