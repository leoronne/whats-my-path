import styled from 'styled-components';

import { Button as UIButton, Typography } from '../../components/ui';

export const Container = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

export const Main = styled.main`
  height: 100%;
`;

export const Title = styled(Typography.Title)<ThemeProps>`
  font-size: 48px;
  line-height: 64px;

  @media (min-width: 425px) {
    ${({ theme }: ThemeProps) => theme.typography.h1};
  }
`;

export const SubTitle = styled(Typography.SubTitle)<ThemeProps>`
  font-size: 12px;
  line-height: 15px;
  margin-top: 7px;
  text-transform: uppercase;
  letter-spacing: 0.35em;

  @media (min-width: 425px) {
    ${({ theme }: ThemeProps) => theme.typography.h6};
  }
`;

export const Button = styled(UIButton)`
  line-height: 22px;
  letter-spacing: 0.35em;
  font-size: 18px;
  text-transform: uppercase;
  min-width: 189px;
`;
