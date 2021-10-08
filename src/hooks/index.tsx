import { ReactNode } from 'react';

import { PeopleProvider, usePeople } from './usePeople';

interface HooksProviderProps {
  children: ReactNode;
}

function HooksProvider({ children }: HooksProviderProps) {
  return <PeopleProvider>{children}</PeopleProvider>;
}

export { usePeople };
export default HooksProvider;
