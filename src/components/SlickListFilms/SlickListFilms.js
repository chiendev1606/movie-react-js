import React from 'react';
import Film from '../Film/Film';
import CarouselComponent from '../Slider/CarouselComponent';

function SlickListFilms({ data, styleArrowPrev, styleArrowNext }) {
	let settings_1 = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 4,
		arrows: false,
		slidesPerRow: 1,
		rows: 2,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					slidesPerRow: 2,
					rows: 2,
					infinite: true,
					dots: false,
					arrows: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					slidesPerRow: 1,
					rows: 2,
					infinite: true,
					dots: false,
				},
			},
		],
	};

	const renderListFilms = () =>
		data.map(film => (
			<div className="" key={film.maPhim}>
				<Film data={film} />
			</div>
		));

	return (
		<>
			<CarouselComponent
				styleArrowNext={styleArrowNext}
				styleArrowPrev={styleArrowPrev}
				data={renderListFilms()}
				settings={settings_1}
			/>
		</>
	);
}

export default SlickListFilms;
