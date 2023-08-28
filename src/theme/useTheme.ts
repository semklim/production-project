import { useContext} from "react";
import { Theme, ThemeContext, localStorageThemeKey } from "./themeContext";

interface useThemeResult {
  theme: Theme;
  setTheme: () => void;
}

export function useTheme(): useThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

		setTheme(newTheme);
    localStorage.setItem(localStorageThemeKey, newTheme);
	};

  return {theme, setTheme: toggleTheme};
}