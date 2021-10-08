import { createContext, useContext, useState, ReactNode } from 'react';

import api from '../../services/api';

interface PeopleContextProps {
  getPath: () => Promise<void>;
  path: 'light' | 'dark' | 'none';
  master: string;
  loading: boolean;
}

interface PeopleProviderProps {
  children: ReactNode;
}

const PeopleContext = createContext<PeopleContextProps>({} as PeopleContextProps);

function PeopleProvider({ children }: PeopleProviderProps) {
  const [path, setPath] = useState<'light' | 'dark' | 'none'>('none');
  const [master, setMaster] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getPath = async (): Promise<void> => {
    try {
      setLoading(true);

      const lightURL = 'people/1';
      const darkURL = 'people/4';

      const light: Promise<PeopleResponseProps> = api.get(lightURL);
      const dark: Promise<PeopleResponseProps> = api.get(darkURL);
      await Promise.race([light, dark])
        .then(({ data, config }) => {
          setPath(config?.url === lightURL ? 'light' : 'dark');
          setMaster(data?.name);
        })
        .catch((e: any) => {
          throw new Error(e?.message);
        });
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error(e);
      setPath('none');
      setMaster('');
    } finally {
      setLoading(false);
    }
  };

  return <PeopleContext.Provider value={{ getPath, path, master, loading }}>{children}</PeopleContext.Provider>;
}

const usePeople = (): PeopleContextProps => {
  const context = useContext(PeopleContext);

  if (!context) {
    throw new Error('usePeople must be used within an PeopleProvider');
  }

  return context;
};

export { PeopleProvider, usePeople };
