import { Link } from '../../ui';

import * as Styles from './styles';

interface BackButtonProps {
  variant: 'light' | 'dark' | 'none';
}

function BackButton({ variant }: BackButtonProps) {
  return (
    <Link to="/" height={47} variant={variant}>
      <Styles.ArrowLeftIcon />

      <Styles.Text>back</Styles.Text>
    </Link>
  );
}

export default BackButton;
