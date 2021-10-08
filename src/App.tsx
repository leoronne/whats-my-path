import { ThemeProvider } from 'styled-components';

import HooksProvider from './hooks';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
import { createTheme } from './styles/theme';

function App() {
  const theme = createTheme();

  return (
    <HooksProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </HooksProvider>
  );
}

export default App;
