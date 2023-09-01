import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib';

export enum LinksTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	children?: ReactNode;
	theme?: LinksTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
	const { className, children, to, theme = LinksTheme.PRIMARY, ...otherProps } = props;

	return (
		<Link to={to} className={classNames(cls.appLink, {}, [className])} {...otherProps}>
			{children}
		</Link>
	);
};

export { AppLink };
