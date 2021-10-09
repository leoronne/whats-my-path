import { Typography, Icons } from '../../components/ui';

import * as Styles from './styles';

function NotFound() {
  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Content>
          <Styles.Title color_scheme="accent">Oops, something is wrong</Styles.Title>

          <Styles.SubTitle color_scheme="accent">We could not find the page you are looking for</Styles.SubTitle>

          <Styles.Link to="/" variant="none">
            <Icons.ArrowLeftIcon />
            <Typography.Text>Return</Typography.Text>
          </Styles.Link>
        </Styles.Content>
        <Styles.NotFoundImage />
      </Styles.Main>
    </Styles.Container>
  );
}

export default NotFound;
