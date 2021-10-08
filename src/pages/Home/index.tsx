import { useHistory } from 'react-router-dom';

import * as Styles from './styles';

function Home() {
  const history = useHistory();

  const handleStart = () => {
    history.push('/master');
  };

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title color_scheme="accent">
          Welcome to <strong>iClinic</strong>
        </Styles.Title>
        <Styles.SubTitle color_scheme="accent">Frontend Challenge</Styles.SubTitle>
      </Styles.Header>
      <Styles.Main>
        <Styles.Button type="button" color_scheme="accent" onClick={handleStart}>
          <span>Start</span>
        </Styles.Button>
      </Styles.Main>
    </Styles.Container>
  );
}

export default Home;
