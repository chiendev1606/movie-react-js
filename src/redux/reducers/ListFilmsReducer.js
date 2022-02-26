import { GET_LIST_FILMS, GET_SEARCH_TEXT } from '../actions/types/listFilmsType';

const initialState = {
	listFilms: [],
	searchText: '',
};

const listFilmsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LIST_FILMS:
			return { ...state, listFilms: payload };
		case GET_SEARCH_TEXT:
			return { ...state, searchText: payload };
		default:
			return state;
	}
};

export default listFilmsReducer;
