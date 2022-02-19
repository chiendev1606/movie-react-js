import { GET_CAROUSEL } from '../types/carouselType';
import { GET_LIST_FILMS } from '../types/listFilmsType';
import {
	GET_LIST_CINEMA,
	GET_LIST_CINEMA_SUB,
	GET_LIST_MOVIE_SCHEDULE_CINEMA,
	GET_DETAILS_MOVIE_SCHEDULE_BY_FILM,
	LOGIN,
	GET_LIST_ROOM_TICKET,
	CHOOSE_MOVIE_CHAIR,
	TURN_ON_LOADING,
	TURN_OFF_LOADING,
} from '../types/types';

export const dispatchGetCarouselReducer = data => ({ type: GET_CAROUSEL, payload: data });

export const dispatchGetListFilmsReducer = data => ({ type: GET_LIST_FILMS, payload: data });

export const dispatchGetListCinemaReducer = data => ({ type: GET_LIST_CINEMA, payload: data });

export const dispatchActionGetListCinemaSubReducer = data => ({ type: GET_LIST_CINEMA_SUB, payload: data });
export const dispatchActionGetListMovieSchedule = data => ({
	type: GET_LIST_MOVIE_SCHEDULE_CINEMA,
	payload: data,
});

export const dispatchActionLayThongTinLichChieuPhim = data => ({
	type: GET_DETAILS_MOVIE_SCHEDULE_BY_FILM,
	payload: data,
});
export const dispatchActionLoginReducer = data => ({
	type: LOGIN,
	payload: data,
});

export const dispatchActionGetRoomTickets = data => ({
	type: GET_LIST_ROOM_TICKET,
	payload: data,
});

export const dispatchActionChooseMovieChair = data => ({
	type: CHOOSE_MOVIE_CHAIR,
	payload: data,
});

export const dispatchActionTurnOnLoading = () => ({ type: TURN_ON_LOADING });
export const dispatchActionTurnOffLoading = () => ({ type: TURN_OFF_LOADING });
