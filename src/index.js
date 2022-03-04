import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { history } from './redux/configStore';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as signalR from '@aspnet/signalr';
import { DOMAIN } from './util/settings/config';
import { ConnectedRouter } from 'connected-react-router';

export const connection = new signalR.HubConnectionBuilder()
	.withUrl(`${DOMAIN}/DatVeHub`)
	.configureLogging(signalR.LogLevel.Information)
	.build();

connection
	.start()
	.then(function () {
		ReactDOM.render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</Provider>,
			document.getElementById('root')
		);
	})
	.catch(err => console.log(err));
