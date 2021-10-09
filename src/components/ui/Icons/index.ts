import styled from 'styled-components';

import { ReactComponent as ArrowLeft } from '../../../assets/img/svg/arrow-left.svg';
import { ReactComponent as Spinner } from '../../../assets/img/svg/eclipse-spinner.svg';

export const LoaderSpinner = styled(Spinner)`
  width: 30px;
  height: 30px;
`;

export const ArrowLeftIcon = styled(ArrowLeft)<ThemeProps>`
  width: 40px;
  height: 40px;

  path {
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }
`;
