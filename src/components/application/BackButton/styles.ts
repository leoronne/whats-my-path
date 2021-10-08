import styled from 'styled-components';

import { ReactComponent as ArrowLeft } from '../../../assets/img/svg/arrow-left.svg';

export const Text = styled.span`
  font-size: 18px;
  line-height: 22px;
  padding: 0 5px 0 10px;
`;

export const ArrowLeftIcon = styled(ArrowLeft)<ThemeProps>`
  width: 40px;
  height: 40px;

  path {
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }
`;
