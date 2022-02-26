import { Progress, Rate, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layThongTinLichChieuPhim } from '../../../../redux/actions/thunk/QuanLyRapAction';
import { filmDetailByMovieScheduleSelector } from '../../../../redux/selectors/selectors';

function FilmDetail(props) {
	const dispatch = useDispatch();
	const filmDetail = useSelector(filmDetailByMovieScheduleSelector);

	useEffect(() => {
		dispatch(layThongTinLichChieuPhim({ payload: props.match.params.id }));
	}, [dispatch, props.match.params.id]);

	console.log(filmDetail);

	return (
		<>
			<div
				style={{
					height: '100vh',
					width: '100%',
					background: 'rgba(0,0,0,0.5)',
					position: 'fixed',
					zIndex: 1,
				}}></div>
			<div
				style={{
					height: '100vh',
					width: '100%',
					padding: 0,
					backgroundImage: `url(${filmDetail.hinhAnh})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					filter: 'blur(10px)',
					zIndex: '-1',
				}}
				className="h-screen fixed w-full"></div>
			<div className="container mx-auto pt-[150px] relative z-10">
				<div className="flex w-3/4 mx-auto justify-between">
					<div className="flex mr-10">
						<img
							src={filmDetail.hinhAnh}
							style={{ width: '200px', height: 'auto' }}
							alt={filmDetail.tenPhim}
						/>
						<div className="ml-4 text-white">
							<h1 className="text-2xl text-white">{filmDetail.tenPhim}</h1>
							<p className=" w-[500px]">{filmDetail.moTa}</p>
						</div>
					</div>
					<div className="flex flex-col items-center space-y-3">
						<Rate allowHalf value={filmDetail.danhGia / 2} />
						<Progress
							type="circle"
							width={200}
							format={percent => `${percent}%`}
							percent={filmDetail.danhGia * 10}
						/>
					</div>
				</div>
				<div className="bg-white w-3/4 mx-auto mt-10 p-7">
					<Tabs defaultActiveKey="1" centered>
						<Tabs.TabPane key="1" tab="Lịch chiếu">
							<Tabs tabPosition="left">
								{filmDetail.heThongRapChieu?.map((cumRap, idx) => (
									<Tabs.TabPane
										key={idx}
										tab={
											<img
												style={{ width: '50px', height: '50px' }}
												src={cumRap.logo}
												alt={cumRap.tenHeThongRap}
											/>
										}>
										{cumRap.cumRapChieu?.map((rapphim, idx) => (
											<div key={idx} className="flex mb-5 pb-4 border-b-2 border-gray-100">
												<img
													style={{ height: '100px', width: '100px' }}
													className="shrink-0 rounded-md"
													src={rapphim.hinhAnh}
													alt={rapphim.tenCumRap}
												/>
												<div className="ml-3">
													<h3>{rapphim.tenCumRap}</h3>
													<p>{rapphim.diaChi}</p>
													<div className="flex flex-wrap -ml-1">
														{rapphim.lichChieuPhim?.slice(0, 10).map((lichChieu, idx) => (
															<NavLink
																className="m-1 border-blue-400 border-2 rounded-sm p-1 inline-block"
																key={idx}
																to={`/checkout/${lichChieu.maLichChieu}`}>
																{moment(lichChieu.ngayChieuGioChieu).format('HH:ss')}
															</NavLink>
														))}
													</div>
												</div>
											</div>
										))}
									</Tabs.TabPane>
								))}
							</Tabs>
						</Tabs.TabPane>
						<Tabs.TabPane key="2" tab="Thông tin">
							Thông tin
						</Tabs.TabPane>
						<Tabs.TabPane key="3" tab="Đánh giá">
							Đánh giá
						</Tabs.TabPane>
					</Tabs>
				</div>
			</div>
		</>
	);
}

export default FilmDetail;
