import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<>Loading ...</>}>
				<Routes>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
