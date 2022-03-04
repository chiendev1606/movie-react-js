import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { MA_NHOM } from '../../util/settings/config';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/actions/thunk/QuanLyNguoiDungActions';

const SignUp = () => {
	const dispatch = useDispatch();
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			taiKhoan: '',
			matKhau: '',
			matKhauNhapLai: '',
			email: '',
			soDt: '',
			maNhom: MA_NHOM,
			hoTen: '',
		},
		validationSchema: Yup.object().shape({
			taiKhoan: Yup.string().required('Tài khoản không bỏ trống '),
			matKhau: Yup.string().required('Mật khẩu không bỏ trống '),
			matKhauNhapLai: Yup.string()
				.oneOf([Yup.ref('matKhau'), null], 'Xác nhận mật khẩu không đúng')
				.required('Mật khẩu xác nhận không được bỏ trống'),
			email: Yup.string().email('Email không đúng  ').required('email không bỏ trống '),
			soDt: Yup.string()
				.matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Số điện thoại không đúng định dạng')
				.required('Số điện không bỏ trống '),
			hoTen: Yup.string().required('Họ tên không bỏ trống '),
		}),
		onSubmit: values => {
			dispatch(signUp({ payload: values }));
		},
	});

	return (
		<form className="mt-10" onSubmit={handleSubmit}>
			<div className="mt-4">
				<div>
					<label className="block" htmlFor="taiKhoan">
						Tài khoản
						<label>
							<input
								value={values.taiKhoan}
								onChange={handleChange}
								onBlur={handleBlur}
								type="text"
								placeholder="Tài Khoản"
								name="taiKhoan"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-2 text-xs tracking-wide text-red-600">
						{touched.taiKhoan && errors.taiKhoan && <span>{errors.taiKhoan}</span>}
					</div>
				</div>
				<div className="mt-4">
					<label className="block">
						Mật khẩu
						<label>
							<input
								value={values.matKhau}
								onChange={handleChange}
								onBlur={handleBlur}
								type="password"
								name="matKhau"
								placeholder="Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-1 text-xs tracking-wide text-red-600">
						{touched.matKhau && errors.matKhau && <span>{errors.matKhau}</span>}
					</div>
				</div>
				<div className="mt-4">
					<label className="block">
						Nhập lại mật khẩu
						<label>
							<input
								value={values.matKhauNhapLai}
								onChange={handleChange}
								onBlur={handleBlur}
								type="password"
								name="matKhauNhapLai"
								placeholder="Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-1 text-xs tracking-wide text-red-600">
						{touched.matKhauNhapLai && errors.matKhauNhapLai && <span>{errors.matKhauNhapLai}</span>}
					</div>
				</div>
				<div className="mt-4">
					<label className="block">
						Họ Tên
						<label>
							<input
								value={values.hoTen}
								onChange={handleChange}
								onBlur={handleBlur}
								type="text"
								name="hoTen"
								placeholder="Họ tên"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-1 text-xs tracking-wide text-red-600">
						{touched.hoTen && errors.hoTen && <span>{errors.hoTen}</span>}
					</div>
				</div>
				<div className="mt-4">
					<label className="block">
						Email
						<label>
							<input
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								type="text"
								name="email"
								placeholder="Email"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-1 text-xs tracking-wide text-red-600">
						{touched.email && errors.email && <span>{errors.email}</span>}
					</div>
				</div>
				<div className="mt-4">
					<label className="block">
						số điện thoại
						<label>
							<input
								value={values.soDt}
								onChange={handleChange}
								onBlur={handleBlur}
								type="text"
								name="soDt"
								placeholder="Số điện thoại"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-1 text-xs tracking-wide text-red-600">
						{touched.soDt && errors.soDt && <span>{errors.soDt}</span>}
					</div>
				</div>
				<div className="flex items-baseline justify-between">
					<button
						type="submit"
						className="px-6 py-2 mt-8 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
						Login
					</button>
				</div>
			</div>
		</form>
	);
};

export default SignUp;
