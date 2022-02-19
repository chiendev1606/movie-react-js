import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { STATUS_API } from '../../../util/settings/config';
import { dispatchGetCarouselReducer } from '../sync/CarouselAction';

export const getCarouselAction = () => {
	return async dispatch => {
		try {
			const res = await quanLyPhimService.LayDanhSachBanner();
			if (res.status === STATUS_API.SUCCESS) {
				dispatch(dispatchGetCarouselReducer(res.data.content));
			}
		} catch (error) {
			console.log(error);
		}
	};
};
