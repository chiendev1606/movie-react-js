import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { STATUS_API } from '../../../util/settings/config';
import { dispatchGetListFilmsReducer } from '../sync/actions';

export const getListFilms = () => {
	return async dispatch => {
		try {
			const { status, data } = await quanLyPhimService.LayDanhSachPhim();
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchGetListFilmsReducer(data.content));
			}
		} catch (error) {
			console.log(error);
		}
	};
};
