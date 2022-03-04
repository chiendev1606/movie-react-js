export const DOMAIN = 'http://movieapi.cyberlearn.vn';
export const TOKEN = 'accessToken';
export const GROUPID = 'GP01';
export const USER_LOGIN = 'USER_LOGIN';

export const MA_NHOM = 'GP05';

export const user = JSON.parse(localStorage.getItem(USER_LOGIN)) || {};

export const STATUS_API = {
	SUCCESS: 200,
};
