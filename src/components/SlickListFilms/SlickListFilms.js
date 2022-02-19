import React from 'react';
import Film from '../Film/Film';
import CarouselComponent from '../Slider/CarouselComponent';

function SlickListFilms({ data, styleArrowPrev, styleArrowNext }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 4,
		arrows: false,
		slidesPerRow: 1,
		rows: 1,
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
				settings={settings}
			/>
		</>
	);
}

export default SlickListFilms;
