import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { USER_LOGIN, TOKEN } from '../../../../util/settings/config.js';

function Header() {
	const user = JSON.parse(localStorage.getItem(USER_LOGIN)) || {};
	const [isLogin, setIsLogin] = useState(!_.isEmpty(user));

	return (
		<header className="p-4 text-white bg-opacity-50 bg-black fixed w-full z-10">
			<div className="container flex justify-between h-16 mx-auto">
				<NavLink to="/home" className="flex items-center p-2">
					<img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="movie" />
				</NavLink>

				<ul className="items-stretch hidden space-x-3 lg:flex">
					<li className="flex">
						<NavLink
							to="/home"
							className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
							activeClassName="border-white ">
							Trang chủ
						</NavLink>
					</li>
					<li className="flex">
						<NavLink
							to="/contact"
							className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
							activeClassName="border-white">
							Liên hệ
						</NavLink>
					</li>
					<li className="flex">
						<NavLink
							to="/news"
							className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
							activeClassName="border-white">
							Tin tức
						</NavLink>
					</li>
				</ul>

				<div className="items-center flex-shrink-0 hidden lg:flex">
					{!isLogin ? (
						<>
							<NavLink
								to="/signup"
								className="self-center px-8 py-3 rounded text-coolGray-900  mr-2 text-white">
								Đăng ký
							</NavLink>
							<NavLink
								to="/login"
								className="self-center px-8 py-3 font-semibold rounded text-coolGray-900 text-white">
								Đăng nhập
							</NavLink>
						</>
					) : (
						<>
							<span className="mr-10">Chào {user.hoTen} </span>
							<NavLink
								to="/profile"
								className="self-center px-8 py-3 font-semibold rounded text-coolGray-900 text-white">
								Thông tin cá nhân
							</NavLink>
							{user.maLoaiNguoiDung === 'QuanTri' ? (
								<NavLink
									className="self-center px-8 py-3 font-semibold rounded text-coolGray-900 text-white"
									to="/admin">
									Admin
								</NavLink>
							) : (
								''
							)}
							<button
								className="text-blue-400 z-[200] ml-2"
								onClick={() => {
									localStorage.removeItem(USER_LOGIN);
									localStorage.removeItem(TOKEN);
									setIsLogin(false);
								}}>
								Đăng xuất
							</button>
						</>
					)}
				</div>

				<button className="p-4 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6 text-coolGray-100">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</header>
	);
}

export default Header;
