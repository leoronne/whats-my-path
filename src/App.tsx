import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
import { createTheme } from './styles/theme';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
