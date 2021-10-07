import { ReactNode } from 'react';

import { Container } from './styles';

interface MasterProps {
  children: ReactNode;
}

function Master({ children }: MasterProps) {
  return (
    <Container>
      <h1>Master</h1>
      {children}
    </Container>
  );
};

export default Master;
