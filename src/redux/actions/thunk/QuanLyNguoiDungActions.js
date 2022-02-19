import { history } from '../../../App';
import { quanLyNguoiDungServices } from '../../../services/QuanLyNguoiDungServices';
import { STATUS_API } from '../../../util/settings/config';
import { dispatchActionLoginReducer } from '../sync/actions';

export const login =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyNguoiDungServices.dangNhap(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionLoginReducer(data.content));
				history.back();
			}
		} catch (error) {
			console.log(error);
		}
	};
