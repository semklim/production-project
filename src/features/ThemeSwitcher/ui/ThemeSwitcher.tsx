import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/provider/theme';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { setTheme } = useTheme();
	const { className } = props;
	return (
		<AppButton
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={setTheme}
		>
			toggle
		</AppButton>
	);
};

export { ThemeSwitcher };
