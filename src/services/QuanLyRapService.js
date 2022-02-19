import { MA_NHOM } from '../util/settings/config';
import { baseService } from './baseService';

class QuanLyRapServices extends baseService {
	layThongTinHeThongRap = () => this.get('/api/QuanLyRap/LayThongTinHeThongRap');
	layThongTinCumRap = text => this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${text}`);
	LayThongTinLichChieuHeThongRap = (maHeThong, maNhom = MA_NHOM) =>
		this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThong}&maNhom=${maNhom}`);
	LayThongTinLichChieuPhim = id => this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
}

export const quanLyRapService = new QuanLyRapServices();
