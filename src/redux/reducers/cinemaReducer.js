import {
	GET_LIST_CINEMA,
	GET_LIST_CINEMA_SUB,
	GET_LIST_MOVIE_SCHEDULE_CINEMA,
	GET_LIST_RAP,
} from '../actions/types/types';

const initialState = {
	listCinema: [],
	listCinemaSub: [],
	listMovieSchedule: [],
	listRapByCinema: [],
};

const cinemaReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LIST_CINEMA:
			return { ...state, listCinema: payload };
		case GET_LIST_CINEMA_SUB:
			return { ...state, listCinemaSub: payload };
		case GET_LIST_MOVIE_SCHEDULE_CINEMA:
			return { ...state, ...payload };
		case GET_LIST_RAP:
			return { ...state, listRapByCinema: payload };
		default:
			return state;
	}
};

export default cinemaReducer;
