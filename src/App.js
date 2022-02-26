import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Dasboard from './pages/Admin/Dashboard/Dasboard';
import AddNew from './pages/Admin/Films/AddNew';
import EditFilm from './pages/Admin/Films/EditFilm';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import FilmDetail from './templates/HomeTemplate/Layout/FilmDetail/FilmDetail';

export const history = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<BrowserRouter history={history}>
				<Switch>
					<HomeTemplate exact path={['/home', '/']} Component={Home} />
					<HomeTemplate exact path="/news" Component={News} />
					<HomeTemplate exact path="/contact" Component={Contact} />
					<HomeTemplate exact path="/detail/:id" Component={FilmDetail} />
					<Route exact path="/login" component={Login} />
					<CheckoutTemplate exact path="/checkout/:id" Component={Checkout} />
					<AdminTemplate exact path={['/admin', '/admin/users']} Component={Dasboard} />
					<AdminTemplate exact path="/admin/films" Component={Films} />
					<AdminTemplate exact path="/admin/showtimes" Component={Showtime} />
					<AdminTemplate exact path="/admin/films/addnew" Component={AddNew} />
					<AdminTemplate exact path="/admin/films/edit/:id" Component={EditFilm} />
					<AdminTemplate exact path="/admin/films/addtime/:id" Component={Showtime} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
