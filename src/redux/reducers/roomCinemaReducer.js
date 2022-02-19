import { CHOOSE_MOVIE_CHAIR, GET_LIST_ROOM_TICKET } from '../actions/types/types';

const initialState = {
	danhSachGhe: [],
	thongTinPhim: {},
	danhSachGheChon: [],
};

const roomCinemaReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LIST_ROOM_TICKET:
			return { ...state, ...payload, danhSachGheChon: [] };
		case CHOOSE_MOVIE_CHAIR:
			const index = state.danhSachGheChon.findIndex(ghe => ghe.maGhe === payload.maGhe);
			if (index === -1) return { ...state, danhSachGheChon: [...state.danhSachGheChon, payload] };
			return {
				...state,
				danhSachGheChon: [...state.danhSachGheChon.filter(ghe => ghe.maGhe !== payload.maGhe)],
			};

		default:
			return state;
	}
};

export default roomCinemaReducer;