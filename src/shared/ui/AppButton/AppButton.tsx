import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';
import { classNames } from 'shared/lib';

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: string;
}

const AppButton: FC<AppButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props;
	return (
		<button className={classNames(cls.appButton, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};

export { AppButton };
