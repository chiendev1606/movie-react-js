import { Tabs } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Loading from '../../components/Loading/Loading';
import { loadingSelector } from '../../redux/selectors/selectors';
import { USER_LOGIN } from '../../util/settings/config';
import BookingTicket from './BookingTicket';
import './Checkout.css';
import ResultCheckout from './ResultCheckout';

function Checkout(props) {
	const isLoading = useSelector(loadingSelector);
	const user = JSON.parse(localStorage.getItem(USER_LOGIN));
	const [tabKey, setTabKey] = useState('1');

	const handleChangeTab = key => {
		setTabKey(key);
	};

	if (!user) return <Redirect to="/login" />;
	return (
		<>
			{isLoading && <Loading />}
			<div className="container mx-auto mt-3">
				<Tabs activeKey={tabKey} onChange={handleChangeTab}>
					<Tabs.TabPane key="1" tab={<span className="text-blue text-3xl">Đặt vé</span>}>
						<BookingTicket id={props.match.params.id} user={user} setTabKey={setTabKey} />
					</Tabs.TabPane>
					<Tabs.TabPane key="2" tab={<span className="text-blue text-3xl">Kết quả đặt vé</span>}>
						<ResultCheckout />
					</Tabs.TabPane>
				</Tabs>
			</div>
		</>
	);
}

export default Checkout;
