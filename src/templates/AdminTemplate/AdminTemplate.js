import React from 'react';
import { Redirect, Route } from 'react-router';
import { Layout, Menu, Avatar } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import _ from 'lodash';
import { history } from '../../App';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Footer, Sider } = Layout;

const AdminTemplate = ({ Component, ...restProps }) => {
	const user = JSON.parse(localStorage.getItem(USER_LOGIN)) || {};

	if (_.isEmpty(user)) return <Redirect to="/" />;
	if (user.maLoaiNguoiDung !== 'QuanTri') {
		alert('Bạn không có quyền truy cập !!');
		return <Redirect to="/" />;
	}
	return (
		<Route
			{...restProps}
			render={propsRoute => {
				return (
					<Layout className="w-full">
						<Sider
							breakpoint="lg"
							collapsedWidth="0"
							onBreakpoint={broken => {}}
							onCollapse={(collapsed, type) => {}}>
							<div className="p-4">
								<img
									src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
									alt="logo"
								/>
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
										<NavLink to="/admin/films/addnew">Add New</NavLink>
									</Menu.Item>
								</SubMenu>
								<Menu.Item key="5" icon={<UploadOutlined />}>
									<NavLink to="/admin/showtimes">Show time</NavLink>
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout>
							<Header style={{ height: '80px' }}>
								<div className="flex items-center h-full">
									<div className="ml-auto inline-block mr-6">
										<Avatar size={50} src="https://picsum.photos/200" />
									</div>
									<div className="mr-12">
										<button
											className="text-blue-400"
											onClick={() => {
												localStorage.removeItem(USER_LOGIN);
												localStorage.removeItem(TOKEN);
												history.push('/');
												window.location.reload();
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
				);
			}}
		/>
	);
};

export default AdminTemplate;
