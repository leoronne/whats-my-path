import { LinkHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement>, ThemeProps {
  variant: 'light' | 'dark' | 'accent' | 'none';
  height?: number;
}

const Link = styled(RouterLink)<LinkProps>`
  display: flex;
  align-items: center;
  height: ${({ height }: LinkProps) => (height ? `${height}px` : 'fit-content')};
  width: fit-content;
  padding: 0 5px;
  color: ${({ variant, theme }: LinkProps) => theme.colors[variant].link?.text};
  border-radius: ${({ theme }: LinkProps) => theme.borderRadius.large};
  transition: ${({ theme }: LinkProps) => theme.transitions.easeInOut.base};

  ${({ theme }: LinkProps) => theme.typography.link};

  &:hover {
    transition: ${({ theme }: LinkProps) => theme.transitions.easeInOut.base};
    background: ${({ variant, theme }: LinkProps) => theme.colors[variant].link?.hover};
  }

  svg > path {
    fill: ${({ variant, theme }: LinkProps) => theme.colors[variant].link?.text};
  }
`;

export default Link;
