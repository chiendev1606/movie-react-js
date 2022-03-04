import { Form, Input, Select } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
	isEditUserSelector,
	userDetailByAdminSelector,
	userTypeSelector,
} from '../../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import {
	getUserType,
	createUserByAdmin,
	getUserDetailsByAdmin,
	updateProfile,
} from '../../../redux/actions/thunk/QuanLyNguoiDungActions';
import { dispatchActionGetUserDetailAdmin } from '../../../redux/actions/sync/actions';
import { MA_NHOM } from '../../../util/settings/config';
import { CHANGE_IS_EDIT } from '../../../redux/actions/types/types';

const AddEditUser = props => {
	const isEdit = useSelector(isEditUserSelector);
	const user = useSelector(userDetailByAdminSelector);
	const dispatch = useDispatch();
	const userType = useSelector(userTypeSelector);

	useEffect(() => {
		if (props.match.params.id) {
			dispatch(getUserDetailsByAdmin({ payload: props.match.params.id }));
		}
	}, [dispatch, props.match.params.id]);

	useEffect(() => {
		dispatch(getUserType());
	}, [dispatch]);

	const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue, handleReset } =
		useFormik({
			enableReinitialize: isEdit,
			initialValues: { ...user },
			validationSchema: Yup.object().shape({
				taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
				email: Yup.string().email().required('email không được bỏ trống !!!'),
				soDt: Yup.number()
					.typeError('Số điện thoại phải là số !!!')
					.required('Số điện thoại không được bỏ trống'),
				matKhau: Yup.string().required('Mật khẩu không được bỏ trống !!!'),
				hoTen: Yup.string().required('Họ tên không được bỏ trống !!'),
				maLoaiNguoiDung: Yup.string().required('Mã người dùng không được bỏ trống !!!'),
			}),
			onSubmit: values => {
				if (isEdit) {
					dispatch(updateProfile({ payload: values }));
				} else {
					dispatch(createUserByAdmin({ payload: values, handleReset }));
				}
			},
		});

	const configInput = key => ({ onChange: handleChange, onBlur: handleBlur, value: values[key], name: key });

	const handleError = key => <div className="h-2 text-left text-red-500">{touched[key] && errors[key]}</div>;

	return (
		<div>
			<Form
				layout="horizontal"
				wrapperCol={{ span: 16 }}
				labelCol={{ span: 5 }}
				onSubmitCapture={handleSubmit}>
				<div className="grid grid-cols-2">
					<Form.Item label="Tài khoản">
						<Input disabled={isEdit} {...configInput('taiKhoan')} />
						{handleError('taiKhoan')}
					</Form.Item>
					<Form.Item label="Email">
						<Input {...configInput('email')} />
						{handleError('email')}
					</Form.Item>
					<Form.Item label="Mật khẩu">
						<Input.Password {...configInput('matKhau')} />
						{handleError('matKhau')}
					</Form.Item>
					<Form.Item label="Số điện thoại">
						<Input {...configInput('soDt')} />
						{handleError('soDt')}
					</Form.Item>
					<Form.Item label="Họ tên">
						<Input {...configInput('hoTen')} />
						{handleError('hoTen')}
					</Form.Item>
					<Form.Item label="Loại người dùng">
						<Select
							name="maLoaiNguoiDung"
							value={values.maLoaiNguoiDung}
							onBlur={handleBlur}
							onChange={value => setFieldValue('maLoaiNguoiDung', value)}>
							{userType.map(item => (
								<Select.Option key={item.maLoaiNguoiDung} value={item.maLoaiNguoiDung}>
									{item.tenLoai}
								</Select.Option>
							))}
						</Select>
						{handleError('maLoaiNguoiDung')}
					</Form.Item>
				</div>
				<div className="text-center">
					<button type="submit" className="bg-blue-400 text-white px-2 py-1">
						{isEdit ? 'Cập nhật' : 'Thêm người dùng'}
					</button>
				</div>
			</Form>
			<div className="pl-10 mt-4">
				<button onClick={() => props.history.goBack()} className=" text-blue-400 underline text-xl">
					Trở lại
				</button>
			</div>
		</div>
	);
};

export default AddEditUser;
