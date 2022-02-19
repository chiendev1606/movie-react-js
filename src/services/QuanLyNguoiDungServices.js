import { baseService } from './baseService';

class QuanLyNguoiDungServices extends baseService {
	dangNhap = data => this.post('/api/QuanLyNguoiDung/DangNhap', data);
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();
