import { history } from '../../../App';
import { connection } from '../../../index';
import { quanLyDatVeServices } from '../../../services/QuanLyDatVeServices';
import { STATUS_API } from '../../../util/settings/config';
import { danhSachGheChonSelector } from '../../selectors/selectors';
import {
	dispatchActionChooseMovieChair,
	dispatchActionGetRoomTickets,
	dispatchActionTurnOffLoading,
	dispatchActionTurnOnLoading,
} from '../sync/actions';
import { getUserDetails } from './QuanLyNguoiDungActions';

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

export const loadDanhSachDangDatVe =
	({ payload }) =>
	async (dispatch, getState) => {
		await dispatch(dispatchActionChooseMovieChair(payload.ghe));
		const danhSachGheDangDat = JSON.stringify(danhSachGheChonSelector(getState()));
		const taiKhoan = payload.taiKhoan;
		const maLichChieu = Number(payload.maLichChieu);

		connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, maLichChieu);
	};

export const datVe =
	({ payload, setTabKey }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyDatVeServices.datVe(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(layDanhSachPhongVe({ payload: payload.maLichChieu }));
				dispatch(getUserDetails());
				setTabKey('2');
			}
		} catch (error) {
			console.log(error);
		}
	};

export const taoLichChieu =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyDatVeServices.taoLichChieu(payload);
			if (status === STATUS_API.SUCCESS) {
				alert(data.content);
				history.push('/admin/films');
			}
		} catch (error) {
			console.log(error);
		}
	};
