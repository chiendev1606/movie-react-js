import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/actions/thunk/QuanLyNguoiDungActions';
import { userDetailsSelector } from '../../redux/selectors/selectors';
import CardCheckout from './CardCheckout';

const ResultCheckout = () => {
	const userDetails = useSelector(userDetailsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserDetails());
	}, [dispatch]);

	return (
		<div className="flex justify-center items-center">
			{!userDetails.thongTinDatVe ? (
				<span>Bạn chưa đặt vé nào</span>
			) : (
				<div className=" grid grid-cols-3 gap-3 p-3 w-full">
					{userDetails.thongTinDatVe?.map(item => (
						<CardCheckout key={item.maGhe} {...item} />
					))}
				</div>
			)}
		</div>
	);
};

export default ResultCheckout;
