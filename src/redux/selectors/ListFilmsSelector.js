import { createSelector } from 'reselect';
export const listFilmsDangChieuSelector = state =>
	state.listFilmsReducer.listFilms.filter(film => film.dangChieu);

export const listFilmsSapChieuSelector = state =>
	state.listFilmsReducer.listFilms.filter(film => film.sapChieu);

export const listFilmsAllSelector = state => state.listFilmsReducer.listFilms;

export const searchTextSelector = state => state.listFilmsReducer.searchText;

export const listFilmsFilterBySearch = createSelector(
	listFilmsAllSelector,
	searchTextSelector,
	(listFilms, text) => {
		if (text.trim() === '') return listFilms;
		return listFilms.filter(
			film =>
				film.maPhim.toString().startsWith(text) || film.tenPhim.toLowerCase().includes(text.toLowerCase())
		);
	}
);
