import _ from 'lodash';
import React from 'react';

const CardCheckout = props => {
	const cinemaInfo = _.uniqBy(props.danhSachGhe, [
		'maHeThongRap',
		'tenHeThongRap',
		'maCumRap',
		'tenCumRap',
		'tenRap',
	])[0];

	return (
		<div className="bg-white rounded-3xl border shadow-xl p-8 w-full">
			<h2 className="text-gray-600 text-xl mb-10 pb-3 border-b-2 border-gray-300 text-center">
				{props.tenPhim}
			</h2>
			<div className="flex justify-between items-center mb-4">
				<img
					src={props.hinhAnh}
					onError={e => {
						e.currentTarget.onerror = null;
						e.currentTarget.src = 'https://picsum.photos/80/120';
					}}
					className="w-20 rounded-md"
					alt={props.tenPhim}
				/>
				<div>
					<span className="font-bold text-green-500"></span>
					<br />
					<p className="font-medium text-xs text-gray-500 flex justify-end">
						{cinemaInfo.tenHeThongRap} - {cinemaInfo.tenCumRap}
					</p>
					<p className="font-medium text-xs text-gray-500 flex justify-end">
						Thời lượng: {props.thoiLuongPhim} phút
					</p>
				</div>
			</div>
			<div>
				<h3 className="font-semibold text-sm text-gray-400">Danh sách ghế</h3>
				<div className="grid grid-cols-6">
					{props.danhSachGhe &&
						_.sortBy(props.danhSachGhe, ['maGhe']).map(ghe => (
							<button className="p-1 m-1 bg-green-600 rounded-md text-white" key={ghe.maGhe}>
								{ghe.tenGhe}
							</button>
						))}
				</div>
			</div>
		</div>
	);
};

export default CardCheckout;
