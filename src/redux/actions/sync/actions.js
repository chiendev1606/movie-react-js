import { GET_CAROUSEL } from '../types/carouselType';
import { GET_LIST_FILMS, GET_SEARCH_TEXT } from '../types/listFilmsType';
import {
	CHANGE_MODAL,
	CHOOSE_MOVIE_CHAIR,
	GET_DETAILS_MOVIE_SCHEDULE_BY_FILM,
	GET_INFO_FILMS_DETAILS,
	GET_LIST_BOOKING_REAL_TIME,
	GET_LIST_CINEMA,
	GET_LIST_CINEMA_SUB,
	GET_LIST_MOVIE_SCHEDULE_CINEMA,
	GET_LIST_RAP,
	GET_LIST_ROOM_TICKET,
	GET_LIST_USER,
	GET_MODAL_INFO,
	GET_SEARCH_TEXT_USER,
	GET_USER_DETAILS,
	GET_USER_DETAILS_ADMIN,
	GET_USER_TYPE,
	LOGIN,
	TURN_OFF_LOADING,
	TURN_ON_LOADING,
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
export const dispatchActionGetUserDetails = data => ({ type: GET_USER_DETAILS, payload: data });
export const dispatchActionLayGheKhachChon = data => ({ type: GET_LIST_BOOKING_REAL_TIME, payload: data });
export const dispatchActionGetSearchText = data => ({ type: GET_SEARCH_TEXT, payload: data });
export const dispatchActionGetDetailFilm = data => ({ type: GET_INFO_FILMS_DETAILS, payload: data });
export const dispatchActionGetListRap = data => ({ type: GET_LIST_RAP, payload: data });
export const dispatchActionGetListUserAll = data => ({ type: GET_LIST_USER, payload: data });
export const dispatchActionSearchTextUser = data => ({ type: GET_SEARCH_TEXT_USER, payload: data });
export const dispatchActionGetUserType = data => ({ type: GET_USER_TYPE, payload: data });
export const dispatchActionGetUserDetailAdmin = data => ({ type: GET_USER_DETAILS_ADMIN, payload: data });
export const dispatchActionChangeModal = data => ({ type: CHANGE_MODAL, payload: data });
export const dispatchActionGetModalInfo = data => ({ type: GET_MODAL_INFO, payload: data });
