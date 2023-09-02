import { classNames } from 'shared/lib';
import { useTheme } from './provider/theme';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};

export default App;
