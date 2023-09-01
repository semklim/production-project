import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { useTheme } from './provider/theme';
import { AppRouter } from './provider/router';

const App = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={setTheme}>Toggle</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<AppRouter />
		</div>
	);
};

export default App;
