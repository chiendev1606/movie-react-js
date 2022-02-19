import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../../../components/Film/Film';
import CarouselComponent from '../../../../components/Slider/CarouselComponent';
import { getCarouselAction } from '../../../../redux/actions/thunk/CarouselAction';
import { carouselSelector } from '../../../../redux/selectors/carouselSelector';

function HomeCarousel() {
	const dispatch = useDispatch();
	const dataCarousel = useSelector(carouselSelector);

	useEffect(() => {
		dispatch(getCarouselAction());
	}, [dispatch]);

	const renderCarousel = () =>
		dataCarousel.map(item => (
			<div key={item.maPhim}>
				<div
					className="bg-top bg-cover bg-no-repeat h-screen"
					style={{ backgroundImage: `url(${item.hinhAnh})` }}></div>
			</div>
		));

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<>
			<CarouselComponent data={renderCarousel()} settings={settings} />
		</>
	);
}

export default HomeCarousel;
