import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const App = () => {
	return (
		<div className='app dark'>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
