import { useHistory } from 'react-router-dom';

import { usePeople } from '../../hooks';

import { BackButton, MastersInformation } from '../../components/application';
import { LoaderSpinner } from '../../components/ui';

import * as Styles from './styles';

function Master() {
  const history = useHistory();
  const { getPath, path, master, loading } = usePeople();

  const handleChoosePath = async () => {
    await getPath();
  };

  if (path === 'none' && !loading) {
    history.push('/');
    return <></>;
  }

  return (
    <Styles.Container variant={path}>
      <Styles.Header>
        <BackButton variant={path} />
      </Styles.Header>

      <Styles.Main>
        <MastersInformation path={path} name={master} />
        <Styles.Button type="button" color_scheme={path} onClick={handleChoosePath} disabled={loading}>
          {loading ? <LoaderSpinner /> : <span>choose your path again, Padawan</span>}
        </Styles.Button>
      </Styles.Main>
    </Styles.Container>
  );
}

export default Master;
