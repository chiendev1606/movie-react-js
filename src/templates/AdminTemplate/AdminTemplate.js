import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import _ from 'lodash';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { TOKEN, user, USER_LOGIN } from '../../util/settings/config';

const { Header, Content, Footer, Sider } = Layout;

const AdminTemplate = ({ Component, ...restProps }) => {
	const userLogin = user;
	const dispatch = useDispatch();

	if (_.isEmpty(userLogin)) return <Redirect to="/" />;
	if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
		alert('Bạn không có quyền truy cập !!');
		return <Redirect to="/" />;
	}
	return (
		<Route
			{...restProps}
			render={propsRoute => {
				return (
					<div className="w-full h-screen ">
						<Layout>
							<Sider
								breakpoint="lg"
								collapsedWidth="0"
								onBreakpoint={broken => {}}
								onCollapse={(collapsed, type) => {}}>
								<div className="p-4">
									<img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="logo" />
								</div>
								<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
									<Menu.Item key="1" icon={<UserOutlined />}>
										<NavLink to="/admin/users">User</NavLink>
									</Menu.Item>
									<SubMenu key="10" icon={<UserOutlined />} title="Films">
										<Menu.Item key="2" icon={<VideoCameraOutlined />}>
											<NavLink to="/admin/films"> Films</NavLink>
										</Menu.Item>
										<Menu.Item key="3" icon={<VideoCameraOutlined />}>
											<NavLink to="/admin/films/add">Add</NavLink>
										</Menu.Item>
									</SubMenu>
								</Menu>
							</Sider>
							<Layout>
								<Header style={{ height: '80px' }}>
									<div className="flex items-center h-full">
										<div className="ml-auto inline-block mr-5">
											<Avatar size={50}>{userLogin.taiKhoan.slice(0, 2)}</Avatar>
										</div>
										<div className="text-white mr-5 ">Chào {userLogin.hoTen} </div>
										<div className="mr-12 ">
											<button
												className="text-blue-400 "
												onClick={() => {
													localStorage.removeItem(USER_LOGIN);
													localStorage.removeItem(TOKEN);
													dispatch.push('/');
												}}>
												Đăng xuất
											</button>
										</div>
									</div>
								</Header>
								<Content style={{ margin: '24px 16px 0' }}>
									<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
										<Component {...propsRoute} />
									</div>
								</Content>
								<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
							</Layout>
						</Layout>
					</div>
				);
			}}
		/>
	);
};

export default AdminTemplate;
