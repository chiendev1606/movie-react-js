import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import FilmDetail from './templates/HomeTemplate/Layout/FilmDetail/FilmDetail';

export const history = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<BrowserRouter history={history}>
				<Switch>
					{/* <HomeTemplate exact path="/" Component={Home} /> */}
					<HomeTemplate exact path={['/home', '/']} Component={Home} />
					<HomeTemplate exact path="/news" Component={News} />
					<HomeTemplate exact path="/contact" Component={Contact} />
					<HomeTemplate exact path="/detail/:id" Component={FilmDetail} />
					<Route exact path="/login" component={Login} />
					<CheckoutTemplate exact path="/checkout/:id" Component={Checkout} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
