import { classNames } from 'shared/lib';
import { useTheme } from './provider/theme';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={setTheme}>Toggle</button>
		</div>
	);
};

export default App;
