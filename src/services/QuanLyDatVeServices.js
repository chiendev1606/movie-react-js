import { baseService } from './baseService';

class QuanLyDatVeServices extends baseService {
	layDanhSachPhongVe = maLichChieu =>
		this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
	datVe = danhSachVe => this.post('/api/QuanLyDatVe/DatVe', danhSachVe);
}

export const quanLyDatVeServices = new QuanLyDatVeServices();
