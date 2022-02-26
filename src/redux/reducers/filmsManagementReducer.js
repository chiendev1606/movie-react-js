import { GET_LIST_FILMS_ADMIN } from '../actions/types/types';

const initialState = {
	listFilms: [],
};

const filmsManagementReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LIST_FILMS_ADMIN:
			return { ...state, listFilms: [...payload] };

		default:
			return state;
	}
};

export default filmsManagementReducer;
