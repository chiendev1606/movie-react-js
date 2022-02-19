import { quanLyRapService } from '../../../services/QuanLyRapService';
import { STATUS_API } from '../../../util/settings/config';
import {
	dispatchGetListCinemaReducer,
	dispatchActionGetListCinemaSubReducer,
	dispatchActionGetListMovieSchedule,
} from '../sync/actions';

export const getCinemaList = () => async dispatch => {
	try {
		const { data, status } = await quanLyRapService.layThongTinHeThongRap();
		if (status === STATUS_API.SUCCESS && data.content.length) {
			dispatch(getCinemaListSub({ payload: data.content[0].maHeThongRap }));
			dispatch(dispatchGetListCinemaReducer(data.content));
		}
	} catch (error) {
		console.log(error);
	}
};

export const getCinemaListSub = action => async dispatch => {
	try {
		const { data, status } = await quanLyRapService.layThongTinCumRap(action.payload);
		if (status === STATUS_API.SUCCESS) {
			dispatch(dispatchActionGetListCinemaSubReducer(data.content[0]));
			dispatch(getMovieScheduleByCinema({ payload: action.payload }));
		}
	} catch (error) {}
};

export const getMovieScheduleByCinema =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyRapService.LayThongTinLichChieuHeThongRap(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionGetListMovieSchedule({ listMovieSchedule: data.content }));
			}
		} catch (error) {}
	};
