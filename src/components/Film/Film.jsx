import { PlayCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Film.css';

function Film({ data }) {
	return (
		<div className="p-1">
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front overflow-hidden">
						<div
							className="h-[300px] w-[210px]"
							style={{
								background: `url(${data.hinhAnh}), url('https://picsum.photos/500')`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}></div>
					</div>
					<div className="flip-card-back rounded-t-xl overflow-hidden">
						<div className="relative z-20 h-full w-full">
							<div className="absolute w-full h-full bg-black bg-opacity-60">
								<div className="flex flex-col justify-center items-center h-full px-4">
									<span className="text-3xl">
										<PlayCircleOutlined />
									</span>
									<h2 className="text-white text-xl">{data.tenPhim}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<NavLink
					to={`/detail/${data.maPhim}`}
					className="rounded-b-xl text-white w-[210px] inline-block  text-center  py-1 bg-blue-600 hover:text-gray-300">
					Chi tiết
				</NavLink>
			</div>
		</div>
	);
}

export default Film;
