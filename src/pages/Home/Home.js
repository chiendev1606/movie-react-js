import React from 'react';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import CinemaList from './CinemaList/CinemaList';
import HomeMenu from './HomeMenu/HomeMenu';

function Home() {
	return (
		<>
			<div>
				<HomeCarousel />
			</div>
			<div className="container mx-auto ">
				<HomeMenu />
				<CinemaList />
			</div>
		</>
	);
}

export default Home;
