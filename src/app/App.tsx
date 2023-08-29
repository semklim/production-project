import { ComponentType, FC, Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from 'shared/ui/Loader';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/provider/theme';

const AboutPage = lazy(() => import('pages/MainPage'));
const MainPage = lazy(() => import('pages/MainPage'));

const App = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
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
