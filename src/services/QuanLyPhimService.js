import { MA_NHOM } from '../util/settings/config';
import { baseService } from './baseService';

class QuanLyPhimServices extends baseService {
	LayDanhSachBanner = () => this.get('/api/QuanLyPhim/LayDanhSachBanner');

	LayDanhSachPhim = (maNhom = MA_NHOM, tenPhim = '') =>
		this.get(
			tenPhim
				? `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}&tenPhim=${tenPhim}`
				: `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
		);
	LayDanhSachPhimPhanTrang = ({ maNhom, tenPhim, soTrang, soPhanTuTrenTrang }) =>
		this.get(
			`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
		);
	LayDanhSachPhimTheoNgay = ({ maNhom, tenPhim, soTrang, soPhanTuTrenTrang, tuNgay, denNgay }) =>
		this.get(
			`/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}&tuNgay=${tuNgay}&denNgay=${denNgay}`
		);
	ThemPhimUploadHinh = data => this.post('/api/QuanLyPhim/ThemPhimUploadHinh', data);
	CapNhatPhimUpLoad = data => this.post('/api/QuanLyPhim/CapNhatPhimUpload', data);
	layThongTinPhim = data => this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
	xoaPhim = data => this.delete(`/api/QuanLyPhim/XP?MaPhim=${data}`);
}

export const quanLyPhimService = new QuanLyPhimServices();
