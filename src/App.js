import { Switch } from 'react-router';
import './App.css';
import ModalTrailer from './components/Modal/Modal';
import Modal from './components/Modal/Modal';
import AddNew from './pages/Admin/Films/AddNew';
import EditFilm from './pages/Admin/Films/EditFilm';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import AddEditUser from './pages/Admin/User/AddEditUser';
import User from './pages/Admin/User/User';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import FilmDetail from './templates/HomeTemplate/Layout/FilmDetail/FilmDetail';
import UserTemplate from './templates/UserTemplate/UserTemplate';

function App() {
	return (
		<>
			<div className="w-full h-screen">
				<Switch>
					<HomeTemplate exact path={['/home', '/']} Component={Home} />
					<HomeTemplate exact path="/news" Component={News} />
					<HomeTemplate exact path="/contact" Component={Contact} />
					<HomeTemplate exact path="/detail/:id" Component={FilmDetail} />
					<HomeTemplate exact path="/profile" Component={Profile} />
					<UserTemplate exact path="/login" title="Login" Component={Login} />
					<UserTemplate exact path="/signup" title="Sign Up" Component={SignUp} />
					<CheckoutTemplate exact path="/checkout/:id" Component={Checkout} />
					<AdminTemplate exact path={['/admin', '/admin/users']} Component={User} />
					<AdminTemplate exact path="/admin/films" Component={Films} />
					<AdminTemplate exact path="/admin/addTime" Component={Showtime} />
					<AdminTemplate exact path="/admin/films/add" Component={AddNew} />
					<AdminTemplate exact path="/admin/films/edit/:id" Component={EditFilm} />
					<AdminTemplate exact path="/admin/films/addTime/:id" Component={Showtime} />
					<AdminTemplate exact path="/admin/users/add" Component={AddEditUser} />
					<AdminTemplate exact path="/admin/users/edit/:id" Component={AddEditUser} />
				</Switch>
			</div>
			<ModalTrailer />
		</>
	);
}

export default App;
