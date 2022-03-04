import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Form, Input, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
	dispatchActionGetUserDetailAdmin,
	dispatchActionSearchTextUser,
} from '../../../redux/actions/sync/actions';
import { getListUserAll } from '../../../redux/actions/thunk/QuanLyNguoiDungActions';
import { CHANGE_IS_EDIT } from '../../../redux/actions/types/types';
import { listUserFilterByTextSelector, searchTextUserSelector } from '../../../redux/selectors/selectors';
import { MA_NHOM } from '../../../util/settings/config';

const User = () => {
	const listUser = useSelector(listUserFilterByTextSelector);
	const searchText = useSelector(searchTextUserSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getListUserAll());
	}, [dispatch]);

	const columns = [
		{
			title: 'STT',
			key: 'idx',
			render: (text, record, idx) => idx + 1,
		},
		{
			title: 'Tài Khoản',
			dataIndex: 'taiKhoan',
			key: 'taiKhoan',
		},
		{
			title: 'Họ Tên',
			dataIndex: 'hoTen',
			key: 'hoTen',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'soDt',
			key: 'soDt',
		},
		{
			title: 'Thao tác',
			render: (text, record) => (
				<Space size="middle">
					<NavLink to={`/admin/users/edit/${record.taiKhoan}`}>
						<EditOutlined />
					</NavLink>
					<DeleteOutlined />
				</Space>
			),
		},
	];
	return (
		<div>
			<NavLink
				to="/admin/users/add"
				className="text-white text-xl px-2 py-1 bg-green-400 rounded-sm hover:text-yellow-400"
				onClick={() => {
					dispatch(
						dispatchActionGetUserDetailAdmin({
							payload: {
								taiKhoan: '',
								matKhau: '',
								email: '',
								soDt: '',
								maNhom: MA_NHOM,
								maLoaiNguoiDung: '',
								hoTen: '',
							},
						})
					);
					dispatch({ type: CHANGE_IS_EDIT, payload: false });
				}}>
				Thêm người dùng
			</NavLink>
			<div className="mt-4">
				<Form.Item>
					<Input
						value={searchText}
						placeholder="Nhập vào tài khoản hoặc họ tên người dùng ...."
						onChange={e => {
							dispatch(dispatchActionSearchTextUser(e.target.value));
						}}
					/>
				</Form.Item>
			</div>
			<div className="mt-4">
				<Table columns={columns} rowKey="taiKhoan" dataSource={listUser} />
			</div>
		</div>
	);
};

export default User;
