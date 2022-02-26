import { DatePicker, Form, Input, InputNumber, Radio, Switch } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { getDetailFilm, updateFilm } from '../../../redux/actions/thunk/QuanLyPhimAction';
import { filmDetailSelector } from '../../../redux/selectors/selectors';
import { MA_NHOM } from '../../../util/settings/config';
import _ from 'lodash';

const EditFilm = props => {
	const [componentSize, setComponentSize] = useState('default');
	const [imgSrc, setImgSrc] = useState('');
	const filmDetail = useSelector(filmDetailSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetailFilm({ payload: props.match.params.id }));
	}, [dispatch, props.match.params.id]);

	const { setFieldValue, handleSubmit, handleChange, values, errors, handleBlur, touched, handleReset } =
		useFormik({
			enableReinitialize: true,
			initialValues: {
				tenPhim: filmDetail.tenPhim,
				trailer: filmDetail.trailer,
				moTa: filmDetail.moTa,
				ngayKhoiChieu: moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY'),
				dangChieu: filmDetail.dangChieu,
				hot: filmDetail.sapChieu,
				danhGia: filmDetail.danhGia,
				hinhAnh: null,
				maNhom: MA_NHOM,
			},
			validationSchema: Yup.object().shape({
				tenPhim: Yup.string().required('Tên phim không đc bỏ trống'),
				trailer: Yup.string().required('Trailer không được bỏ trống'),
				moTa: Yup.string().required('mô tả không đc bỏ trống'),
				danhGia: Yup.number().required('đánh giá không đc bỏ trống'),
				ngayKhoiChieu: Yup.string().required('Ngày chiếu không đc đc bỏ trống '),
			}),
			onSubmit: values => {
				const formData = new FormData();
				for (let key in values) {
					formData.append(key, values[key]);
					if (key === 'hinhAnh' && values['hinhAnh']) {
						formData.append('File', values.hinhAnh, values.hinhAnh.name);
					}
				}
				formData.append('maPhim', filmDetail.maPhim);
				dispatch(updateFilm({ payload: formData }));
			},
		});

	const handleSetFieldValue = name => value => setFieldValue(name, value);

	const handleUploadImg = async e => {
		const file = e.target.files[0];
		const reader = new FileReader();

		if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
			alert('please choose jpeg, jpg, png');
			return;
		}
		await setFieldValue('hinhAnh', file);

		reader.readAsDataURL(file);
		reader.onload = e => {
			setImgSrc(e.target.result);
		};
	};

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};

	return (
		<Form
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
			onSubmitCapture={handleSubmit}
			size={componentSize}>
			<Form.Item label="Form Size" name="size">
				<Radio.Group>
					<Radio.Button value="small">Small</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="large">Large</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<Form.Item label="Tên Phim">
				<Input name="tenPhim" onChange={handleChange} onBlur={handleBlur} value={values.tenPhim} />
				<div className="h-2 text-red-600">{touched.tenPhim && errors.tenPhim}</div>
			</Form.Item>
			<Form.Item label="Trailer">
				<Input name="trailer" onChange={handleChange} value={values.trailer} onBlur={handleBlur} />
				<div className="h-2 text-red-600">{touched.trailer && errors.trailer}</div>
			</Form.Item>
			<Form.Item label="Mô tả">
				<Input name="moTa" onChange={handleChange} value={values.moTa} onBlur={handleBlur} />
				<div className="h-2 text-red-600">{touched.moTa && errors.moTa}</div>
			</Form.Item>
			<Form.Item label="Ngày khởi chiếu">
				<DatePicker
					format={'DD/MM/YYYY'}
					name="ngayKhoiChieu"
					value={moment(values.ngayKhoiChieu, 'DD/MM/YYYY')}
					onBlur={handleBlur}
					onChange={(e, value) => {
						setFieldValue('ngayKhoiChieu', value);
					}}
				/>
				<div className="h-2 text-red-600">{touched.ngayKhoiChieu && errors.ngayKhoiChieu}</div>
			</Form.Item>
			<Form.Item label="Đang chiếu">
				<Switch checked={values.dangChieu} onChange={handleSetFieldValue('dangChieu')} />
			</Form.Item>
			<Form.Item label="Hot">
				<Switch checked={values.hot} onChange={handleSetFieldValue('hot')} />
			</Form.Item>
			<Form.Item label="Đánh giá">
				<InputNumber
					onBlur={handleBlur}
					value={values.danhGia}
					name="danhGia"
					onChange={handleSetFieldValue('danhGia')}
					min={1}
					max={10}
				/>
				<div className="h-2 text-red-600">{touched.danhGia && errors.danhGia}</div>
			</Form.Item>
			<Form.Item label="hình ảnh">
				<input onBlur={handleBlur} name="hinhAnh" type="file" onChange={handleUploadImg} />
				<div className="h-2 text-red-600">{touched.hinhAnh && errors.hinhAnh}</div>
				<br />
				<img src={imgSrc || filmDetail.hinhAnh} style={{ width: '100px' }} alt="..." />
			</Form.Item>

			<div className="text-center">
				<button type="submit" className="bg-blue-500 text-white p-2 ">
					Cập nhật
				</button>
			</div>
		</Form>
	);
};

export default EditFilm;
