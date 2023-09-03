import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/provider/theme';
import { Theme } from 'app/provider/theme/lib/themeContext';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, setTheme } = useTheme();
	const checked = theme === Theme.DARK ? true : false;
	return (
		<label id='switch' className={classNames(cls.switch, {}, [])}>
			<input type='checkbox' onChange={setTheme} id='slider' checked={checked} />
			<span className={classNames(cls.slider, {}, [cls.round, className])}></span>
		</label>
	);
};

export { ThemeSwitcher };
