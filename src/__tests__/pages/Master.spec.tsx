import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { usePeople } from '../../hooks';

import { Master } from '../../pages';
import darth from '../../assets/img/png/darth.png';
import { createTheme } from '../../styles/theme';

import * as mockMaster from '../../__mocks__/masters';

const mockHistoryPush = jest.fn();
const mockgetForcePath = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../hooks');

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme()}>
        <Master />
      </ThemeProvider>
    </BrowserRouter>
  );
}

describe('Master page', () => {
  beforeEach(() => {
    mockHistoryPush.mockClear();
    mockgetForcePath.mockClear();
  });

  it('should redirect to the homepage if there is no forcePath defined', async () => {
    (usePeople as jest.Mock).mockImplementation(() => ({
      getForcePath: mockgetForcePath,
      loading: false,
      forcePath: 'none',
      master: '',
    }));

    render(<App />);

    await waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('should redirect to the homepage if user clicks on the back link', async () => {
    const master = mockMaster.dark.name;
    (usePeople as jest.Mock).mockImplementation(() => ({
      getForcePath: mockgetForcePath,
      loading: false,
      forcePath: 'dark',
      master,
    }));

    render(<App />);

    const link = (await waitFor(() => screen.getByText('back'))) as HTMLLinkElement;
    fireEvent.click(link);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });

  it('should render the same master setted on the hook', async () => {
    const master = mockMaster.dark.name;
    (usePeople as jest.Mock).mockImplementation(() => ({
      getForcePath: mockgetForcePath,
      loading: false,
      forcePath: 'dark',
      master,
    }));

    render(<App />);

    const masterCaption = (await waitFor(() => screen.getByRole('heading', { level: 2 }))) as HTMLTitleElement;
    const masterImage = await waitFor(() => screen.getByAltText(`${master} visual picture`) as HTMLImageElement);

    await waitFor(() => {
      expect(masterCaption.textContent).toBe(`Your master is ${master}`);
      expect(masterImage.src).toBe(`${window.location.origin}/${darth}`);
    });
  });

  it('should call getForcePath() if user clicks on the button', async () => {
    const master = mockMaster.dark.name;
    (usePeople as jest.Mock).mockImplementation(() => ({
      getForcePath: mockgetForcePath,
      loading: false,
      forcePath: 'dark',
      master,
    }));

    render(<App />);

    const masterCaption = (await waitFor(() => screen.getByRole('heading', { level: 2 }))) as HTMLTitleElement;
    const masterImage = await waitFor(() => screen.getByAltText(`${master} visual picture`) as HTMLImageElement);

    await waitFor(() => {
      expect(masterCaption.textContent).toBe(`Your master is ${master}`);
      expect(masterImage.src).toBe(`${window.location.origin}/${darth}`);
    });

    const button = (await waitFor(() => screen.getByText('choose your path again, Padawan'))) as HTMLButtonElement;
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockgetForcePath).toHaveBeenCalled();
    });
  });
});
