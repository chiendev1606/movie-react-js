import { quanLyRapService } from '../../../services/QuanLyRapService';
import { STATUS_API } from '../../../util/settings/config';
import { dispatchActionLayThongTinLichChieuPhim, dispatchActionGetListRap } from '../sync/actions';

export const layThongTinLichChieuPhim = action => async dispatch => {
	try {
		const { data, status } = await quanLyRapService.LayThongTinLichChieuPhim(action.payload);
		if (status === STATUS_API.SUCCESS) {
			dispatch(dispatchActionLayThongTinLichChieuPhim(data.content));
		}
	} catch (err) {
		console.log(err);
	}
};
export const getListRapByCinema =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyRapService.LayThongTinCumRapTheoHeThong(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionGetListRap(data.content));
			}
		} catch (error) {
			console.log(error);
		}
	};
