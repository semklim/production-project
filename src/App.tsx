import { Suspense, lazy, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { useTheme } from './theme/useTheme';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const App = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<div className='btn'>
				<button onClick={setTheme}>Toggle</button>
			</div>
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
