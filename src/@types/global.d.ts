type ColorsProps = {
  [key in 'accent' | 'light' | 'dark' | 'none' | 'disabled']: {
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

interface PeopleResponseProps extends AxiosResponse {
  config: {
    url: string;
  };
  data: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  };
}
