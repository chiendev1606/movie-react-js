import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import Slider from 'react-slick';

function CarouselComponent({ data, settings, styleArrowNext, styleArrowPrev }) {
	const carouselRef = useRef(null);
	const renderArrows = () => {
		return (
			<>
				<button
					className="absolute left-10 top-1/2 translate-y-2/3 z-[100]  text-4xl text-white "
					style={styleArrowPrev ? styleArrowPrev : {}}
					onClick={() => carouselRef.current.slickPrev()}>
					<LeftOutlined />
				</button>
				<button
					className="absolute right-10 top-1/2 translate-y-2/3 z-[100] text-4xl text-white"
					style={styleArrowNext ? styleArrowNext : {}}
					onClick={() => carouselRef.current.slickNext()}>
					<RightOutlined />
				</button>
			</>
		);
	};

	return (
		<div className="relative -mt-2">
			{renderArrows()}
			<Slider ref={carouselRef} {...settings}>
				{data}
			</Slider>
		</div>
	);
}

export default CarouselComponent;
