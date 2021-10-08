import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ThemeProps {
  color_scheme: 'accent' | 'light' | 'dark' | 'none';
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 16px;
  border-radius: ${({ theme }: ButtonProps) => theme.borderRadius.base};
  background: ${({ color_scheme, theme }: ButtonProps) => theme.colors[color_scheme].button?.background};
  outline: none;
  border: none;
  cursor: pointer;
  transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};

  span {
    ${({ theme }: ButtonProps) => theme.typography.button};
    color: ${({ color_scheme, theme }: ButtonProps) => theme.colors[color_scheme].button?.text};
  }

  &:enabled:hover {
    transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
    background: ${({ color_scheme, theme }: ButtonProps) => theme.colors[color_scheme].button?.hover};
  }

  &:disabled {
    background: ${({ theme }: ButtonProps) => theme.colors.disabled.base};
    cursor: not-allowed;

    span {
      color: ${({ theme }: ButtonProps) => theme.colors.disabled.text};
    }
  }
`;

export default Button;
