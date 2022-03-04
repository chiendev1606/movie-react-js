import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/thunk/QuanLyNguoiDungActions';

function Login() {
	const dispatch = useDispatch();

	const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
		initialValues: {
			name: '',
			password: '',
		},
		validationSchema: yup.object().shape({
			name: yup.string().required('username required !!'),
			password: yup.string().required('password required !!'),
		}),
		onSubmit: ({ name, password }) => {
			dispatch(
				login({
					payload: {
						taiKhoan: name,
						matKhau: password,
					},
				})
			);
		},
	});

	return (
		<form className="mt-10" onSubmit={handleSubmit}>
			<div className="mt-4">
				<div>
					<label className="block" htmlFor="name">
						User name
						<label>
							<input
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
								type="text"
								placeholder="user name"
								name="name"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-2 text-xs tracking-wide text-red-600">
						{touched.name && errors.name && <span>{errors.name}</span>}
					</div>
				</div>
				<div className="mt-4">
					<label className="block">
						Password
						<label>
							<input
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								type="password"
								name="password"
								placeholder="Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</label>
					</label>
					<div className="w-full h-1 m-1 text-xs tracking-wide text-red-600">
						{touched.password && errors.password && <span>{errors.password}</span>}
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
}

export default Login;
