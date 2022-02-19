import { GET_CAROUSEL } from '../actions/types/carouselType';

const initialState = {
	banners: [],
};

const bannerReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CAROUSEL:
			return { ...state, banners: payload };

		default:
			return state;
	}
};

export default bannerReducer;
