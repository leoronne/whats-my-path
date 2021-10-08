import { theme } from './theme';

export const createTheme = (customTheme = theme): ThemeProps['theme'] => customTheme;

export * from './theme';
