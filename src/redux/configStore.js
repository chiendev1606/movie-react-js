import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bannerReducer from './reducers/bannerReducer';
import listFilmsReducer from './reducers/ListFilmsReducer';
import cinemaReducer from './reducers/cinemaReducer';
import filmDetailReducer from './reducers/filmDetailReducer';
import userLoginReducer from './reducers/userLoginReducer';
import roomCinemaReducer from './reducers/roomCinemaReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import LoadingReducer from './reducers/LoadingReducer';
import filmsManagementReducer from './reducers/filmsManagementReducer';

const middleware = [thunk];

const rooReducer = combineReducers({
	bannerReducer,
	listFilmsReducer,
	cinemaReducer,
	filmDetailReducer,
	userLoginReducer,
	roomCinemaReducer,
	LoadingReducer,
	filmsManagementReducer,
});

const store = createStore(rooReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
