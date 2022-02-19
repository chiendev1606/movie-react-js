export const listFilmsDangChieuSelector = state =>
	state.listFilmsReducer.listFilms.filter(film => film.dangChieu);

export const listFilmsSapChieuSelector = state =>
	state.listFilmsReducer.listFilms.filter(film => film.sapChieu);
