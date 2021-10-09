import { waitFor } from '@testing-library/react';
import { act as actHook, renderHook } from '@testing-library/react-hooks';

import { defineMaster } from '../../services/define-master';
import { PeopleProvider, usePeople } from '../../hooks/usePeople';

import * as mockMaster from '../../__mocks__/masters';

jest.mock('../../services/define-master');

describe('usePeople hook', () => {
  it('should have initial states on the first render', async () => {
    await actHook(async () => {
      const { result } = renderHook(() => usePeople(), {
        wrapper: PeopleProvider,
      });

      await waitFor(() => {
        expect(result.current.loading).toStrictEqual(false);
        expect(result.current.master).toStrictEqual('');
        expect(result.current.forcePath).toBe('none');
      });
    });
  });

  it('should trigger the callback if it passed to the getForcePath() function', async () => {
    const master = mockMaster.dark.name;
    (defineMaster as jest.Mock).mockImplementation(() => {
      return new Promise(resolve => resolve({ forcePath: 'dark', master }));
    });

    await actHook(async () => {
      const mockCallback = jest.fn();

      const { result } = renderHook(() => usePeople(), {
        wrapper: PeopleProvider,
      });

      await result.current.getForcePath(mockCallback);

      await waitFor(() => {
        expect(mockCallback).toHaveBeenCalled();
        expect(defineMaster).toHaveBeenCalled();
        expect(result.current.loading).toStrictEqual(false);
        expect(result.current.master).toStrictEqual(master);
        expect(result.current.forcePath).toBe('dark');
      });
    });
  });

  describe('should be able to set forcePath and master', () => {
    it('should set master as Darth Vader if Dark Force responds first', async () => {
      const master = mockMaster.dark.name;
      (defineMaster as jest.Mock).mockImplementation(() => {
        return new Promise(resolve => resolve({ forcePath: 'dark', master }));
      });

      await actHook(async () => {
        const { result } = renderHook(() => usePeople(), {
          wrapper: PeopleProvider,
        });

        await result.current.getForcePath();

        await waitFor(() => {
          expect(defineMaster).toHaveBeenCalled();
          expect(result.current.loading).toStrictEqual(false);
          expect(result.current.master).toStrictEqual(master);
          expect(result.current.forcePath).toBe('dark');
        });
      });
    });

    it('should set master as Luke Skywalker if Dark Force responds first', async () => {
      const master = mockMaster.light.name;
      (defineMaster as jest.Mock).mockImplementation(() => {
        return new Promise(resolve => resolve({ forcePath: 'light', master }));
      });

      await actHook(async () => {
        const { result } = renderHook(() => usePeople(), {
          wrapper: PeopleProvider,
        });

        await result.current.getForcePath();

        await waitFor(() => {
          expect(defineMaster).toHaveBeenCalled();
          expect(result.current.loading).toStrictEqual(false);
          expect(result.current.master).toStrictEqual(master);
          expect(result.current.forcePath).toBe('light');
        });
      });
    });

    it('should set master and path as the initial values if an error occurs', async () => {
      (defineMaster as jest.Mock).mockImplementation(() => {
        throw new Error('');
      });

      await actHook(async () => {
        const { result } = renderHook(() => usePeople(), {
          wrapper: PeopleProvider,
        });

        await result.current.getForcePath();

        await waitFor(() => {
          expect(defineMaster).toHaveBeenCalled();
          expect(result.current.loading).toStrictEqual(false);
          expect(result.current.master).toStrictEqual('');
          expect(result.current.forcePath).toBe('none');
        });
      });
    });
  });
});
