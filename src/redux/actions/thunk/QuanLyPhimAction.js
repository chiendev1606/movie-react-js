import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { STATUS_API } from '../../../util/settings/config';
import { dispatchActionGetDetailFilm } from '../sync/actions';
import { getListFilms } from './listFilmsAction';

export const addNewCinema =
	({ payload, handleReset }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyPhimService.ThemPhimUploadHinh(payload);
			if (status === STATUS_API.SUCCESS) {
				handleReset();
				alert('Thêm phim thành công');
			}
		} catch (error) {
			console.log(error);
		}
	};

export const getDetailFilm =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyPhimService.layThongTinPhim(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionGetDetailFilm(data.content));
			}
		} catch (error) {
			console.log(error);
		}
	};
export const updateFilm =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyPhimService.CapNhatPhimUpLoad(payload);
			if (status === STATUS_API.SUCCESS) {
				alert('cập nhật phim thành công !!!');
				dispatch(dispatchActionGetDetailFilm(data.content));
			}
		} catch (error) {
			console.log(error);
		}
	};

export const deleteFilm =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyPhimService.xoaPhim(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(getListFilms());
				alert('Xóa phim thành công !!');
			}
		} catch (error) {
			console.log(error);
		}
	};
