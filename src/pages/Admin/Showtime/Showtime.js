import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaList } from '../../../redux/actions/thunk/CinemaListAction';
import { getListRapByCinema } from '../../../redux/actions/thunk/QuanLyRapAction';
import { cinemaSelector } from '../../../redux/selectors/CinemaSelector';
import { listRapSelector } from '../../../redux/selectors/selectors';
import { taoLichChieu } from '../../../redux/actions/thunk/QuanLyDatVeAction';

const Showtime = props => {
	const [componentSize, setComponentSize] = useState('default');
	const dispatch = useDispatch();
	const listCinema = useSelector(cinemaSelector);
	const listRap = useSelector(listRapSelector);

	const { values, errors, touched, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
		initialValues: {
			ngayChieuGioChieu: '',
			maRap: '',
			giaVe: null,
		},
		validationSchema: Yup.object().shape({
			ngayChieuGioChieu: Yup.string().required('Chưa thêm ngày giờ chiếu !!!'),
			maRap: Yup.string().required('Chưa có mã rạp'),
			giaVe: Yup.number().typeError('').required('chưa có giá vé'),
		}),
		onSubmit: values => {
			console.log(values);
			dispatch(
				taoLichChieu({
					payload: { ...values, maPhim: Number(props.match.params.id) },
				})
			);
		},
	});

	useEffect(() => {
		dispatch(getCinemaList());
	}, [dispatch]);

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};

	return (
		<div className="w-3/4">
			<Form
				onSubmitCapture={handleSubmit}
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout="horizontal"
				initialValues={{
					size: componentSize,
				}}
				onValuesChange={onFormLayoutChange}
				size={componentSize}>
				<Form.Item label="Form Size" name="size">
					<Radio.Group>
						<Radio.Button value="small">Small</Radio.Button>
						<Radio.Button value="default">Default</Radio.Button>
						<Radio.Button value="large">Large</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="Hệ thống rạp">
					<Cascader
						// style={{ width: '50%' }}
						options={listCinema.map(cinema => {
							return { value: cinema.maHeThongRap, label: cinema.tenHeThongRap };
						})}
						onChange={([value]) => {
							dispatch(getListRapByCinema({ payload: value }));
							setFieldValue('maRap', '');
						}}
					/>
				</Form.Item>
				<Form.Item label="Rạp">
					<Cascader
						value={[values.maRap]}
						name="maRap"
						onChange={([value]) => setFieldValue('maRap', value)}
						options={
							!_.isEmpty(listRap)
								? listRap.map(rap => {
										return {
											value: rap.maCumRap.toString(),
											label: rap.tenCumRap,
										};
								  })
								: []
						}
					/>
					<div className="h-2 text-red-400">{touched.maRap && errors.maRap}</div>
				</Form.Item>

				<Form.Item label="Ngày giờ chiếu">
					<DatePicker
						showTime
						format={'DD/MM/YYYY HH:mm:ss'}
						name="ngayChieuGioChieu"
						onBlur={handleBlur}
						onChange={(value1, value2) => {
							setFieldValue('ngayChieuGioChieu', value2);
						}}
					/>
					<div className="h-2 text-red-400">{touched.ngayChieuGioChieu && errors.ngayChieuGioChieu}</div>
				</Form.Item>

				<Form.Item label="Giá vé">
					<InputNumber
						style={{ width: '25%' }}
						name="giaVe"
						onBlur={handleBlur}
						value={values.giaVe}
						onChange={value => setFieldValue('giaVe', Number(value))}
						stringMode
					/>
					<div className="h-2 text-red-400">{touched.giaVe && errors.giaVe}</div>
				</Form.Item>

				<div className="text-center">
					<Button htmlType="submit">Tạo lịch chiếu</Button>
				</div>
			</Form>
		</div>
	);
};

export default Showtime;
