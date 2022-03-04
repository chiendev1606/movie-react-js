import { CHANGE_MODAL, GET_MODAL_INFO } from '../actions/types/types';

const initialState = {
	isOpen: false,
	modalInfo: {},
};

const modalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_MODAL:
			return { ...state, isOpen: payload };
		case GET_MODAL_INFO:
			return { ...state, modalInfo: { ...payload } };

		default:
			return state;
	}
};

export default modalReducer;
