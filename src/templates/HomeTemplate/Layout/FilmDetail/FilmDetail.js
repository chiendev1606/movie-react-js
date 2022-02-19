import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinLichChieuPhim } from '../../../../redux/actions/thunk/QuanLyRapAction';
import { filmDetailSelector } from '../../../../redux/selectors/selectors';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import { Progress, Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

function FilmDetail(props) {
	const dispatch = useDispatch();
	const filmDetail = useSelector(filmDetailSelector);

	useEffect(() => {
		dispatch(layThongTinLichChieuPhim({ payload: props.match.params.id }));
	}, [dispatch, props.match.params.id]);

	return (
		<div
			className="fixed w-full"
			style={{
				backgroundImage: `url(${filmDetail.hinhAnh})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<CustomCard
				effectColor="#000" // required
				color="#000" // default color is white
				blur={20} // default blur value is 10px
				borderRadius={1}
				// default border radius value is 10px
				style={{ height: '100vh', width: '100%', padding: 0 }}
				className="w-full h-screen overflow-y-scroll">
				<div className="container mx-auto pt-[150px] ">
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
						<div>
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
			</CustomCard>
		</div>
	);
}

export default FilmDetail;
