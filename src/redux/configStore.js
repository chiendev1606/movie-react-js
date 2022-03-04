import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import bannerReducer from './reducers/bannerReducer';
import cinemaReducer from './reducers/cinemaReducer';
import filmDetailReducer from './reducers/filmDetailReducer';
import filmsManagementReducer from './reducers/filmsManagementReducer';
import listFilmsReducer from './reducers/ListFilmsReducer';
import LoadingReducer from './reducers/LoadingReducer';
import roomCinemaReducer from './reducers/roomCinemaReducer';
import userLoginReducer from './reducers/userLoginReducer';
import userManagementReducer from './reducers/userManagementReducer';
import modalReducer from './reducers/modalReducer';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const rooReducer = history =>
	combineReducers({
		router: connectRouter(history),
		bannerReducer,
		listFilmsReducer,
		cinemaReducer,
		filmDetailReducer,
		userLoginReducer,
		roomCinemaReducer,
		LoadingReducer,
		filmsManagementReducer,
		userManagementReducer,
		modalReducer,
	});

const store = createStore(rooReducer(history), composeWithDevTools(applyMiddleware(...middleware)));

export default store;
