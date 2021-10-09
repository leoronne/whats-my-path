import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { NotFound } from '../../pages';
import { createTheme } from '../../styles/theme';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme()}>
        <NotFound />
      </ThemeProvider>
    </BrowserRouter>
  );
}

describe('NotFound page', () => {
  it('should render UI properly', async () => {
    render(<App />);

    const title = (await waitFor(() => screen.getByRole('heading', { level: 1 }))) as HTMLTitleElement;
    const subtitle = (await waitFor(() => screen.getByRole('heading', { level: 6 }))) as HTMLTitleElement;
    const link = (await waitFor(() => screen.getByText('Return'))) as HTMLLinkElement;

    expect(title.textContent).toBe('Oops, something is wrong');
    expect(subtitle.textContent).toBe('We could not find the page you are looking for');
    expect(link).toBeTruthy();
  });

  it('should redirect to the homepage if user clicks on the return link', async () => {
    render(<App />);

    const title = (await waitFor(() => screen.getByRole('heading', { level: 1 }))) as HTMLTitleElement;
    const subtitle = (await waitFor(() => screen.getByRole('heading', { level: 6 }))) as HTMLTitleElement;
    const link = (await waitFor(() => screen.getByText('Return'))) as HTMLLinkElement;

    expect(title.textContent).toBe('Oops, something is wrong');
    expect(subtitle.textContent).toBe('We could not find the page you are looking for');
    expect(link).toBeTruthy();

    fireEvent.click(link);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });
});
