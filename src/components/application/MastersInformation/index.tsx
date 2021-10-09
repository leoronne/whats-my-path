import { Typography } from '../../ui';

import darth from '../../../assets/img/png/darth.png';
import luke from '../../../assets/img/png/luke.png';

import * as Styles from './styles';

interface MastersInformationProps {
  path: 'dark' | 'light' | 'none';
  name: string;
}

function MastersInformation({ path, name }: MastersInformationProps) {
  return (
    <Styles.Container>
      <Styles.Image src={path === 'light' ? luke : darth} alt={`${name} visual picture`} />
      <Typography.Caption color_scheme={path}>
        Your master is <strong>{name}</strong>
      </Typography.Caption>
    </Styles.Container>
  );
}

export default MastersInformation;
