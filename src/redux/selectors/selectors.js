export const filmDetailSelector = state => state.filmDetailReducer;
export const danhSachGheSelector = state => state.roomCinemaReducer.danhSachGhe;
export const thongTinPhimSelector = state => state.roomCinemaReducer.thongTinPhim;
export const danhSachGheChonSelector = state => state.roomCinemaReducer.danhSachGheChon;
export const loadingSelector = state => state.LoadingReducer.isLoading;