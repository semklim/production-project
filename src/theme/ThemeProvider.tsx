import { FC, ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext, localStorageThemeKey } from './themeContext';

const defaultTheme = (localStorage.getItem(localStorageThemeKey) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const themeSettings = useMemo(() => {
		return {
			theme,
			setTheme,
		};
	}, [theme]);

	return <ThemeContext.Provider value={themeSettings}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
