import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlickListFilms from '../../../components/SlickListFilms/SlickListFilms';
import { getListFilms } from '../../../redux/actions/thunk/listFilmsAction';
import {
	listFilmsDangChieuSelector,
	listFilmsSapChieuSelector,
} from '../../../redux/selectors/ListFilmsSelector';

const { TabPane } = Tabs;

const styleArrowNext = { top: '30%', fontWeight: 'bold', fontSize: '40px', right: '-4%', color: '#212121' };

const styleArrowPrev = { top: '30%', fontWeight: 'bold', fontSize: '40px', left: '-4%', color: '#212121' };

function HomeMenu() {
	const dispatch = useDispatch();
	const listFilmsDangChieu = useSelector(listFilmsDangChieuSelector);
	const listFilmsSapChieu = useSelector(listFilmsSapChieuSelector);

	useEffect(() => {
		dispatch(getListFilms());
	}, [dispatch]);

	function callback(key) {}
	return (
		<Tabs defaultActiveKey="1" style={{ overflow: 'visible' }} onChange={callback}>
			<TabPane tab="Phim đang chiếu" key="1" tabBarStyle={{ border: '1px solid black' }}>
				<SlickListFilms
					data={listFilmsDangChieu}
					styleArrowPrev={styleArrowPrev}
					styleArrowNext={styleArrowNext}
				/>
			</TabPane>
			<TabPane tab="Phim sắp chiếu" key="2">
				<SlickListFilms
					data={listFilmsSapChieu}
					styleArrowPrev={styleArrowPrev}
					styleArrowNext={styleArrowNext}
				/>
			</TabPane>
		</Tabs>
	);
}

export default HomeMenu;
