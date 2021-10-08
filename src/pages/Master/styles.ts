import styled from 'styled-components';

import { Button as UIButton } from '../../components/ui';

interface Props extends ThemeProps {
  variant: 'light' | 'dark' | 'none';
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  height: 100%;
  transition: all ${({ theme }: Props) => theme.transitions.easeInOut.fast};
  background: ${({ variant, theme }: Props) => theme.colors[variant].base};

  @media (min-width: 425px) {
    padding: 35px;
  }
`;

export const Header = styled.header`
  padding: 0 10px;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
  padding: 0 10px;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Button = styled(UIButton)`
  min-width: 280px;

  @media (min-width: 475px) {
    min-width: 347px;
  }
`;
