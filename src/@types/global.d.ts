type ColorsProps = {
  [key in 'accent' | 'light' | 'dark']: {
    base: string;
    text: string;
    button?: {
      background: string;
      text: string;
      hover: string;
    };
  };
};

type BorderRadiusProps = {
  [key in 'small' | 'base' | 'large']: string;
};

type TypographyProps = {
  [key in 'h1' | 'h2' | 'h6' | 'button' | 'link']: {
    [key: string]: string | number;
  };
};

type TransitionsProps = {
  easeInOut: {
    slow: string;
    base: string;
    fast: string;
  };
};

interface ThemeProps {
  theme: {
    colors: ColorsProps;
    borderRadius: BorderRadiusProps;
    transitions: TransitionsProps;
    typography: TypographyProps;
  };
}
