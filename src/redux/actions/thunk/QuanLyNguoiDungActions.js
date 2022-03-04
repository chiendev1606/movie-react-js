import { goBack, push } from 'connected-react-router';
import { quanLyNguoiDungServices } from '../../../services/QuanLyNguoiDungServices';
import { STATUS_API } from '../../../util/settings/config';
import {
	dispatchActionGetListUserAll,
	dispatchActionGetUserDetailAdmin,
	dispatchActionGetUserDetails,
	dispatchActionGetUserType,
	dispatchActionLoginReducer,
} from '../sync/actions';
import { CHANGE_IS_EDIT } from '../types/types';

export const login =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyNguoiDungServices.dangNhap(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionLoginReducer(data.content));
				dispatch(goBack());
			}
		} catch (error) {
			alert(error.response?.data?.content);
		}
	};

export const getUserDetails = () => async dispatch => {
	try {
		const { data, status } = await quanLyNguoiDungServices.layThongTinTaiKhoan();
		if (status === STATUS_API.SUCCESS) {
			dispatch(dispatchActionGetUserDetails(data.content));
		}
	} catch (error) {
		console.log(error);
	}
};

export const signUp =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyNguoiDungServices.dangKy(payload);

			if (status === STATUS_API.SUCCESS) {
				alert('đăng ký tài khoản thành công !!!');
				dispatch(push('/login'));
			}
		} catch (error) {
			alert(error.response?.data?.content);
		}
	};

export const updateProfile =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyNguoiDungServices.capNhatThongTinNguoiDung(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(
					login({
						payload: {
							taiKhoan: payload.taiKhoan,
							matKhau: payload.matKhau,
						},
					})
				);
				alert('Cập nhật thông tin tài khoản thành công !!!');
			}
		} catch (error) {
			alert(error.response?.data?.content);
		}
	};

export const getListUserAll = () => async dispatch => {
	try {
		const { data, status } = await quanLyNguoiDungServices.layListUserAll();

		if (status === STATUS_API.SUCCESS) {
			dispatch(dispatchActionGetListUserAll(data.content));
		}
	} catch (error) {
		console.log(error);
	}
};

export const getUserType = () => async dispatch => {
	try {
		const { data, status } = await quanLyNguoiDungServices.layLoaiNguoiDung();
		if (status === STATUS_API.SUCCESS) {
			dispatch(dispatchActionGetUserType(data.content));
		}
	} catch (error) {
		console.log(error);
	}
};

export const createUserByAdmin =
	({ payload, handleReset }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyNguoiDungServices.themNguoiDung(payload);
			if (status === STATUS_API.SUCCESS) {
				alert('Tạo tải khoản thành công !!!');
				handleReset();
			}
		} catch (error) {
			alert(error.response?.data?.content);
		}
	};

export const getUserDetailsByAdmin =
	({ payload }) =>
	async dispatch => {
		try {
			const { data, status } = await quanLyNguoiDungServices.layThongTinTaiKhoanAdmin(payload);
			if (status === STATUS_API.SUCCESS) {
				dispatch(dispatchActionGetUserDetailAdmin(data.content[0]));
				dispatch({ type: CHANGE_IS_EDIT, payload: true });
			}
		} catch (error) {
			console.log(error);
		}
	};
