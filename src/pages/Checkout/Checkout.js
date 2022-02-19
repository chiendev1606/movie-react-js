import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import _ from 'lodash';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Loading from '../../components/Loading/Loading';
import { dispatchActionChooseMovieChair } from '../../redux/actions/sync/actions';
import { datVe, layDanhSachPhongVe } from '../../redux/actions/thunk/QuanLyDatVeAction';
import {
	danhSachGheChonSelector,
	danhSachGheSelector,
	thongTinPhimSelector,
	loadingSelector,
} from '../../redux/selectors/selectors';
import { USER_LOGIN } from '../../util/settings/config';
import './Checkout.css';

function Checkout(props) {
	const dispatch = useDispatch();
	const danhSachGhe = useSelector(danhSachGheSelector);
	const thongTinPhim = useSelector(thongTinPhimSelector);
	const danhSachGheChon = useSelector(danhSachGheChonSelector);
	const isLoading = useSelector(loadingSelector);
	const user = JSON.parse(localStorage.getItem(USER_LOGIN));

	useEffect(() => {
		dispatch(layDanhSachPhongVe({ payload: props.match.params.id }));
	}, [dispatch, props.match.params.id]);

	const checkChairChoose = maGheHienTai =>
		danhSachGheChon.findIndex(ghe => ghe.maGhe === maGheHienTai) !== -1;

	const calcTotal = () =>
		danhSachGhe.reduce((value, ghe) => {
			if (checkChairChoose(ghe.maGhe)) value += ghe.giaVe;
			return value;
		}, 0);

	if (!user) return <Redirect to="/login" />;
	return (
		<>
			{isLoading && <Loading />}
			<div className="container mx-auto mt-20">
				<div className="grid grid-cols-12 gap-10">
					<div className="col-span-8">
						<div>
							<div className="text-xl leading-none text-center text-green-700">Màn hình</div>
							<div className="screen w-full mx-auto"></div>
							<div className="mt-20 flex justify-center">
								<div className="inline-block">
									{danhSachGhe.map((ghe, idx) => (
										<Fragment key={ghe.maGhe}>
											<button
												disabled={ghe.daDat}
												className={` m-1 p-1 text-xs inline-block w-11 h-10 rounded-xl text-white 
                        ${checkChairChoose(ghe.maGhe) ? 'bg-green-400' : ''}
                         ${
														ghe.daDat
															? 'bg-red-600 cursor-no-drop'
															: ghe.loaiGhe === 'Thuong'
															? 'bg-gray-600'
															: 'bg-yellow-400'
													}`}
												style={{
													backgroundColor: `${ghe.taiKhoanNguoiDat === user.taiKhoan ? 'green' : ''}`,
												}}
												onClick={() => dispatch(dispatchActionChooseMovieChair(ghe))}>
												{ghe.daDat ? (
													ghe.taiKhoanNguoiDat === user.taiKhoan ? (
														<CheckOutlined />
													) : (
														<CloseOutlined />
													)
												) : (
													ghe.tenGhe
												)}
											</button>
											{(idx + 1) % 16 === 0 ? <br /> : ''}
										</Fragment>
									))}
								</div>
							</div>
						</div>
						<div className=" mt-10 flex space-x-4 items-center justify-center">
							<div>
								<button className="m-1 p-1 text-xs  inline-block w-11 h-10 rounded-xl text-white bg-yellow-400">
									1
								</button>
								Ghế vip
							</div>
							<div>
								<button className="m-1 p-1 text-xs inline-block w-11 h-10 rounded-xl text-white bg-gray-600">
									1
								</button>
								Ghế Thường
							</div>
							<div>
								<button className="m-1 p-1 text-xs inline-block w-11 h-10 rounded-xl text-white bg-red-600">
									<CloseOutlined />
								</button>
								Ghế Bạn Đã Đặt
							</div>
							<div>
								<button className="m-1 p-1 text-xs inline-block w-11 h-10 rounded-xl text-white bg-green-800">
									<CheckOutlined />
								</button>
								Ghế Đã Đặt
							</div>
						</div>
					</div>
					<div className="col-span-4">
						<section className="border-2 w-full flex flex-col border-black px-5 py-2 divide-y-2 divide-dotted divide-black">
							<div className="text-3xl text-green-600 text-center py-2">
								{calcTotal().toLocaleString()} vnđ
							</div>
							<div className="text-xl text-blue-600 flex justify-center items-center py-3">
								{thongTinPhim.tenPhim}
							</div>
							<div className="flex justify-between items-center py-2">
								<span>Ngày giờ chiếu</span>
								<span>19/12/2022 - 13: 12</span>
							</div>
							<div className="flex justify-between py-2">
								<span>
									{thongTinPhim.tenCumRap} - {thongTinPhim.diaChi}
								</span>
							</div>
							<div className="flex justify-between py-2">
								<span>Rạp</span>
								<span>{thongTinPhim.tenRap}</span>
							</div>
							<div className="flex justify-between items-center py-2 h-[200px]">
								<span className="basis-1/3 shrink-0">Ghế Chọn</span>
								<div className="space-x-2 flex flex-wrap py-2 flex-1">
									{_.sortBy(danhSachGheChon, ['maGhe']).map(ghe => (
										<span
											key={ghe.maGhe}
											className={` p-1 m-1 text-sm text-white rounded-md ${
												ghe.loaiGhe === 'Thuong' ? 'bg-gray-600' : 'bg-yellow-400'
											}`}>
											{ghe.tenGhe}
										</span>
									))}
								</div>
							</div>
							<div className="flex justify-between py-2">
								<span>Email</span>
								<span>{user.email}</span>
							</div>
							<div className="flex justify-between py-2">
								<span>Tài khoản</span>
								<span>{user.taiKhoan}</span>
							</div>
							<div className="py-4">
								<button
									className="w-full py-2 bg-green-500 rounded-md text-white text-xl"
									onClick={() =>
										dispatch(
											datVe({
												payload: {
													maLichChieu: thongTinPhim.maLichChieu,
													danhSachVe: danhSachGheChon,
												},
											})
										)
									}>
									Đặt vé
								</button>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

export default Checkout;
