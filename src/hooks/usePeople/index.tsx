import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

import { defineMaster } from '../../services/define-master';

interface PeopleContextProps {
  getForcePath: (callback?: Function) => Promise<void>;
  forcePath: 'light' | 'dark' | 'none';
  master: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PeopleProviderProps {
  children: ReactNode;
}

const PeopleContext = createContext<PeopleContextProps>({} as PeopleContextProps);

function PeopleProvider({ children }: PeopleProviderProps) {
  const [forcePath, setForcePath] = useState<'light' | 'dark' | 'none'>('none');
  const [master, setMaster] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getForcePath = useCallback(async (callback?: Function): Promise<void> => {
    try {
      setLoading(true);

      const response = await defineMaster();

      setForcePath(response?.forcePath);
      setMaster(response?.master);

      if (callback) callback();
    } catch (e: any) {
      setForcePath('none');
      setMaster('');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PeopleContext.Provider value={{ getForcePath, forcePath, master, loading, setLoading }}>
      {children}
    </PeopleContext.Provider>
  );
}

const usePeople = (): PeopleContextProps => {
  const context = useContext(PeopleContext);

  if (!context) {
    throw new Error('usePeople must be used within an PeopleProvider');
  }

  return context;
};

export { PeopleProvider, usePeople };
