import { baseService } from './baseService';

class QuanLyDatVeServices extends baseService {
	layDanhSachPhongVe = maLichChieu =>
		this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
	datVe = danhSachVe => this.post('/api/QuanLyDatVe/DatVe', danhSachVe);
	taoLichChieu = lich => this.post('/api/QuanLyDatVe/TaoLichChieu', lich);
}

export const quanLyDatVeServices = new QuanLyDatVeServices();
