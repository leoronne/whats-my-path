import styled from 'styled-components';

import { Link as UILink, Typography } from '../../components/ui';

import error from '../../assets/img/svg/404.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 35px;

  @media (min-width: 768px) {
    padding: 70px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }: ThemeProps) => theme.colors.accent.text};

  @media (min-width: 768px) {
    padding-right: 35px;
    text-align: left;
    align-items: flex-start;
  }
`;

export const Title = styled(Typography.Title)<ThemeProps>`
  font-size: 48px;
  line-height: 64px;

  @media (min-width: 1024px) {
    ${({ theme }: ThemeProps) => theme.typography.h1};
  }
`;

export const SubTitle = styled(Typography.SubTitle)<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.h6};
  margin-top: 25px;

  @media (min-width: 425px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const NotFoundImage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    background: no-repeat url(${error}) center right;
    background-size: contain;
    height: 100%;
    width: 80%;
  }
`;

export const Link = styled(UILink)`
  margin-top: 25px;
`;
