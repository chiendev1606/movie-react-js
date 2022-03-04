import { Form, Input, Tabs } from 'antd';
import { useFormik } from 'formik';
import _ from 'lodash';
import * as Yup from 'yup';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateProfile } from '../../redux/actions/thunk/QuanLyNguoiDungActions';
import { userDetailsSelector } from '../../redux/selectors/selectors';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import { user } from '../../util/settings/config';

const { TabPane } = Tabs;
const Profile = () => {
	const dispatch = useDispatch();
	const userDetails = useSelector(userDetailsSelector);

	const { values, errors, handleBlur, handleSubmit, handleChange, touched } = useFormik({
		initialValues: { ...user },
		validationSchema: Yup.object().shape({
			email: Yup.string().email().required('email không được bỏ trống !!!'),
			soDT: Yup.number()
				.typeError('Số điện thoại phải là số !!!')
				.required('Số điện thoại không được bỏ trống'),
			matKhau: Yup.string().required('Mật khẩu không được bỏ trống !!!'),
			hoTen: Yup.string().required('Họ tên không được bỏ trống !!'),
		}),
		onSubmit: values => {
			dispatch(updateProfile({ payload: values }));
		},
	});

	const configInput = key => ({ onChange: handleChange, onBlur: handleBlur, value: values[key], name: key });

	const handleError = key => <div className="h-2 text-left text-red-500">{touched[key] && errors[key]}</div>;

	useEffect(() => {
		dispatch(getUserDetails());
	}, [dispatch]);

	function callback(key) {}
	return (
		<>
			<div>
				<HomeCarousel />
			</div>
			<div className="container mx-auto mt-4">
				<Tabs defaultActiveKey="1" onChange={callback}>
					<TabPane tab="Thông tin cá nhân" key="1">
						<div className="py-5 text-center">
							<Form
								labelCol={{ span: 4 }}
								wrapperCol={{ span: 14 }}
								layout="horizontal"
								onSubmitCapture={handleSubmit}>
								<div className="grid grid-cols-2">
									<Form.Item label="Email">
										<Input {...configInput('email')} />
										{handleError('email')}
									</Form.Item>
									<Form.Item label="Tài khoản">
										<Input {...configInput('taiKhoan')} disabled />
										{handleError('taiKhoan')}
									</Form.Item>
									<Form.Item label="Số điện thoại">
										<Input {...configInput('soDT')} />
										{handleError('soDT')}
									</Form.Item>
									<Form.Item label="Mật khẩu">
										<Input.Password {...configInput('matKhau')} />
										{handleError('matKhau')}
									</Form.Item>
									<Form.Item label="Họ và tên">
										<Input {...configInput('hoTen')} />
										{handleError('hoTen')}
									</Form.Item>
								</div>
								<button type="submit" className="bg-green-400 py-2 px-4 text-white rounded-sm">
									Cập nhật thông tin
								</button>
							</Form>
						</div>
					</TabPane>
					<TabPane tab="Lịch sử đặt vé" key="2">
						{userDetails.thongTinDatVe?.map(item => {
							const tenHeThongRap = _.uniqBy(item.danhSachGhe, ['tenHeThongRap'])[0].tenHeThongRap;

							return (
								<div className="flex mt-4" key={item.maVe}>
									<img
										src={item.hinhAnh}
										style={{ width: '200px' }}
										onError={e => {
											e.currentTarget.onerror = null;
											e.currentTarget.src = 'https://picsum.photos/200/300';
										}}
										alt={item.tenPhim}
										className="shrink-0"
									/>
									<div className="flex-1">
										<div className="ml-10 ">
											<p className="font-bold">{tenHeThongRap} </p>
											<p className="font-bold">
												Thời gian: {moment(item.ngayDat).format('DD/MM/YYYY HH:mm')}{' '}
											</p>

											<div className="flex flex-wrap">
												{_.sortBy(item.danhSachGhe, ['maGhe'])
													.slice(0, 10)
													.map(ghe => (
														<p key={ghe.maGhe} className="w-1/4">
															<button className="bg-green-400 text-white w-10 rounded-sm mr-1">
																{ghe.tenGhe}
															</button>
															- {ghe.tenRap}
														</p>
													))}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</TabPane>
				</Tabs>
			</div>
		</>
	);
};

export default Profile;
