import { GET_LIST_FILMS } from '../actions/types/listFilmsType';

const initialState = {
	listFilms: [],
};

const listFilmsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LIST_FILMS:
			return { ...state, listFilms: payload };

		default:
			return state;
	}
};

export default listFilmsReducer;
