import { MA_NHOM } from '../util/settings/config';
import { baseService } from './baseService';

class QuanLyNguoiDungServices extends baseService {
	dangNhap = data => this.post('/api/QuanLyNguoiDung/DangNhap', data);
	layThongTinTaiKhoan = () => this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
	dangKy = data => this.post('/api/QuanLyNguoiDung/DangKy', data);
	capNhatThongTinNguoiDung = data => this.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data);
	layListUserAll = () => this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}`);
	layLoaiNguoiDung = () => this.get('/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
	themNguoiDung = data => this.post('/api/QuanLyNguoiDung/ThemNguoiDung', data);
	layThongTinTaiKhoanAdmin = data =>
		this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${MA_NHOM}&tuKhoa=${data}`);
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();
