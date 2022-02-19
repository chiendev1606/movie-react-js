import { Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaList, getMovieScheduleByCinema } from '../../../redux/actions/thunk/CinemaListAction';
import { cinemaSelector, movieScheduleSelector } from '../../../redux/selectors/CinemaSelector';
const { TabPane } = Tabs;

function CinemaList() {
	const [position, setPosition] = useState('left');
	const dispatch = useDispatch();
	const listCinema = useSelector(cinemaSelector);
	const [listCinemaSub] = useSelector(movieScheduleSelector);

	useEffect(() => {
		dispatch(getCinemaList());
	}, [dispatch]);

	const handleChangeTabCinema = key => {
		if (!key) return;
		dispatch(getMovieScheduleByCinema({ payload: key }));
	};

	return (
		<div className="mt-10">
			<Tabs
				defaultActiveKey={listCinema.length ? listCinema[0].maHeThongRap : ''}
				tabPosition={position}
				onChange={handleChangeTabCinema}>
				{listCinema.map(cinema => (
					<TabPane
						tab={<img className="w-12 h-12" src={cinema.logo} alt={cinema.biDanh} />}
						key={cinema.maHeThongRap}>
						<Tabs tabPosition={position}>
							{listCinemaSub &&
								listCinemaSub.lstCumRap?.map(cinemaSub => (
									<TabPane
										key={cinemaSub.maCumRap}
										tab={
											<div className="flex justify-center items-center">
												<img
													className="w-12 h-12 rounded-full"
													src={cinemaSub.hinhAnh}
													alt={cinema.maHeThongRap}
												/>
												<div className="ml-3 text-sm text-left">
													<div className="text-black">{cinemaSub.tenCumRap}</div>
													<a href="https">Chi tiết</a>
												</div>
											</div>
										}>
										{cinemaSub.danhSachPhim?.map((phim, idx) => (
											<div className="flex mb-5 w-full " key={idx}>
												<div
													className="mr-3 shrink-0 rounded-md overflow-hidden"
													style={{ width: '150px', height: '200px' }}>
													<img
														src={phim.hinhAnh}
														className="block w-full h-full"
														alt={phim.tenPhim}
														onError={e => {
															e.currentTarget.onerror = null;
															e.currentTarget.src = 'https://picsum.photos/200/150';
														}}
													/>
												</div>
												<div>
													<h2 className="text-xl">{phim.tenPhim}</h2>
													<h5>{cinemaSub.diaChi}</h5>
													<div className="w-full flex flex-wrap">
														{phim.lstLichChieuTheoPhim?.slice(0, 9).map((item, idx) => (
															<button key={idx} className="p-1 text-white rounded-xl bg-blue-700 m-1">
																{moment(item.ngayChieuGioChieu).format('HH:mm')}
															</button>
														))}
													</div>
												</div>
											</div>
										))}
									</TabPane>
								))}
						</Tabs>
					</TabPane>
				))}
			</Tabs>
		</div>
	);
}

export default CinemaList;
