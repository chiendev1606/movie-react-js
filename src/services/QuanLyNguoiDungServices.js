import { baseService } from './baseService';

class QuanLyNguoiDungServices extends baseService {
	dangNhap = data => this.post('/api/QuanLyNguoiDung/DangNhap', data);
	layThongTinTaiKhoan = () => this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();
