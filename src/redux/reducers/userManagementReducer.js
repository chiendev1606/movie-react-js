import { MA_NHOM } from '../../util/settings/config';
import {
	CHANGE_IS_EDIT,
	GET_LIST_USER,
	GET_SEARCH_TEXT_USER,
	GET_USER_DETAILS_ADMIN,
	GET_USER_TYPE,
} from '../actions/types/types';

const initialState = {
	listUser: [],
	searchText: '',
	userDetail: {
		taiKhoan: '',
		matKhau: '',
		email: '',
		soDt: '',
		maNhom: MA_NHOM,
		maLoaiNguoiDung: '',
		hoTen: '',
	},
	isEdit: false,
	userType: [],
};

const userManagementReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LIST_USER:
			return { ...state, listUser: [...payload] };
		case GET_SEARCH_TEXT_USER:
			return { ...state, searchText: payload };
		case GET_USER_DETAILS_ADMIN:
			return { ...state, userDetail: { ...payload } };
		case CHANGE_IS_EDIT:
			return { ...state, isEdit: payload };
		case GET_USER_TYPE:
			return { ...state, userType: [...payload] };

		default:
			return state;
	}
};

export default userManagementReducer;
