import { useHistory } from 'react-router-dom';

import { usePeople } from '../../hooks';

import { BackButton, MastersInformation } from '../../components/application';
import { LoaderSpinner } from '../../components/ui';

import * as Styles from './styles';

function Master() {
  const { getForcePath, forcePath, master, loading } = usePeople();
  const history = useHistory();

  const handleChoosePath = async () => {
    await getForcePath();
  };

  if (forcePath === 'none' && !loading) {
    /*
     * If there is no forcePath defined and it's not loading
     * the user should be redirected to the home page to start
     * frin the beginning
     */
    history.push('/');
    return <></>;
  }

  return (
    <Styles.Container variant={forcePath}>
      <Styles.Header>
        <BackButton variant={forcePath} />
      </Styles.Header>

      <Styles.Main>
        {forcePath !== 'none' && <MastersInformation path={forcePath} name={master} />}
        <Styles.Button type="button" color_scheme={forcePath} onClick={handleChoosePath} disabled={loading}>
          {loading ? <LoaderSpinner /> : <span>choose your path again, Padawan</span>}
        </Styles.Button>
      </Styles.Main>
    </Styles.Container>
  );
}

export default Master;
