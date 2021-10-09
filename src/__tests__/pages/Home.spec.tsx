import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import HooksProvider from '../../hooks';
import { defineMaster } from '../../services/define-master';

import { Home } from '../../pages';
import { createTheme } from '../../styles/theme';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../services/define-master');

function App() {
  return (
    <HooksProvider>
      <ThemeProvider theme={createTheme()}>
        <Home />
      </ThemeProvider>
    </HooksProvider>
  );
}

describe('Home page', () => {
  beforeEach(() => {
    mockHistoryPush.mockClear();
  });

  it('should render UI properly', async () => {
    render(<App />);

    const title = (await waitFor(() => screen.getByRole('heading', { level: 1 }))) as HTMLTitleElement;
    const subtitle = (await waitFor(() => screen.getByRole('heading', { level: 6 }))) as HTMLTitleElement;
    const button = (await waitFor(() => screen.getByText('Start'))) as HTMLButtonElement;

    expect(title.textContent).toBe('Welcome to iClinic');
    expect(subtitle.textContent).toBe('Frontend Challenge');
    expect(button).toBeTruthy();
  });

  it('should trigger getForcePath() hook if user clicks on the start button', async () => {
    render(<App />);

    const button = (await waitFor(() => screen.getByText('Start'))) as HTMLButtonElement;
    fireEvent.click(button);

    await waitFor(() => {
      expect(defineMaster).toHaveBeenCalled();
      expect(mockHistoryPush).toHaveBeenCalledWith('/master');
    });
  });

  it('should not be redirected if an error occurs on the getForcePath() hook', async () => {
    (defineMaster as jest.Mock).mockImplementation(() => {
      throw new Error();
    });

    render(<App />);

    const button = (await waitFor(() => screen.getByText('Start'))) as HTMLButtonElement;
    fireEvent.click(button);

    await waitFor(() => {
      expect(defineMaster).toHaveBeenCalled();
      expect(mockHistoryPush).not.toHaveBeenCalled();
    });
  });
});
