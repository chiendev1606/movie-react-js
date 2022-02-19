import Axios from 'axios';
import { DOMAIN, TOKEN } from '../util/settings/config';

const headers = { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) };

export class baseService {
	put = (url, data) => Axios({ url: `${DOMAIN}${url}`, method: 'put', data, headers });
	post = (url, data) => Axios({ url: `${DOMAIN}${url}`, method: 'post', data, headers });
	delete = url => Axios({ url: `${DOMAIN}${url}`, method: 'delete', headers });
	get = url => Axios({ url: `${DOMAIN}${url}`, method: 'get', headers });
}
