import { createSelector } from 'reselect';
import { CHANGE_MODAL, GET_MODAL_INFO } from '../actions/types/types';
export const filmDetailSelector = state => state.filmDetailReducer.filmDetails;
export const danhSachGheSelector = state => state.roomCinemaReducer.danhSachGhe;
export const thongTinPhimSelector = state => state.roomCinemaReducer.thongTinPhim;
export const danhSachGheChonSelector = state => state.roomCinemaReducer.danhSachGheChon;
export const loadingSelector = state => state.LoadingReducer.isLoading;
export const userDetailsSelector = state => state.userLoginReducer.userDetails;
export const danhSachGheKhachChonSelector = state => state.roomCinemaReducer.danhSachGheKhachChon;
export const filmDetailByMovieScheduleSelector = state => state.filmDetailReducer.filmDetailsBySchedule;
export const listRapSelector = state => state.cinemaReducer.listRapByCinema;
export const listUserSelector = state => state.userManagementReducer.listUser;
export const searchTextUserSelector = state => state.userManagementReducer.searchText;
export const isEditUserSelector = state => state.userManagementReducer.isEdit;
export const userDetailByAdminSelector = state => state.userManagementReducer.userDetail;
export const userTypeSelector = state => state.userManagementReducer.userType;

export const listUserFilterByTextSelector = createSelector(
	listUserSelector,
	searchTextUserSelector,
	(listUser, searchText) => {
		if (searchText === '') return listUser;
		return listUser.filter(
			user =>
				user.taiKhoan.toLowerCase().includes(searchText.toLowerCase()) ||
				user.hoTen.toLowerCase().includes(searchText.toLowerCase())
		);
	}
);
export const isOpenModalSelector = state => state.modalReducer.isOpen;
export const modalInfoSelector = state => state.modalReducer.modalInfo;
