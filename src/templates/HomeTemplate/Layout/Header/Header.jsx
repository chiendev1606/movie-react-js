import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className="p-4 text-white bg-opacity-50 bg-black fixed w-full z-10">
			<div className="container flex justify-between h-16 mx-auto">
				<NavLink to="/home" className="flex items-center p-2">
					<img
						src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
						alt="cyberlogo"
					/>
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
					<NavLink
						to="/signup"
						className="self-center px-8 py-3 rounded text-coolGray-900 bg-blue-400 mr-2 text-white">
						Đăng ký
					</NavLink>
					<NavLink
						to="/login"
						className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-coolGray-900 text-white">
						Đăng nhập
					</NavLink>
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
