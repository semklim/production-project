import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { LinksTheme } from 'shared/ui/AppLink/ui/AppLink';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<AppLink to={'/'} theme={LinksTheme.PRIMARY}>
				Main
			</AppLink>
			<AppLink to={'/about'} theme={LinksTheme.PRIMARY}>
				About
			</AppLink>
		</div>
	);
};

export { Navbar };
