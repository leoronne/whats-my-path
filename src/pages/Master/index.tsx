import { useState } from 'react';

import { BackButton, MastersInformation } from '../../components/application';
import { Button } from '../../components/ui';

import * as Styles from './styles';

function Master() {
  const [path, setPath] = useState<'dark' | 'light'>('light');

  const handleChoosePath = () => {
    setPath(state => (state === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Styles.Container variant={path}>
      <Styles.Header>
        <BackButton variant={path} />
      </Styles.Header>

      <Styles.Main>
        <MastersInformation path={path} name={path === 'light' ? 'Luke Skywalker' : 'Darth Vader'} />
        <Button type="button" color_scheme={path} onClick={handleChoosePath}>
          <span>choose your path again, Padawan</span>
        </Button>
      </Styles.Main>
    </Styles.Container>
  );
}

export default Master;
