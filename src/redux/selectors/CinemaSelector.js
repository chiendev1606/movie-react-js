import { createSelector } from 'reselect';

export const cinemaSelector = state => state.cinemaReducer.listCinema;
export const cinemaSelectorSub = state => state.cinemaReducer.listCinemaSub;
export const movieScheduleSelector = state => state.cinemaReducer.listMovieSchedule;
export const filterTextSelector = state => state.cinemaReducer.filterByCinema;

export const filerMovieScheduleByCinema = createSelector(
	movieScheduleSelector,
	filterTextSelector,
	(listMovieSchedule, filerText) => {
		if (!filerText) return listMovieSchedule;
		return listMovieSchedule[0].lstCumRap.filter(item => item.maCumRap === filerText);
	}
);
