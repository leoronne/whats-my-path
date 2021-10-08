export type ThemeProperty = Record<string, any>;

export const colors: ColorsProps = {
  accent: {
    base: 'rgba(44, 151, 209, 1)',
    text: 'rgba(44, 151, 209, 1)',
    button: {
      background: 'rgba(44, 151, 209, 1)',
      text: 'rgba(255, 255, 255, 1)',
      hover: 'rgba(44, 151, 209, 0.85)',
    },
  },
  dark: {
    base: 'rgba(43, 43, 43, 1)',
    text: 'rgba(255, 255, 255, 1)',
    button: {
      background: 'rgba(255, 255, 255, 1)',
      text: 'rgba(42, 42, 42, 1)',
      hover: 'rgba(255, 255, 255, 0.85)',
    },
  },
  light: {
    base: 'rgba(251, 254, 99, 1)',
    text: 'rgba(42, 42, 42, 1)',
    button: {
      background: 'rgba(42, 42, 42, 1)',
      text: 'rgba(251, 254, 99, 1)',
      hover: 'rgba(42, 42, 42, 0.93)',
    },
  },
};

export const transitions: TransitionsProps = {
  easeInOut: {
    slow: '0.9s ease-in-out',
    base: '0.6s ease-in-out',
    fast: '0.3s ease-in-out',
  },
};

export const borderRadius: BorderRadiusProps = {
  small: '4px',
  base: '10px',
  large: '16px',
};

export const typography: TypographyProps = {
  h1: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '72px',
    fontWeight: 'normal',
    lineHeight: '88px',
  },
  h2: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '36px',
    fontWeight: '400',
    lineHeight: '44px',
  },
  h6: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '17px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
  },
  link: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '18px',
    lineHeight: '22px',
    textDecoration: 'none',
  },
};

export const theme: ThemeProps['theme'] = {
  colors,
  borderRadius,
  typography,
  transitions,
};
