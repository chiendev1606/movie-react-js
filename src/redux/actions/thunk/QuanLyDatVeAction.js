import { quanLyDatVeServices } from '../../../services/QuanLyDatVeServices';
import { STATUS_API } from '../../../util/settings/config';
import {
	dispatchActionGetRoomTickets,
	dispatchActionTurnOffLoading,
	dispatchActionTurnOnLoading,
} from '../sync/actions';

export const layDanhSachPhongVe =
	({ payload }) =>
	async dispatch => {
		try {
			dispatch(dispatchActionTurnOnLoading());
			const { data, status } = await quanLyDatVeServices.layDanhSachPhongVe(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionGetRoomTickets(data.content));
				dispatch(dispatchActionTurnOffLoading());
			}
		} catch (error) {
			console.log(error);
		}
	};

export const datVe =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyDatVeServices.datVe(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(layDanhSachPhongVe({ payload: payload.maLichChieu }));
			}
		} catch (error) {
			console.log(error);
		}
	};
