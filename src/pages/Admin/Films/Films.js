import { CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Popconfirm, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dispatchActionGetSearchText } from '../../../redux/actions/sync/actions';
import { getListFilms } from '../../../redux/actions/thunk/listFilmsAction';
import { deleteFilm } from '../../../redux/actions/thunk/QuanLyPhimAction';
import { listFilmsFilterBySearch, searchTextSelector } from '../../../redux/selectors/ListFilmsSelector';

const Films = () => {
	const listFilms = useSelector(listFilmsFilterBySearch);
	const searchText = useSelector(searchTextSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getListFilms());
	}, [dispatch]);

	const handleDeleleFilm = maPhim => dispatch(deleteFilm({ payload: maPhim }));

	const columns = [
		{
			title: 'Mã phim',
			dataIndex: 'maPhim',
			key: 'maPhim',
			sorter: (a, b) => a.maPhim - b.maPhim,
			sortDirections: ['descend'],
		},
		{
			title: 'Tên Phim',
			dataIndex: 'tenPhim',
			key: 'tenPhim',
		},
		{
			title: 'Hình ảnh',
			dataIndex: 'hinhAnh',
			key: 'hinhAnh',
			render: (src, record) => (
				<img
					src={src}
					className="w-12"
					onError={e => {
						e.currentTarget.onerror = null;
						e.currentTarget.src = 'https://picsum.photos/48';
					}}
					alt={record.maPhim}
				/>
			),
		},
		{
			title: 'Mô tả',
			dataIndex: 'moTa',
			key: 'moTa',
			render: text => text.slice(0, 60) + '...',
		},
		{
			title: 'Hành động',
			render: record => (
				<div className="text-white ">
					<Popconfirm
						placement="topLeft"
						title="Bạn có muốn xóa phim không ?"
						okText="yes"
						cancelText="no"
						onConfirm={() => handleDeleleFilm(record.maPhim)}>
						<button className="text-red-600 text-xl">
							<DeleteOutlined />
						</button>
					</Popconfirm>
					<button className="mx-2">
						<NavLink className="text-green-700 text-xl" to={`/admin/films/edit/${record.maPhim}`}>
							<EditOutlined />
						</NavLink>
					</button>
					<button className="text-yellow-400 text-xl">
						<NavLink to={`/admin/films/addtime/${record.maPhim}`}>
							<CalendarOutlined />
						</NavLink>
					</button>
				</div>
			),
		},
	];
	return (
		<>
			<div className="w-1/2">
				<Input
					value={searchText}
					onChange={e => {
						dispatch(dispatchActionGetSearchText(e.target.value));
					}}
					type="text"
					placeholder="Search text..."
				/>
			</div>
			<div className="mt-3">
				<button className="ml-2 py-1 px-2 border-2 rounded-md border-blue-500 text-blue-500">
					<NavLink to="/admin/films/addnew">Thêm phim mới</NavLink>
				</button>
			</div>
			<div className="mt-4">
				<Table pagination={{ pageSize: 8 }} rowKey="maPhim" columns={columns} dataSource={listFilms} />
			</div>
		</>
	);
};

export default Films;
